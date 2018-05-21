var express = require('express');
var router = express.Router();
var sql = require('mssql');
var sugar = require('sugar');
var common = require("../public/javascripts/Common");
var moment=require('moment');
// Connect to the db
router.post('/', function (req, res, next) {
    req.on('error', (err) => {
        res.send(err);
    })
    console.log(req.body);

    var pool = new sql.ConnectionPool(common.config, function (err) {
        if (err) {
            console.log(err);

        }
        var request = new sql.Request(pool);
       
        var temp=moment(req.body.DateofJoin).add(1,'days').format('YYYY/MM/DD');
        console.log("date is",temp);
     
        request.input(common.id, sql.Int, req.body.id)
            .input(common.fetchEmployeeInput, sql.VarChar(50), req.body.FirstName)
            .input(common.EmployeeLname, sql.VarChar(50), req.body.LastName)
            .input(common.EmployeeDoj, sql.Date, temp)
            .input(common.EmployeeGender, sql.VarChar(20), req.body.Gender)
            .input(common.EmployeeLocation, sql.VarChar(50), req.body.Location)
            .input(common.EmployeeState, sql.VarChar(50), req.body.State)
            .input('Rating',sql.Int,req.body.Rating)
            .execute(common.editEmployeeProcedure, function (err, recordset) {
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