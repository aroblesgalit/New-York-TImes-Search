// Do preliminary research on the API using the link above
// Register for an API key if you haven't already
// Understand what format the URL should look like to make an article call
// Experiment with console logging various fields

const apiKey = "uyGLL9yOJVBJoBF4IPKDZe8t1MgduBpS"

$("searchBtn").on("click", function() {

function displayArticleInfo() {

    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json&api-key=" + apiKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
        $("top-results")
    }
  }
  