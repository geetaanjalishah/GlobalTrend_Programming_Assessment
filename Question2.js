function evaluateExpression(expression) {
    return Function(`'use strict'; return (${expression})`)();
}
console.log(evaluateExpression("3+2-5+10"));
