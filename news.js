//Insert News Feed

$("#newspage").on("pagecreate",function(event) {
	loadnews();
});

function loadnews() {
    $("#nlist").html("");

    $.ajax({
        type: "GET",
        url: "http://www.fikesmedia.com/_freedom1300/articles.xml",
        dataType: "xml",
        success: xmlParser
    });
	
    function xmlParser(data) {
    var xml = data;
    $('#nload').fadeOut();
    $("#nlist").html("");
	var counter = 0;
    $(xml).find("item").each(function () {

        var ntitle = $(this).find("title").text();
        var ndate = $(this).find("pubDate").text();
        ndate = ndate.substring(0, ndate.length - 15);
        var ndesc = $(this).find("description").text();
        var nlink = $(this).find("link").text();
		//$("#nlist").append('<li><h3 id="ntitle">' + ntitle + '</h3><p>' + ndesc + '</p><p>' + ndate + '<br>');			
		$("#nlist").append('<li><a href="' + nlink + '" target="_system"><h2>' + ntitle + '</h2><p><strong>' + ndate +'</strong></p></a>');
		$('#nlist').listview('refresh'); 
    });

	}
}