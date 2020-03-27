//when button is clicked
$("#searchBtn").click( function (){
// Get data from the form and store into variables- please add into searchBtn clickevent

//API key needs to be seperate from URL so I can add in the searchInput
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var searchInput = document.getElementById("#searchTerm");
var apiKey = "&api-key=uyGLL9yOJVBJoBF4IPKDZe8t1MgduBpS";

$.ajax({
    url: queryURL + searchInput + apiKey
    method: "GET"
  }).then(function(response){
      $("top-results")
  };


});