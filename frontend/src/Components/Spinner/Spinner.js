import React from "react";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import "./Spinner.css";

// <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

class Spinner extends React.Component{
    constructor() {
        super();
        }
    render(){
        //set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function(){
	
	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		
		//add 1 every click
		clicks ++;
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		var totalDegree = newDegree+extraDegree;
		
		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				console.log(aoY);
				
				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			
		});
	});
	
	
	
});//DOCUMENT READY
	


        return(
            <div className="Spinner">
                <div id="wrapper">
                    <div id="wheel">
                        <div id="inner-wheel">
                            <div className="sec"><span className="fa fa-bell-o"></span></div>
                            <div className="sec"><span className="fa fa-comment-o"></span></div>
                            <div className="sec"><span className="fa fa-smile-o"></span></div>
                            <div className="sec"><span className="fa fa-heart-o"></span></div>
                            <div className="sec"><span className="fa fa-star-o"></span></div>
                            <div className="sec"><span className="fa fa-lightbulb-o"></span></div>
                        </div>       
                        <div id="spin">
                            <div id="inner-spin"></div>
                        </div>
                        <div id="shine"></div>
                    </div>
                    <div id="txt"></div>
                </div>
            </div>
        )
    }
}



export default Spinner