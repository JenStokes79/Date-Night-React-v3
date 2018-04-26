import $ from "jquery"


export function test(){
    alert("imported from helpers.js")
}
// function to find restaurant
export function searchRestaurant(argument) {
    //Yelp AJAX Call
    // var foodZip =  $('#input-zipCode').val().trim();
    // var foodCategory = $('#sel2').val().trim().toLowerCase()
    var url = "https://cryptic-headland-94862.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&location="+94530+"&categories="+"chinese"
    var settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "GET",
            "headers": {
            "authorization": "Bearer S7Iu9qp-LWQHVALB4GweWmd0ngVavSMAcMatDXn6PFk6tXIFDWBa4uNxhawNkJllDGo5c5-JvrIjIBvf-581Y4jxpPpsQZKExlOMEtEgyC-4g4wq0zjxutTqeZY0WnYx",
            }
    }
    $.ajax(settings).done(function (response) {

        var results = response;
        console.log('yelp results', results);
            
        //console.log('mathRandom', results.businesses[Math.floor((Math.random() * 19) + 1)]);
        var fRandom = Math.floor((Math.random() * 19) + 1);
        var randomFoodResult = results.businesses[fRandom];
        console.log('randomFoodResult', randomFoodResult);
        //Create variables from the ajax call to display restaurant info into the DOM
        var fName = randomFoodResult.name;
        // var fLocation = randomFoodResult.location;
        // var fRating = randomFoodResult.rating;
        // var fPhone = randomFoodResult.display_phone;
        
        //Display results in the DOM
        $('#yelpResults').html(fName);
    })
}

// function to find activity
export function searchActivity(arg2) {
    //Yelp AJAX Call
    var businesses = arg2
    // var foodZip =  $('#input-zipCode').val().trim();
    // var foodCategory = $('#sel2').val().trim().toLowerCase()
    var url = "https://cryptic-headland-94862.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+businesses+"&location="+94530
    var settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "GET",
            "headers": {
            "authorization": "Bearer S7Iu9qp-LWQHVALB4GweWmd0ngVavSMAcMatDXn6PFk6tXIFDWBa4uNxhawNkJllDGo5c5-JvrIjIBvf-581Y4jxpPpsQZKExlOMEtEgyC-4g4wq0zjxutTqeZY0WnYx",
            }
    }
    $.ajax(settings).done(function (response) {

        var results = response;
        console.log('yelp results', results);
        // console.log('results length', results.length)
            
        //console.log('mathRandom', results.businesses[Math.floor((Math.random() * 19) + 1)]);
        var fRandom = Math.floor((Math.random() * results.businesses.length) + 1);
        var randomWheelResult = results.businesses[fRandom];
        console.log('randomWheelResult', randomWheelResult);
        //Create variables from the ajax call to display restaurant info into the DOM
        // var fName = randomWheelResult.name;
        // var fLocation = randomFoodResult.location;
        // var fRating = randomFoodResult.rating;
        // var fPhone = randomFoodResult.display_phone;
        
        //Display results in the DOM
        // $('#yelpResults').html(fName);
    })
}
