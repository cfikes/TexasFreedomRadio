//Insert Advertisement into App
$(document).ready(function(){
	loadadv(0);
	window.setInterval(function(){ loadadv(1); }, 360000);
	
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
    
	//$("#advertisement").on("pagecreate",function(event) {
	//	loadadv();
	//console.log("Add Impression");
	//});

});


function showadv(){
	$.mobile.pageContainer.pagecontainer("change", "#advertisement")
}

function loadadv(sbit) {
    var xml;
    $.ajax({
        type: "GET",
        url: "http://www.texasfreedomradio.com/mobileadvertisers.xml",
        dataType: "xml",
        success: xmlParser
    });
	
    function xmlParser(data) {
    
    console.log("xmlParser loaded.");
    xml = data;
    console.log("Pulled XML for AD");

    $(xml).find("item").each(function () {
		var wheight = $(window).height();
	    var wwidth = $(window).width();
	    var iheight;
	    var bheight;
	    
	    if (wheight>=wwidth) {
		    iwidth=wwidth*.80;
			bheight=wwidth*.95;   
	    } else {
		    iwidth=wheight-140;
			bheight=iheight*.95;	    
	    }
	    $("#adbutton").attr("height", iwidth*.9);
    
		var atitle = $(this).find("title").text();
		var aimg = $(this).find("link").text();
		var awebsite = $(this).find("description").text();
		var atelephone = $(this).find("pubDate").text();
		atelephone = "tel\:" + atelephone;
		
		$("#adspace").css({"height": iwidth,"width": iwidth,"background-size": iwidth});
		aimg = "url(" + aimg + ")";
		$("#adspace").css("background", aimg);
		$("#adspace").css("background-size", "cover");

		//		$("#advertiser").html(atitle);
		$("#callsponsor").attr("href",atelephone);
		$("#visitsponsor").attr("href",awebsite);
		$("#adlocation").attr("href",awebsite);
		$("#adlocation").attr("onClick","javascript:return openlink(this)");
				
    });
	}
	if ($.mobile.activePage.attr("id")!= "advertisement" && sbit==1) {
	sbit=0;
	$.mobile.pageContainer.pagecontainer("change", "#advertisement");
	}
}

function loadplayingad() {
    var xml;
    $.ajax({
        type: "GET",
        url: "http://www.texasfreedomradio.com/mobileadvertisers.xml",
        dataType: "xml",
        success: xmlParser
    });
	
    function xmlParser(data) {
   
    xml = data;
    console.log("Pulled XML for Now Playing AD");

    $(xml).find("item").each(function () {
		var wheight = $(window).height();
	    var wwidth = $(window).width();
	    var iheight;
	    var bheight;
	    
	    if (wheight>=wwidth) {
		    iwidth=wwidth*.80;
			bheight=wwidth*.95;   
	    } else {
		    iwidth=wheight-140;
			bheight=iheight*.95;	    
	    }
	        
		var paimg = $(this).find("link").text();
		paimg = "url(" + paimg + ")";
		$("#showinfo").css("background", paimg);
		$("#showinfo").css("background-size", "cover");
			
    });
	}
}
