
var lineWidth = 4;
var outerGlowWidth = 7;
var innerGlowWidth = 4;
var animKey = 0;

var lineCoords = [];

$( window ).resize(function() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  clearTimeout($.data(this, 'resizeTimer'));
  $.data(this, 'resizeTimer', setTimeout(function() {
    animKey++;
    animKey = animKey % 1000;
    drawLine();
  }, 50));
});

function drawLine() {
  calculateCoordinates();
  $('.line').remove();
  $('#animating-line').finish();
  if (lineCoords.length > 1) {
    drawDiv(lineCoords[0], lineCoords[1], 1, animKey);
  }
}

function calculateCoordinates() {
  lineCoords = [];
  const mainButton = $('#main-button');
  var startX = mainButton.position().left + (mainButton.width() / 2) - 2.5;
  var startY = mainButton.position().top + (mainButton.height() / 2);
  var direction = -1;
  var distance = -1;
  storeCoordinate(startX, startY, lineCoords);
  startY += 200;
  storeCoordinate(startX, startY, lineCoords);

  for (var i = 0; i < 40; i++) {
    direction = nextDirection(direction);
    distance = Math.floor(Math.random()*400) - 200;
    if (direction == 0) {
      startX += distance;
    } else {
      startY += distance;
    }
    storeCoordinate(startX, startY, lineCoords);
  }
}

function nextDirection(oldDirection) {
  var d = Math.floor(Math.random() * 2);
  while (d == oldDirection) {
    d = Math.floor(Math.random() * 2);
  }
  return d;
}

function storeCoordinate(xVal, yVal, array) {
  array.push({x: xVal, y: yVal});
}

function drawDiv(coords1, coords2, index, key) {
  if (key != animKey) {
    return;
  }

  var top, left, height, width, animateDirection;

  if (coords1.y == coords2.y) {
    var adjustment = 0;
    if (coords1.x > coords2.x) {
      adjustment = lineWidth;
    }
    top = coords1.y;
    left = coords1.x + adjustment;
    width = coords2.x - coords1.x;
    height = lineWidth;
    animateDirection = 0;

    if (width < 0) {
      animateDirection = 2;
      left += width;
      width = -width;
    }

  } else if (coords1.x == coords2.x) {
    var adjustment = 0;
    if (coords1.y > coords2.y) {
      adjustment = lineWidth;
    }
    top = coords1.y + adjustment;
    left = coords1.x;
    width = lineWidth;
    height = coords2.y - coords1.y;
    animateDirection = 1;

    if (height < 0) {
      animateDirection = 3;
      top += height;
      height = -height;
    }
  }

  var targetHeight, targetWidth, drawDistance;

  targetWidth = width;
  targetHeight = height;

  switch(animateDirection) {
    case 0:
    width = 0;
    drawDistance = targetWidth;
    break;
    case 1:
    height = 0;
    drawDistance = targetHeight;
    break;
    case 2:
    width = 0;
    left += targetWidth;
    drawDistance = targetWidth;
    break;
    case 3:
    height = 0;
    top += targetHeight;
    drawDistance = targetHeight;
    break;
    default:
    break;
  }

  $('#lines-div').append('<div class="line" id="animating-line" style="top: ' + top + 'px; left: ' + left + 'px; height: ' + height + 'px; width: ' + width + 'px;"></div>');
  $('#animating-line').animate({
    height: targetHeight,
    width: targetWidth,
    left: left - (animateDirection == 2 ? targetWidth : 0),
    top: top - (animateDirection == 3 ? targetHeight : 0)
  }, {
    duration: drawDistance,
    complete: function () {
      $('#animating-line').removeAttr('id');
      if (lineCoords.length > index + 1) {
        drawDiv(lineCoords[index], lineCoords[index+1], index+1, key);
      }
    }
  });
}