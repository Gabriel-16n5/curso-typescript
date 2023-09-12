function multiply(num1N:number, num2N:number):number {
    return num1N * num2N;
}

function sum(num1N:number, num2N:number):number {
    return num1N + num2N;
}

function isEven(num:number):boolean {
    console.log(num % 2 === 0)
    return num % 2 === 0;
}

function showResult(result:number):void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1:string | null = prompt("First Number");
    const num2:string | null = prompt("Second Number");
    const num1N =  Number(num1);
    const num2N =  Number(num2);
    if(num1 === null || num2 === null){
        return console.log("Valor invalido")
    }
    if(num1 === "" || num2 === ""){
        return console.log("Valor invalido")
    }
    let result = sum(num1N,num2N);
    result += multiply(num1N,num2N);
    showResult(result);
})();