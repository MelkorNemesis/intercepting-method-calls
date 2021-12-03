[← Back](./README.md)

# Monkey Patching Solution

**💥 This solution is destructive. It changes the object in question.**

## Monkey patching

- Monkey patching is a technique to add, modify, or suppress the default behavior of a piece of code at runtime without changing its original source code.
- It's simply the dynamic replacement of attributes at runtime. 
- Monkey patching is often considered a dangerous technique.

## Some etymology:
- The term monkey patch seems to have come from an earlier term, guerrilla patch, which referred to changing code sneakily – and possibly incompatibly with other such patches – at runtime. The word guerrilla, homophonous with gorilla (or nearly so), became monkey, possibly to make the patch sound less intimidating.
- An alternative etymology is that it refers to “monkeying about” with the code (messing with it).

---

If you add a new method to the `myObj` object, it's not monkey-patched. You won't see the console.log from `handleMethodCall`.

# Resources:
- https://en.wikipedia.org/wiki/Monkey_patch
- https://www.audero.it/blog/2016/12/05/monkey-patching-javascript/
