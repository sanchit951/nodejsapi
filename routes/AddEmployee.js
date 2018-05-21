var express = require('express');
var router = express.Router();
var sql = require('mssql');
var common = require("../public/javascripts/Common");
var sugar = require('sugar');

// Connect to the db
router.post('/', function (req, res, next) {
    req.on('error', (err) => {
        res.send(err);
    })
    console.log(req.body);
    console.log(common);
    var pool = new sql.ConnectionPool(common.config, function (err) {
        if (err) {
            console.log(err);

        }
        var request = new sql.Request(pool);
        console.log(request);


        var dateval = sugar.Date.create(req.body.Dateofjoin).toLocaleDateString
        dateval = sugar.Date(dateval).raw;
        console.log(dateval);
        request.input(common.fetchEmployeeInput, sql.VarChar(50), req.body.FirstName)
            .input(common.EmployeeLname, sql.VarChar(50), req.body.LastName)
            .input(common.EmployeeDoj, sql.Date, dateval)
            .input(common.EmployeeGender, sql.VarChar(20), req.body.Gender)
            .input(common.EmployeeLocation, sql.VarChar(50), req.body.Location)
            .input(common.EmployeeState, sql.VarChar(50), req.body.State)
            .input('rating',sql.Int,req.body.Rating)
            .execute(common.addEmployeeProcedure, function (err, recordset) {
                if (err) {
                    console.log("error is" + err);
                    res.send(err);

                }
                console.log(recordset);
                res.send(recordset);
            })
    })

})
module.exports = router;