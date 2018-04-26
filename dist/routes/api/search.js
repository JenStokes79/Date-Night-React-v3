
const request = require('request');

module.exports = app => {
    app.post("/api/search", (req, res, next) => {
        console.log('req.body', req.body);
        const { body } = req;
        const { genre, foodType, zipcode } = body;
        const options = {
            url: `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${zipcode}&categories=${foodType}`,
            headers: {
                'Authorization': 'Bearer S7Iu9qp-LWQHVALB4GweWmd0ngVavSMAcMatDXn6PFk6tXIFDWBa4uNxhawNkJllDGo5c5-JvrIjIBvf-581Y4jxpPpsQZKExlOMEtEgyC-4g4wq0zjxutTqeZY0WnYx'
            }
        };

        request(options, (err, response, resbody) => {
            //   console.log('error', err);
            //   console.log('res', response);
            //   console.log('body', resbody);
            res.send(resbody);
        });
    });
};
//# sourceMappingURL=search.js.map