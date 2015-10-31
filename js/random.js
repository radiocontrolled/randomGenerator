(function() {

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml'; 
  var img,
    figcaption,
    spreadsheetData,
    button, 
    usedIndex;

  function init() {
	  Tabletop.init({ 
      key: public_spreadsheet_url,
		  callback: setIndex,
      simpleSheet: true 
    });
    createDivForAnswers();
  }

  function createDivForAnswers() {
    var answer = document.getElementById("answer");
    var figure = document.createElement("figure");
    button = document.createElement("button");
    img = document.createElement("img");
    figcaption = document.createElement("figcaption");

    answer.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    answer.appendChild(button);
    
    button.name = "answerButton";
    button.innerHTML = "Get Random Answer";
    button.addEventListener("click", function() {
      displayAnswerAndCountdownIndex(spreadsheetData, usedIndex);
    });

  }

  function populateAnswerDiv(rand) {
    img.src = rand.ImageURL;
    img.alt = rand.ImageAlternativeText;
    figcaption.innerHTML = rand.ImageCaption;
  }

  function destroy() {
    img.src = "";
    img.alt = "";
    figcaption.innerHTML = "I have no more answers for you.";
  }

  function setIndex(data, tabletop) {
    var spin = document.getElementsByClassName("throbber-loader")[0];
    spin.parentNode.removeChild(spin);
    spreadsheetData = data; 
    usedIndex = data.length - 1;
    displayAnswerAndCountdownIndex(spreadsheetData, usedIndex);
  }

  function displayAnswerAndCountdownIndex(data, index) {
    if(index >= 0) {
      populateAnswerDiv(data[index]);
      usedIndex -= 1;
    }
    else {
      destroy();
    }
  }
  
  window.onload = function() { 
    init(); 
  };

 
})();
