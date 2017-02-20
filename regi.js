onload = function () {
  console.log('Setting...');
  setTimeout(function () {
    var loader = document.getElementsByTagName('loader')[0];
    var logo = document.getElementsByTagName('logo')[0];
    var subtitle = document.getElementsByClassName('subtitle')[0];
    loader.className = 'hidden';
    logo.className = 'logo';
    setTimeout(function () {
      subtitle.className = 'subtitle expanded';
    }, 32)
  }, 4000);
  setTimeout(function () {
    var logo = document.getElementsByTagName('logo')[0];
    var rectangle = document.getElementsByTagName('rectangle')[0];
    logo.className = 'hidden';
    rectangle.className = 'rectangle';
    animateRectangle();
  }, 7000);
}

var animateRectangle = function () {
  var rectangle = document.getElementsByTagName('rectangle')[0];
  setInterval(function () {
    if (rectangle.className === 'rectangle white') {
      rectangle.className = 'rectangle black'
    } else {
      rectangle.className = 'rectangle white'
    }
  }, 1000)
};
