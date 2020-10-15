function sayHello(name){ // A function that takes one argument called name.
    console.log('Hello ' + name); // global objects -- can access it anywhere.
}

sayHello('Austin'); // Calling the function.


/*
1. How to run node.js file?
    A: node hello_func.js

2. Where is console.log, setTimeout(), clearTimeout(), setInterval(), etc .. coming from?
    A: This comes from the window object. JS prefixes the window object and doesn't require it. For example
        window.console.log() is the same as console.log()
        In Node specifically, it is global.console.log(), but it Node prefixes it.
*/