//API Call - YouTube
$(document).ready(function() {
//Variables for YouTube API call
    var apiKey = "";
    var playListId = "PL-qpR0uYyvkYitfDZOPmNAivTZPP4pacs";
    //API Url
    var url = "https://www.googleapis.com/youtube/v3/playlistItems";
    //Object for API call
    var options = {
        part: 'snippet',
        key: apiKey,
        maxResults: 10, 
        playListId: playListId,
    }

//Function for API Call
load();

function load() {
    $.getJSON(url, options, function(response){
    console.log(response );
    })
}

});

