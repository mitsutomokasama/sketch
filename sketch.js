
  window.addEventListener('load', function() {
    var canvas, color, colors, ctx, down, i, _len, _results;
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth - 30;
    canvas.height = window.innerHeight - 30;
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#9eala3';
    down = false;
    canvas.addEventListener('mousedown', function(e) {
      down = true;
      ctx.beginPath();
      return ctx.moveTo(e.clientX, e.clientY);
    }, false);
    window.addEventListener('mousemove', function(e) {
      if (!down) return;
      console.log(e.clientX, e.clientY);
      ctx.lineTo(e.clientX, e.clientY);
      return ctx.stroke();
    }, false);
    window.addEventListener('mouseup', function(e) {
      if (!down) return;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.closePath();
      return down = false;
    }, false);
    colors = document.getElementById('colors').childNodes;
    _results = [];
    for (i = 0, _len = colors.length; i < _len; i++) {
      color = colors[i];
      if (color.nodeName.toLowerCase() !== 'div') continue;
      _results.push(color.addEventListener('click', function(e) {
        var style;
        style = e.target.getAttribute('style');
        color = style.match(/background:(#......)/)[1];
        return ctx.strokeStyle = color;
      }, false));
    }
    return _results;
  }, false);
