# Intercepting method calls

## Problem statement

Given this object

```js
const myObj = {
  multiply(x, y) {
    return x * y;
  },
  squared(x) {
    return x ** x;
  }
};
```

and this method

```js
function handleMethodCall(fnName, fnArgs) {
  console.log(`${fnName} called with `, fnArgs);
}
```

implement this function

```js
function interceptMethodCalls(obj, fn) {
  // TODO
}
```

so that

```js
interceptMethodCalls(myObj, handleMethodCall);
myObj.multiply(2, 7);
myObj.squared(2);
```

logs to the console

```js
// multiply called with  [ 2, 7 ]
// squared called with  [ 2 ] 
```

## Notes

If you need to, you can change more than just the `interceptMethodCalls` function. I've got two solutions and they slightly differ in how the `interceptMethodCalls` is invoked. But the parameters should stay the same.

## Solutions

1. [Using Monkey Patching](./intercept-method-call-monkey-patch.js), [Notes](./intercept-method-call-monkey-patch.md) 
2. [Using Proxy](./intercept-method-call-proxy.js), [Notes](./intercept-method-call-proxy.md)