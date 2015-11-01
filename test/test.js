
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
    
    result = result.id; 
    var expected = "answer";
    assert.equal(result, expected);
  })

  // test("createDivForAnswers() should contain a figure", function(assert){
  //   for(var i in result.childNodes) {
  //     if()
  //   }
  //   var expected = "answer";
  //   assert.equal(result, expected);
  // })
