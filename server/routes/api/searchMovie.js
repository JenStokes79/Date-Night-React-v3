
const request = require('request');

module.exports = app => {
    app.post("/api/searchMovie", (req, res, next) => {
        console.log('req.body', req.body);
        // console.log('today', today)
        const { body } = req;
        const { genre, foodType, zipcode, date } = body;
        const options = {
            url: `http://data.tmsapi.com/v1.1/movies/showings?startDate=${date}&zip=${zipcode}&api_key=kh99q83z7y2cwgvavy3tgekn`,
            // data: {
            // //     // 'date': date,
       	 	// //    	// 'zip': zipcode,
       	   	//  	'jsonp': "dataHandler"
       	    // // 	// api_key: 'kh99q83z7y2cwgvavy3tgekn'
            // },
            // dataType: 'jsonp'
        }


        request(options, (err, response, resbody) => {
            //   console.log('error', err);
            //   console.log('res', response);
            //   console.log('body', resbody);
            res.send(resbody);
        })
    })

};
