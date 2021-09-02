function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

const endEvent = 'animationend';
const AnimateEvents = {
  support: 'AnimationEvent' in window, // 浏览器支持
  // End events
  endEvent,
  addEndEventListener(node, eventListener) {
    if (!node) return;
    addEventListener(node, endEvent, eventListener);
  },
  removeEndEventListener(node, eventListener) {
    removeEventListener(node, endEvent, eventListener);
  },
};

export default AnimateEvents;
