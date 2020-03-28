$(document).ready(function () {
  //when button is clicked
  $("#searchBtn").on("click", function (e) {

    e.preventDefault()
    // Get data from the form and store into variables- please add into searchBtn clickevent
    var searchInput = $("#searchTerm").val();
    //API key needs to be seperate from URL so I can add in the searchInput
    var apiKey = "&api-key=uyGLL9yOJVBJoBF4IPKDZe8t1MgduBpS";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + apiKey;

    var numOfRecords = parseInt($("#numOfRecords").val());

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (data) {

      for (var i = 0; i < numOfRecords; i++) {
        
        var newArticle = $("<div>").addClass("newArticle");
        var newArticleTitle = $("<h3>").text(data.response.docs[i].headline.main);
        var newArticleAbstract = $("<p>").text(data.response.docs[i].abstract);

        newArticle.append(newArticleTitle);
        newArticle.append(newArticleAbstract);
       
        $("#top-results").append(newArticle);
      }
    });



    //   var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     }).then(function(data){
    //         $("top-results")
    //     }
    //   })

    //   function keywordEntry(
    //       if ()
    //   )

  });
});
