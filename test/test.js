
  test("div class throbber-loader should exist on page load", function(assert) {
    var result = document.getElementsByClassName("throbber-loader")[0];
    result = result.className;
    assert.equal(result, "throbber-loader");
  });

  test("the public spreadsheet URL should be https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml", function() {
    equal(random.public_spreadsheet_url, "https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml");
  });

  var result = random.createDivForAnswers();

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



 


 

 
