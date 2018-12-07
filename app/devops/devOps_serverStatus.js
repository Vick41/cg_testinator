var http = require("http");
module.exports = {
    '@tags':['mars','app','devOps','status'],
    'Check Response Code':function (client) {
        var request = http.request({
            host: "10.29.21.253",
            port: 80,
            path: "/",
            method: "HEAD"
        }, function (response) {
            client
                .assert.equal(response.statusCode, 200, 'Server is Running (Received 200 Code)');
            client.end();
        }).on("error", function (err) {
            console.log(err);
            client.end();
        }).end();
    }
};