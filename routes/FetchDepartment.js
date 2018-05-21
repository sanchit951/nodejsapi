var express = require('express');
var router = express.Router();
var sql = require('mssql');
var common = require("../public/javascripts/Common");
var sugar = require('sugar');

// Connect to the db
router.get('/', function (req, res, next) {
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


       
        request.execute(common.fetchDepartment, function (err, recordset) {
                if (err) {
                    console.log("error is" + err);
                    res.send(err);

                }
                console.log(recordset.recordset);
                res.send(recordset.recordset);
            })
    })

})
module.exports = router;