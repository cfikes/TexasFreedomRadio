//Insert News Feed
var xml;
$( "#newspage" ).on( "pagecreate", function( event ) {
    $.ajax({
        type: "GET",
        url: "http://fikesmedia.com/_freedom1300/articles.xml",
        dataType: "xml",
        success: xmlParser
    });
	
    function xmlParser(data) {
    
    xml = data;

    $('#nload').fadeOut();

    $(xml).find("item").each(function () {
        var ntitle = $(this).find("title").text();
        var ndate = $(this).find("pubDate").text();
        var ndesc = $(this).find("description").text();
        var nlink = $(this).find("link").text();

        $("#nlist").append('<li><h3 id="ntitle">' + ntitle + '</h3><p>' + ndesc + '</p><p>' + ndate + '<br>');

        $('#nlist').listview('refresh'); 
    });
}

});