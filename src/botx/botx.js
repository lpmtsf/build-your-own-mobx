import { useState, useRef } from 'react';

const useForceUpdate = () => {
  const [, set] = useState(0);
  return () => set((e) => !e);
};

let observableKeysByAction = [];
let reactionsByKey = {};

const createReaction = (onChange) => {
  return {
    track: (notifyObservers) => {
      observableKeysByAction = [];
      notifyObservers();
      observableKeysByAction.forEach((key) => {
        reactionsByKey[key] = reactionsByKey[key] || [];
        reactionsByKey[key].push(onChange);
      });
    },
  };
};

const observable = (obj) => {
  return new Proxy(obj, {
    get: (target, key) => {
      observableKeysByAction.push(key);
      return target[key];
    },
    set: (target, key, newValue) => {
      target[key] = newValue;
      if (reactionsByKey[key]) {
        reactionsByKey[key].forEach((func) => func());
      }

      return true;
    },
  });
};

const observer = (BaseComponent) => {
  return () => {
    const forceUpdate = useForceUpdate();
    const reactionRef = useRef(null);
    if (!reactionRef.current) {
      reactionRef.current = createReaction(forceUpdate);
    }
    let output;
    reactionRef.current.track(() => {
      output = BaseComponent();
    });
    return output;
  };
};

export { observable, observer };
