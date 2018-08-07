$(document).ready(function() {
    // Global variables
    var key = "AIzaSyAwqRH_uY8zqhE37uzmLOftrMYaTbT36RM";
    var playlistId = "PL-qpR0uYyvkYitfDZOPmNAivTZPP4pacs";
    var URL = "https://www.googleapis.com/youtube/v3/playlistItems";
    var options = {
        part:"snippet",
        key: key,
        maxResults: 20,
        playlistId: playlistId,
    }

    loadVids();

    function loadVids() {
        // $.getJSON(URL, options, playlistId, function(data) {
        // console.log(data);
        // })

        $.getJSON(URL, options, function(data) {
            console.log(data);
        })
    } 
});
