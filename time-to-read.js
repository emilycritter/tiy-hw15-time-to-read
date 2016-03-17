$(window).ready(function(){

  // var wordsPerMinute = 230;

  var calculateTimeToRead = function(fetchData, wordsPerMinute){
    var timeToRead = function(fetchData, wordsPerMinute){
      wordCount = fetchData.split(" ").length;
      wordCount = wordCount + fetchData.split(".").length;
      wordCount = wordCount + fetchData.split(",").length;
      console.log(wordCount);
      wordCount = wordCount + fetchData.split("<p>").length;
      console.log(wordCount);
      wordCount = wordCount + fetchData.split("<script>").length;
      console.log(wordCount);
      wordCount = wordCount + fetchData.split("<nav>").length;
      console.log(wordCount);
      wordCount = wordCount + fetchData.split("<h1>").length;
      console.log(wordCount);
      wordCount = wordCount + fetchData.split("<h3>").length;
      console.log(wordCount);
      timeToRead = wordCount / wordsPerMinute;
      timeToRead = Math.round(timeToRead);
      return timeToRead;
    };
    timeToRead(fetchData, wordsPerMinute);

    var newHTML = '<p>' + timeToRead + ' minutes to read</p>';
    var $htmlTag = $('time-to-read-view');

    $('.time-to-read-view p').html("")
    $('.time-to-read-view').append(newHTML);
  };

  var fetchData = $('p').text();
  calculateTimeToRead(fetchData, 230);

  $("button#update-time-calc").on("click", function(){
    var wordsPerMinute = $("#update-wpm").val();
    console.log(wordsPerMinute);
    calculateTimeToRead(wordsPerMinute);
  });

  console.log($("body").html());
  var fetchData = $("body").html();
  var timeToReadWithDetails = calculateTimeToRead(fetchData, 230);
});
