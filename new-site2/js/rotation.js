function getZIndex(e) {      
  var z = document.defaultView.getComputedStyle(e).getPropertyValue('z-index');
  if (isNaN(z)) return getZIndex(e.parentNode);
  else return z; 
};

function bindRotation() {
  $("#start-page").bind("mousemove", function(e){
    var baseZIndex = 5;
    var mouseX = e.pageX, mouseY = e.pageY;
    var mouseXPercent = (mouseX - (windowWidth / 2)) / (windowWidth / 2);
    var mouseYPercent = (mouseY - (windowHeight / 2)) / (windowHeight / 2);

    $('#header-text').children().each(function () {
      doRotation(mouseXPercent, mouseYPercent, $(this), baseZIndex);  
    });
  });
}

function doRotation(xPercent, yPercent, element, baseZIndex) {
}