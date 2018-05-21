var express = require('express');
var router = express.Router();
var sql = require('mssql');
var common = require("../public/javascripts/Common");

// Connect to the db
router.get('/', function (req, res, next) {

   // console.log(req.query.fname);
    //var fname = req.query.fname;
    //console.log(fname);
    var pool = new sql.ConnectionPool(common.config, function (err) {
        if (err) {
            console.log(err);

        }
       var request = new sql.Request(pool);

        request.execute(common.FetchEmployeeProcedure, function (err, recordset) {
                if (err) {
                    console.log(err);

                }
                console.log(recordset);
                
                res.send(JSON.stringify(recordset.recordset));
            })
    })

})
module.exports = router;