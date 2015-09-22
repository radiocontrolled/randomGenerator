(function() {

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml'; 
  var random; 

  function init() {
	  Tabletop.init({ 
      key: public_spreadsheet_url,
		  callback: getRandomAnswer,
      simpleSheet: true 
    })
  }

  window.onload = function() { 
    init(); 
  };

  var populateAnswerDiv = function(rand) {

    var answer = document.getElementById("answer");
    var figure = document.createElement("figure");
    var img = document.createElement("img");
    var figcaption = document.createElement("figcaption");

    img.src = rand.ImageURL;
    img.alt = rand.ImageAlternativeText;
    figcaption.innerHTML = rand.ImageCaption;

    answer.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);

  };

  /* 
    to-do:
    display something random, 
    but don't display the same thing twice, 
    and also don't display a thing that doesn't have a caption, image and image text
    then when the user clicks or keybord selects the button
    call this function again.
  */

  var getRandomAnswer = function(data) {
    var keys = Object.keys(data);
    random = data[keys[ keys.length * Math.random() << 0]];
    populateAnswerDiv(random);
  
  };


  getRandomAnswer();

 
})();
