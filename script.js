document.getElementById("square1").addEventListener('mousemove', function (a) {
    var div = a.target;
    var rect = div.getBoundingClientRect();

    div.style.background = '';
    
    document.addEventListener('mousemove', function(a) {
    div.style.background = 'whitesmoke';
    
      document.removeEventListener('mousemove');
      event.stopPropagation();
    }, true)
  })

  document.getElementById("square2").addEventListener('mousemove', function (b) {
    var div = b.target;
    var rect = div.getBoundingClientRect();
    
    div.style.background = '';
    
    document.addEventListener('mousemove', function(b) {
    div.style.background = 'whitesmoke';
    
      document.removeEventListener('mousemove');
      event.stopPropagation();
    }, true)
  })

  document.getElementById("square3").addEventListener('mousemove', function (c) {
    var div = c.target;
    var rect = div.getBoundingClientRect();
    
    div.style.background = '';
    
    document.addEventListener('mousemove', function(c) {
    div.style.background = 'whitesmoke';
    
      document.removeEventListener('mousemove');
      event.stopPropagation();
    }, true)
  })

  document.getElementById("square4").addEventListener('mousemove', function (d) {
    var div = d.target;
    var rect = div.getBoundingClientRect();
    
    div.style.background = '';
    
    document.addEventListener('mousemove', function(d) {
    div.style.background = 'whitesmoke';
    
      document.removeEventListener('mousemove');
      event.stopPropagation();
    }, true)
  })