$(document).ready(function () {
    //when button is clicked
    $("#searchBtn").on("click", function (e) {
        console.log(event)
        e.preventDefault()
        // Get data from the form and store into variables- please add into searchBtn clickevent
        var searchInput = $("#searchTerm").val();
        //API key needs to be seperate from URL so I can add in the searchInput
        var apiKey = "&api-key=uyGLL9yOJVBJoBF4IPKDZe8t1MgduBpS";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + apiKey;
        
        console.log(searchInput);
        var ofRecords=parseInt( $("#ofRecords").val());

        $.ajax({
            url: queryURL, 
            method: "GET"
        }).then(function (data) {
            
            for (i=0; i<=ofRecords; i++){
            var newArticle= $("<div>")
            console.log(data)
            var newArticleTitle=$("<h3>").text(data.response.docs[i].headline.print_headline);
            console.log(newArticleTitle)
            var newArticleAbstract=$("<p>").text(data.response.docs[i].abstract);
            console.log(newArticleAbstract)
            newArticle.append(newArticleTitle).append(newArticleAbstract);
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
