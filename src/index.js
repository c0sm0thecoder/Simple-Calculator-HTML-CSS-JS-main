
function clearText() {
    document.querySelector(".screen").value = '';
}
 
function display(value) {
    if (document.querySelector(".screen").value.length < 15)
        document.querySelector(".screen").value += value;
}

function errorInExpression(expression) {
    if (Array.from(expression)[0] == "-" || Array.from(expression)[0] == "+" || Array.from(expression)[0] == "*" ||
        Array.from(expression)[0] == "/" || expression.slice(-1) == "-" || expression.slice(-1) == "+" ||
        expression.slice(-1) == "*" || expression.slice(-1) == "/") {
            return true;
        }
}

function calculateExpression() {
    let expression = document.querySelector(".screen").value;
    clearText()
    if (errorInExpression(expression)) {
        display("undefined")
    } else {
        let result = eval(expression).toFixed(4);
        display(result)
    }
}
