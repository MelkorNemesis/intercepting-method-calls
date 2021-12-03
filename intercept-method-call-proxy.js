let myObj = {
  multiply(x, y) {
    return x * y;
  },
  squared(x) {
    return x ** x;
  },
  foo: 42
};

function interceptMethodCalls(obj, fn) {
  return new Proxy(obj, {
    get(target, prop) {
      if (typeof target[prop] === 'function') {
        return new Proxy(target[prop], {
          apply: (target, thisArg, argumentsList) => {
            fn(prop, argumentsList);
            return Reflect.apply(target, thisArg, argumentsList);
          }
        });
      } else {
        return Reflect.get(target, prop);
      }
    }
  });
}

const handleMethodCall = (fnName, fnArgs) =>
  console.log(`${fnName} called with `, fnArgs);

const myObjProxied = interceptMethodCalls(myObj, handleMethodCall);

myObjProxied.multiply(2, 7);
myObjProxied.squared(2);

// add new method

myObj.identity = (val) => val;
myObjProxied.identity(42); // ✅ Logs to the console.