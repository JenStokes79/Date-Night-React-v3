'use strict';

var request = require('request');

module.exports = function (app) {
    app.post("/api/searchMovie", function (req, res, next) {
        console.log('req.body', req.body);
        // console.log('today', today)
        var body = req.body;
        var genre = body.genre,
            foodType = body.foodType,
            zipcode = body.zipcode,
            date = body.date;

        var options = {
            url: 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + date + '&zip=' + zipcode + '&api_key=kh99q83z7y2cwgvavy3tgekn'
            // data: {
            // //     // 'date': date,
            // //    	// 'zip': zipcode,
            //  	'jsonp': "dataHandler"
            // // 	// api_key: 'kh99q83z7y2cwgvavy3tgekn'
            // },
            // dataType: 'jsonp'
        };

        request(options, function (err, response, resbody) {
            //   console.log('error', err);
            //   console.log('res', response);
            //   console.log('body', resbody);
            res.send(resbody);
        });
    });
};
//# sourceMappingURL=searchMovie.js.map