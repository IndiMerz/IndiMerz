// make a calculator

let calculator = (num1, num2, operator) => {
    let result;
    switch (operator) {
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            result = num1/num2;
            break;
    
        default:
            console.log('Please Choose Valid Operator');
            break;
    }
    return result;
}

console.log(calculator(12,12,'%'));