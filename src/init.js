$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // console.log("inside fundc",this);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('dancerMakerFunction', dancerMakerFunction)
    // console.log(dancerMakerFunction);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * (1000 - 500) + 500
    );
    $('body').append(dancer.$node);
    // console.log(dancer);
    window.dancers.push(dancer);
  });



  //line up button
  $('.lineUpButton').on('click', function(event) {
    console.log(window.dancers);
    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // // console.log(dancerMakerFunctionName);
    // // get the maker function for the kind of dancer we're supposed to make
    // var dancerMakerFunction = window[dancerMakerFunctionName];   
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.addSharkButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('dancerMakerFunction', dancerMakerFunction)
    // console.log(dancerMakerFunction);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * (1000 - 500) + 500
    );
    $('body').append(dancer.$node);
    // console.log(dancer);
    window.dancers.push(dancer);
  });

  $('.addHypnotic').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('dancerMakerFunction', dancerMakerFunction)
    // console.log(dancerMakerFunction);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * (1000 - 500) + 500
    );
    $('body').append(dancer.$node);
    // console.log(dancer);
    window.dancers.push(dancer);
  });





  $('span').on('mouseenter', function(event) {
    console.log('mousing over');
    // this.$node.hide();
  });






});

