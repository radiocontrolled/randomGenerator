

test('This sample test should always pass!', function(assert) {
  var button = document.getElementById("super");
  console.log(button);
  button.addEventListener("click", getRandomAnswer);
  assert.equal(result, "Hello", "I'm a failure message");
});


  // button.addEventListener("keydown", function (event){
  //   var key = event.which || event.keyCode;
  //   if ((key == 13) || (key ==32)) {
  //     getRandomAnswer();
  //   }
  // });
