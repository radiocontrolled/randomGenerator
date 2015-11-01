
  test("div class throbber-loader should exist on page load", function(assert) {
    var result = document.getElementsByClassName("throbber-loader")[0];
    result = result.className;
    assert.equal(result, "throbber-loader");
  })

  test("the public spreadsheet URL should be https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml", function() {
    equal(random.public_spreadsheet_url, "https://docs.google.com/spreadsheets/d/1VJHM20AerCCo1tkCGmYEo2HetyiLouIVXOIg90MXnlo/pubhtml");
  })


  
  var result = random.createDivForAnswers();

  test("createDivForAnswers() should return an div of id answer", function(assert){
   
    var actual = result.id; 
    var expected = "answer";
    assert.equal(actual, expected);


  })

  test("createDivForAnswers() should contain a figure", function(assert){
    var actual = result.children[1];
    var expected = document.createElement("figure");
    // why does this fail?
    assert.equal(actual, expected);
  })
