var express = require('express');
var router = express.Router();
var sql = require('mssql');
var common = require("../public/javascripts/Common");
var sugar = require('sugar');

// Connect to the db
router.post('/', function (req, res, next) {

    console.log(req.query);
    var field = req.query.field;
    //console.log(fname);
    console.log(req.query.field);
    var pool = new sql.ConnectionPool(common.config, function (err) {
        if (err) {
            console.log(err);

        }
        var request = new sql.Request(pool);
        request.input('searchValue', sql.VarChar(50), req.body.searchText)
            .execute('FullSearch', function (err, recordset) {
                if (err) {
                    console.log(err);

                }
                if (recordset) {
                    console.log(recordset);

                    res.send(recordset.recordset);
                }
            });

    });

});
module.exports = router;