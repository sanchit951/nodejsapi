var express = require('express');
var router = express.Router();
var sql = require('mssql');
var common = require("../public/javascripts/Common");

// Connect to the db
router.post('/', function (req, res, next) {
    req.on('error', (err) => {
        res.send(err);
    })
    console.log("body",req.body.id);
    
    var pool = new sql.ConnectionPool(common.config, function (err) {
        if (err) {
            console.log(err);

        }
        var request = new sql.Request(pool);
        request.input(common.id, sql.Int, req.body.id)
            .execute(common.deleteEmployeeProcedure, function (err, recordset) {
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