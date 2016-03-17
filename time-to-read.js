$(window).ready(function(){

  // var wordsPerMinute = 230;
  var fetchData = $('p').text();

  var calculateTimeToRead = function(wordsPerMinute){
    var timeToRead = function(fetchData, wordsPerMinute){
      wordCount = fetchData.split(" ").length;
      console.log(wordCount);
      wordCount = wordCount + fetchData.split(".").length;
      console.log(wordCount);
      wordCount = wordCount + fetchData.split(",").length;
      console.log(wordCount);
      timeToRead = wordCount / wordsPerMinute;
      timeToRead = Math.round(timeToRead);
      return timeToRead;
    };

    console.log("Approximately " + timeToRead(fetchData, wordsPerMinute) + " minutes to read");
    // var approxTime = timeToRead(fetchData, wordsPerMinute);
    readingTime = timeToRead;

    var newHTML = '<p>' + readingTime + ' minutes to read</p>';
    var $htmlTag = $('time-to-read-view');

    console.log(newHTML);
    $('.time-to-read-view p').html("")
    $('.time-to-read-view').append(newHTML);
  };

  calculateTimeToRead(230);

  $("button#update-time-calc").on("click", function(){
    var wordsPerMinute = $("#update-wpm").val();
    console.log(wordsPerMinute);
    calculateTimeToRead(wordsPerMinute);
  });

});
