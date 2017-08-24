
$( document ).ready(function() {


  Leap.loop(function(frame){
    if (frame.hands.length === 1) {
      const index = frame.hands[0].fingers[1].tipPosition.map(function(p){
        return parseInt(Math.abs(p) / 600 * 255);
      }).join(','); // takes the xyz coordinates of the tip of the index finger and turns it into an array.

      const rgb = `rgb(${index})`;
      window.document.body.style.backgroundColor = rgb; // passes the array value in as RGB for the background colour.
      $('body').html(rgb).css('color', rgb,).css('filter', 'invert(1)') //makes the text colour inverse to background colour.
    }
  })
})
