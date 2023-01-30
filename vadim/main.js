function calc(a, b, operation) {
    if (operation == "add") {
        return console.log(a + b);
        
    } else if (operation == "multi") {
        return console.log(a * b);
        
    } else if (operation == "subtract") {
        return console.log(a - b);
    }
}
calc(3, 2, "multi");