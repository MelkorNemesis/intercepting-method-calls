[← Back](./README.md)

# Proxy and Reflect Solution

**🥂 This solution is non-destructive. The object in question is not changed.**

## The solution

- There is no trap to catch a method invocation. You have to use two proxies.
- One to catch property access (could be function), and one to catch function invocation.

## Proxy and Reflect

- Proxy and Reflect objects allow for metaprogramming in JavaScript.
- Metaprogramming is a programming technique in which computer programs have the ability to treat other programs as their data. It means that a program can be designed to read, generate, analyze or transform other programs, and even modify itself while running.
- Proxy object intercepts object operations.
- Reflect object simplifies creation of Proxy.
- All of Reflect methods match signature of proxy traps with the same name.

---

If you add new method to the `myObj` object, you can see the console.log from `handleMethodCall. It flows through the Proxy object.

# Resources:
- https://javascript.info/proxy#reflect 🔥
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming
- https://stackoverflow.com/a/25585988/1152017
- https://www.javascripttutorial.net/es6/javascript-reflection/#:~:text=ES6%20introduces%20a%20new%20global,able%20to%20handle%20dynamic%20code.
 