//Insert News Feed

$("#podcasts").on("pagecreate",function(event) {
	loadpodcasts();
});

function loadpodcasts() {
    var xml;
    $("#plist").html('<li id="plistloading">Loading Podcasts...</li>');
	
    $.ajax({
        type: "GET",
        url: "http://www.texasfreedomradio.com/podcasts.xml",
        dataType: "xml",
        success: xmlParser
    });
	
    function xmlParser(data) {
    console.log("Podcasts loaded.");
    xml = data;
    $("#plistloading").hide();

    $(xml).find("show").each(function () {

        var ptitle = $(this).find("title").text();
        var pdesc = $(this).find("desc").text();
		var pimg = $(this).find("image").text();
        var prss = $(this).find("rss").text();
	
		$("#plist").append('<li><a href="' + prss + '"><img src="' + pimg + '"><h2>' + ptitle + '</h2><p>' + pdesc + '</p></a></li>');
		$('#plist').listview('refresh'); 
    });
	}
}