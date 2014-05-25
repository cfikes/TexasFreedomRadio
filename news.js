//Insert News Feed

$("#newspage").on("pagecreate",function(event) {
	loadnews();
});

function loadnews() {
    $("#nlist").html("");
	$('#nload').fadeIn();

    $.ajax({
        type: "GET",
        url: "http://fikesmedia.com/_freedom1300/articles.xml",
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
        var ndesc = $(this).find("description").text();
        var nlink = $(this).find("link").text();
		
		$("#nlist").append('<li><h3 id="ntitle">' + ntitle + '</h3><p>' + ndesc + '</p><p>' + ndate + '<br>');			
		$('#nlist').listview('refresh'); 
    });

	}
}