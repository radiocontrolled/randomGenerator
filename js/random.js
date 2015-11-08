var random = (function () { 

  "use strict";

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

  }

  var createDivForAnswers = function() {
      var answer = document.getElementById("answer");
      var figure = document.createElement("figure");
      figure.classList.add("random-figure");
      button = document.createElement("button");
      img = document.createElement("img");
      img.classList.add("random-img");
      figcaption = document.createElement("figcaption");
      figcaption.classList.add("random-figcaption");

      answer.appendChild(figure);
      figure.appendChild(img);
      figure.appendChild(figcaption);
      answer.appendChild(button);
      button.name = "answerButton";
      button.classList.add("random-button");
      button.innerHTML = "Get Random Answer";

      button.addEventListener("click", function() {
        displayAnswerAndCountdownIndex(spreadsheetData, usedIndex);
      });
  
      return answer;

  }

  function populateAnswerDivIMG(rand) {
    img.src = rand.ImageURL;
    img.alt = rand.ImageAlternativeText;

    return img;
  }

  function populateAnswerDivFigure(rand) {
    figcaption.innerHTML = rand.ImageCaption;

    return figcaption;
  }


  var destroy = function(figure) {
    var img = document.querySelector(".random-img");
    var figcaption = document.querySelector(".random-figcaption");
    var button = document.querySelector(".random-button");
    img.parentNode.removeChild(img);
    figcaption.parentNode.removeChild(figcaption);
    button.parentNode.removeChild(button);
    
    return figure.childNodes.length;
  };

  function setIndex(data, tabletop) {
    var spin = document.getElementsByClassName("throbber-loader")[0];
    spin.parentNode.removeChild(spin);
    createDivForAnswers();
    spreadsheetData = data; 
    usedIndex = data.length - 1;
    displayAnswerAndCountdownIndex(spreadsheetData, usedIndex);
  }

  function displayAnswerAndCountdownIndex(data, index) {
    if(index >= 0) {
      populateAnswerDivIMG(data[index]);
      populateAnswerDivFigure(data[index]);
      usedIndex -= 1;
    }
    else {
      var figure = document.getElementsByTagName("figure")[0];
      destroy(figure);
    }
  }

  window.onload = function() { 
    init(); 
  };

  return {
    public_spreadsheet_url : public_spreadsheet_url,
    createDivForAnswers : createDivForAnswers,
    populateAnswerDivIMG : populateAnswerDivIMG,
    populateAnswerDivFigure : populateAnswerDivFigure,
    destroy : destroy, 
    setIndex : setIndex
  };

}());
