// pubsub.js
// Role: Coordinator
// Responsibilities: Event emitter. Broadcasts and publishes events.

const pubSub = (() => {
  const events = {};

  const subscribe = (eventName, fn) => {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  };

  const publish = (eventName, data) => {
    if (events[eventName]) {
      events[eventName].forEach((f) => {
        f(data);
      });
    }
  };

  const unsubscribe = (eventName, fn) => {
    if (events[eventName]) {
      events[eventName].filter((f) => f != fn);
    }
  };
  return {
    subscribe,
    publish,
    unsubscribe,
  };
})();

export default pubSub;
