var video = document.querySelector("#videoElement");


// require('babel-polyfill');
// require('webrtc-adapter');



// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function (stream) {
//       video.srcObject = stream;
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!");
//     });
// }


function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

function myFunction() {
  var x = document.getElementById("myRadio");
  x.checked = true;
}



window.onload = function() {
//  var video = document.getElementById('video');
//  var canvas = document.getElementById('canvas');
//  var context = canvas.getContext('2d');
  var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
  tracking.track('#myVideo', colors);
//  tracker.on('track', function(event) {
//     context.clearRect(0, 0, canvas.width, canvas.height);

    colors.on('track', function(event) {
      if (event.data.length === 0) {
        // No colors were detected in this frame.
      } else {
        event.data.forEach(function(rect) {
          // rect.x, rect.y, rect.height, rect.width, rect.color
        });
      }
    });


    tracking.ColorTracker.registerColor('green', function(r, g, b) {
      if (r < 50 && g > 200 && b < 50) {
        return true;
      }
      return false;
    });
 //initGUIControllers(tracker);
};
