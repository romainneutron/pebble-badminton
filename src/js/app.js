var timeline = require('timeline');

Pebble.addEventListener('ready', function() {
  console.log('PebbleKit JS ready!');
});

// Get AppMessage events
Pebble.addEventListener('appmessage', function(e) {
  // Get the dictionary from the message
  var dict = e.payload;

  console.log('Got message: ' + JSON.stringify(dict));
  
  if(dict.Result && dict.Score && dict.ScoreDetails) {
    var date = new Date();
    
    var pin = {
      "id": "badminton-" + date.toISOString(),
      "time": date.toISOString(),
      "layout": {
        "type": "genericPin",
        "title":  dict.Result + " a badminton match!",
        "body": "Score: " + dict.Score + ". Details: " + dict.ScoreDetails,
        "tinyIcon": "system://images/TIMELINE_SPORTS"
      }
    };
  
    timeline.insertUserPin(pin, function(responseText) { 
      console.log('Result: ' + responseText);
    });
  }
});