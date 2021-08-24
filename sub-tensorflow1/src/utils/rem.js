(function(doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const recalc = function() {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = `${10 * (clientWidth / 320)}px`; // iphone 5 标准来 1rem=10px
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window));
