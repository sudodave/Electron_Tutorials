let request = require('request');

request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",
        function(err, response, body) {
  let bodyJson = JSON.parse(body);
  let randomQuote = bodyJson[0]["content"]["rendered"];
  document.getElementById("quote").innerHTML = randomQuote;
});

let counter = 0;
function refreshQuote() {
  counter++;
  console.log(counter);
  request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",
          function(err, response, body) {
    let bodyJson = JSON.parse(body);
    let randomQuote = bodyJson[0]["content"]["rendered"];
    document.getElementById("quote").innerHTML = randomQuote;
  });
}

setInterval(refreshQuote, 5000)
