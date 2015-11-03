var random = (function () { 
  'use strict';
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml'; 
  var img,
    figcaption,
    spreadsheetData,
    button, 
    usedIndex;

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
  
    return answer;

  }



  return {
    public_spreadsheet_url : public_spreadsheet_url,
    createDivForAnswers : createDivForAnswers
  };

}());
