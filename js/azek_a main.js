/*var self = document.getElementById("b-self0");

/*function selfScript(){
	document.getElementById("b-self0").style.height="200px";
};

function selfScript(){
	self.style.height="200px";
};*/

var self = document.getElementsByClassName("b-self");
var self0 = self[0];

function selfScript(){
	self0.style.height="200px";
};

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
        $('.bg-logo0').addClass("bg-logo0a");
		
    } else {
        $('.bg-logo0').removeClass("bg-logo0a");

    }

});



