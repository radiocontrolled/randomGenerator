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

  function populateAnswerDivIMG(rand) {
    img.src = rand.ImageURL;
    img.alt = rand.ImageAlternativeText;

    return img;
  }

  function populateAnswerDivFigure(rand) {
    figcaption.innerHTML = rand.ImageCaption;

    return figcaption;
  }


//   function destroy(figure) {

//     for(var prop in figure) {
      
// //      if(figcaption.hasOwnProperty(prop)) {
// console.log(figure[prop]);
//         if(prop.nodeName = "IMG") {
//           prop.src = "";
//           prop.alt = "";
//         }
//         if(prop.nodeName = "FIGCAPION") {
//           figcaption.innerHTML  = "I have no more answers for you.";
//         }
//   //    }
//     }

   
//     button.parentNode.removeChild(button);

//     return figure;
  }

  return {
    public_spreadsheet_url : public_spreadsheet_url,
    createDivForAnswers : createDivForAnswers,
    populateAnswerDivIMG : populateAnswerDivIMG,
    populateAnswerDivFigure : populateAnswerDivFigure,
    destroy : destroy
  };

}());
