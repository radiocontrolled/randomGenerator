// testing variables

var result = random.createDivForAnswers();

var obj = {
  ImageAlternativeText : "I'm another piece of advice",
  ImageCaption : "hey there",
  ImageURL : "Look I'm a caption",
  ImageURL :"http://placekitten.com/g/600/200"
}

test("div class throbber-loader should exist on page load", function(assert) {
  var result = document.getElementsByClassName("throbber-loader")[0];
  result = result.className;
  assert.equal(result, "throbber-loader");
});

test("the public spreadsheet URL should be https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml", function() {
  equal(random.public_spreadsheet_url, "https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml");
});

test("createDivForAnswers() should return an div of id answer", function(assert){
  var actual = result.id; 
  var expected = "answer";
  assert.equal(actual, expected);
});

test("createDivForAnswers() should create a figure", function(){
  var expected = document.createElement("figure").nodeName;
  var actual = result.childNodes[3].nodeName;
  equal(actual, expected);
});

test("that figure should contain an img", function(){
  var expected = document.createElement("img").nodeName;
  var actual = result.childNodes[3].firstChild.nodeName;
  equal(actual, expected)
});

test("that figure should contain a figcaption", function(){
  var expected = document.createElement("figcaption").nodeName;
  var actual = result.childNodes[3].lastChild.nodeName;
  equal(actual, expected)
});

test("that figure should contain a button", function(){
  var expected = document.createElement("button").nodeName;
  var actual = result.childNodes[4].nodeName;
  equal(actual, expected)
});

test("button name should be answerButton", function(){
  var expected = document.createElement("button").name = "answerButton";
  var actual = result.childNodes[4].name;
  equal(actual, expected)
});

test("populateAnswerDivIMG should set img source", function(){
  var expected = document.createElement("img").src = "http://placekitten.com/g/600/200";
  var actual = random.populateAnswerDivIMG(obj).src;
  equal(actual,expected);
});

test("populateAnswerDivIMG should set img alt", function(){
  var expected = document.createElement("img").src = "I'm another piece of advice";
  var actual = random.populateAnswerDivIMG(obj).alt;
  equal(actual,expected);
});

test("populateAnswerDivFigure should set the image caption", function(){
  var expected = document.createElement("figcaption");
  expected.innerHTML = "hey there";
  var actual = random.populateAnswerDivFigure(obj).innerHTML;
  equal(actual,expected.innerHTML);
});

// test("destroy should set the image source, alt and figcaption to be an empty string", function(){
//   var fig = document.getElementsByTagName("figure")[0];
//   console.log(fig.childNodes);
//   var expected = random.destroy(fig);
//   console.log(expected.childNodes);


// });


 

 
