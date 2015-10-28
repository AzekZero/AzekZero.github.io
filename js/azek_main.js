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

    if (scroll >= 5) {
        $('.bg-logo0').addClass("bg-logo0a");
		$('.bg-logo1a').addClass("bg-logo1");
		
    } else {
        $('.bg-logo0').removeClass("bg-logo0a");
		$('.bg-logo1a').removeClass("bg-logo1");
    }

});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
		$('.bg-logo1a').addClass("bg-logo1");
		
    } else {
		$('.bg-logo1a').removeClass("bg-logo1");
    }

});


