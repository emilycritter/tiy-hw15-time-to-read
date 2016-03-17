$(window).ready(function(){

  var calculateTimeToRead = function(wordsPerMinute){
    var timeToRead = function(fetchData, wordsPerMinute){
      wordCount = fetchData.split(" ").length;
      wordCount = wordCount + fetchData.split(".").length;
      wordCount = wordCount + fetchData.split(",").length;
      timeToRead = wordCount / wordsPerMinute;
      timeToRead = Math.round(timeToRead);
      return timeToRead;
    };

    var fetchData = $('p').text();
    timeToRead(fetchData, wordsPerMinute);

    var newHTML = '<p>' + timeToRead + ' minutes to read</p>';
    var $htmlTag = $('time-to-read-view');

    $('.time-to-read-view p').html("")
    $('.time-to-read-view').append(newHTML);
  };

  calculateTimeToRead(230);

  $("button#update-time-calc").on("click", function(){
    var wordsPerMinute = $("#update-wpm").val();
    calculateTimeToRead(wordsPerMinute);
  });

});
