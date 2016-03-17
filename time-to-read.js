var fetchData = $('p').text();

console.log(fetchData);


var timeToRead = function(fetchData){
  var wordsPerMinute = 230;
  wordCount = fetchData.split(" ").length;
  timeToRead = wordCount / wordsPerMinute;
  timeToRead = Math.round(timeToRead);
  return timeToRead;
};

console.log(timeToRead(fetchData));
