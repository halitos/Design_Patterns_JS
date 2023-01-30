class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result = this.result + number;
        return this;
    }

    subtract(number) {
        this.result = this.result - number;
        return this;
    }

    divide(number) {
        this.result = this.result / number;
        return this;
    }

    multiply(number) {
        this.result = this.result * number;
        return this;
    }

    compute() {
        return this.result; 
    }
}

var calculator = new Calculator();
var result = calculator.add(10).subtract(2).divide(2).multiply(5).compute();

console.log(result); // 20