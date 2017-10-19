
$( document ).ready(function() {


  // also, check the object to see where to get into in order to confirm if the connection to the Leap is working. excuted some code that makes to screen go pretty to indicate to user that the Leap connected and ready to use.







  // finds the height and width of the screen that the program is being run on so that these values can be passed as parameters for the canvas height and width. Honeybadger don't give a shit.
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();


  // adjusts height and width of canvas to make it equal to screen dimension
  $('#output').css({height: windowHeight});
  $('#output').css({width: windowWidth});


  console.log(windowWidth);
  console.log(windowHeight);

  var c = document.getElementById("output");
  var ctx = c.getContext("2d");
  ctx.moveTo(0,20);
  ctx.lineTo(100,400);
  ctx.stroke();



  Leap.loop(function(frame){
    if (frame.hands.length === 1) {
      const index = frame.hands[0].fingers[1].tipPosition.map(function(p){
        return parseInt(Math.abs(p) / 600 * 255);
      }).join(','); // takes the xyz coordinates of the tip of the index finger and turns it into an array.
      const rgb = `rgb(${index})`;
      window.document.body.style.backgroundColor = rgb; // passes the array value in as RGB for the background colour.
      $('body').html(rgb).css('color', rgb,).css('filter', 'invert(1)') //makes the text colour inverse to background colour.

      if (frame.hands[0].fingers[1].tipPosition[2] < -50) {
        console.log(frame.hands[0].fingers[1].tipPosition[2]);


        // // basic code to draw strokes on canvas. see what .getContext method does. Might be cool functions to play with. Function goes can be a simply button press in the browser. If statement that fires when it sees the press gesture and then checks to see if cordinates match a give range representing button position in DOM. This might lead to awesome drawing change effects. Also forms of the basis for the drawing function. matter of taking live data from the leap xyz coordinates and passing these as parameters to the .moveTo or .lineTo functions. need to figure out how that will work. maybe both are given the same coordinates because it is a stroke from that particular xyz coordinate to the same xyz coordinate in that single distance??? ALMOST HAVE IT FIGURED I THINK!!!!
        // var c = document.getElementById("output");
        // var ctx = c.getContext("2d");
        // ctx.moveTo(0,20);
        // ctx.lineTo(100,400);
        // ctx.stroke();
        // getElementsByTagName('html').css("border": "green solid 1px");
      }
      // getElementsByTagName('html').css("border": "red solid 1px");
    }
  })
})
