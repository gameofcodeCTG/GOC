'use strict';
var path = require("path");

module.exports = function () {
    //4XX - URLs not found
    return function customRaiseUrlNotFoundError(req, res, next) {
        var normalized = path.normalize(__dirname + "/.." );
        
        res.sendFile(path.resolve(normalized,'client','index.html'), function (err) {
            if (err) {
                console.error(err);
                res.status(err.status).end();
            }
        });
    };
};



