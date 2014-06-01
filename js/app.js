var myMedia = null;
$( document ).ready(function() {
    var wheight = $(window).height();
    var wwidth = $(window).width();
    var iheight;
    var iwidth;
    var bheight;
    console.log(wheight);
    
    if (wheight>=wwidth) {
	    iheight=wwidth*.80;
	    iwidth=wwidth-30;
		bheight=wwidth*.40;   
    } else {
	    iwidth=wheight-140;
		bheight=iheight*.40;	    
    }
    console.log(iheight);
    updateShow(iheight);
    window.setInterval(function(){ updateShow(iheight); }, 60000);

    $("#sbutton").hide();
	$("#showinfo").css({"height": iwidth,"width": iwidth,"background": "url(\"img/generic.jpg\")","background-size": iwidth});
	$("#pbutton").attr("height", bheight);
	$("#sbutton").attr("height", bheight);	
		
	//UbaPlayer
	//$(function(){
	//	$("#ubaplayer").ubaPlayer({
	//	codecs: [{name:"MP3", codec: 'audio/mpeg;'}]
	//	});
	//});
	
});

$(window).resize(function() {
    var wheight = $(window).height();
    var wwidth = $(window).width();
    var iheight;
    var bheight;
    console.log(wheight);
    
    if (wheight>=wwidth) {
	    iheight=wwidth*.80;
		bheight=wwidth*.40;   
    } else {
	    iheight=wheight-140;
		bheight=iheight*.40;	    
    }
    console.log(iheight);
    updateShow(iheight);

   	$("#showinfo").css({"height": iheight,"width": iheight,"background": "url(\"img/generic.jpg\")","background-size": iheight});
	$("#pbutton").attr("height", bheight);
	$("#sbutton").attr("height", bheight);	
});


function fplay() {
	$("#pbutton").hide();
	$("#sbutton").show();
	//var audioPlayer = document.getElementById("shoutcast");
    //audioPlayer.play();
	//$("#hiddenplayer").click();

// For Desktop and Web
//	html5audio.play();
//	myMedia = new Media("http://streams4.museter.com:8516/;stream.mp3");
	myMedia.play();
}

function fpause() {
	$("#sbutton").hide();
	$("#pbutton").show();
	var audioPlayer = document.getElementById("shoutcast");
    //audioPlayer.pause();
    //audioPlayer.currentTime = 0;
	//$("#hiddenplayer").click();

// For Desktop and Web
//	html5audio.pause();
	myMedia.stop();
}

function openlink(element) {
	window.open(element.href,"_system");
	return false;
}