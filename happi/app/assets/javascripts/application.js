

$(document).ready(function(){

  // $body = $("body");
  //
  // $(document).on({
  //     ajaxStart: function() { $body.addClass("loading");    },
  //      ajaxStop: function() { $body.removeClass("loading"); }
  // });



  _.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
  };


  // var ourPeople = {
  //     people: [
  //         {
  //             name: "Jesse Wolgamott",
  //             photoUrl: "https://avatars2.githubusercontent.com/u/123075?v=2&s=460",
  //             githubUsername: "@jwo"
  //         },
  //         {
  //             name: "Astrid",
  //             photoUrl: "https://avatars1.githubusercontent.com/u/7379011?v=2&s=460",
  //             githubUsername: "astridw"
  //         }
  //     ]
  // };



  $("article button").on("click", function() {

    // $loader = $("#ajax-loader");
    // $(this).replaceWith($loader);
    // $loader.show();

    $(this).after("<div class='modal'></div>");

    $.getJSON("/pages/people.json")
      .done(function(data){
        // Step 1: Grab the HTML of the template
        // Step 2: compile the template
        // Step 3: give it the data
        // Step 4: Add to the HTML

        // grab the html

        var templateHtml = $(".template").html();

        // compile template
        var compiler = _.template(templateHtml);

        // Give data
        var result = compiler(data);

        // Add to HTML

        $("article").html(result);

      });
  });




});
