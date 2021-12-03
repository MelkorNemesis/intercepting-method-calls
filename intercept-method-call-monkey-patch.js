let myObj = {
  multiply(x, y) {
    return x * y;
  },
  squared(x) {
    return x ** x;
  }
};

function interceptMethodCalls(obj, fn) {
  Object.keys(obj).forEach(key => {
    const propOrFn = obj[key];
    if (typeof propOrFn === 'function') {
      const origFn = propOrFn;
      obj[key] = (...args) => {
        fn(key, args);
        return Reflect.apply(origFn, obj, args);
      }
    }
  });
}





const handleMethodCall = (fnName, fnArgs) =>
  console.log(`${fnName} called with `, fnArgs);

interceptMethodCalls(myObj, handleMethodCall);

myObj.multiply(2, 7);
myObj.squared(2);

// add new method

myObj.identity = (val) => val;
myObj.identity(42); // ❌ Nothing gets logged into console