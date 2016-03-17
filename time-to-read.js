$(window).ready(function(){
  var fetchData = $('p').text();
  var wordsPerMinute = 230;

  var timeToRead = function(fetchData, wordsPerMinute){
    wordCount = fetchData.split(" ").length;
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

  $('.time-to-read-view').append(newHTML);

});
