(function() {

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml'; 
  var random;


  function init() {

	  Tabletop.init({ 
      key: public_spreadsheet_url,
		  callback: answerList,
      simpleSheet: true 
    })

    var button = document.createElement("button");
    var body = document.getElementById("body");
    button.innerHTML = "Generate Advice";
    button.id="super";
    body.appendChild(button);

    }

    window.onload = function() { 
      init(); 
    };

    var populateAnswerDiv = function(rand, data) {

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

  var arr = [];

  var answerList = function(data) {
    for (var prop in data) {
      arr.push(data[prop]);
    }
    console.log(arr);
  };

  var getRandomAnswer = function() {

    // var max = arr.length - 1;
    // console.log(arr.length);
    // console.log(Math.floor((Math.random() * max) + 1));

    return "Hello";
    console.log("H");

  };

  // button.addEventListener("click", getRandomAnswer);
  // button.addEventListener("keydown", function (event){
  //   var key = event.which || event.keyCode;
  //   if ((key == 13) || (key ==32)) {
  //     getRandomAnswer();
  //   }
  // });
 return getRandomAnswer;

 
})();
