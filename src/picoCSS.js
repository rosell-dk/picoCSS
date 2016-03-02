var p = {
  select: function (selector) {
      this.value = Array.prototype.slice.call(document.querySelectorAll(selector));
      return this;
  },
  each: function(fn) {
    [].forEach.call(this.value, fn);
    return this;
  },
  css: function (v) {
    return this.each(function (i) {
      i.style.cssText = v;
    });
  },
  att: function (a, v) {
    return this.each(function (i) {
      i.setAttribute(a, v);
    });
  },
  on: function (type, fn) {
    return this.each(function (i) {
      i.addEventListener(type, fn, false);
    });
  },
  addClass: function (v) {
    return this.each(function (i) {
      if (i.classList) {
        i.classList.add(v)
      } 
      else {
        i.className += ' ' + v;
      }
    });
  },
};
