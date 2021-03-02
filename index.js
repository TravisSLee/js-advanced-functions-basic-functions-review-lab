// Your code here
function saturdayFun(fun = 'roller-skate'){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork( work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective( string = '*'){
    return function( smthg = 'special'){
        return `You are ${string}${smthg}${string}!`
    }
}

const Calculator = {}

Calculator.add = function(){
    return 1 + 3; 
}
Calculator.subtract = function(){
    return 1 - 3;
}
Calculator.multiply = function(){
    return 1 * 3;
}
Calculator.divide = function(){
    return 10 / 5;
};

function actionApplyer(num, arr){
    for (let i = 0; i < arr.length; i++) {
        num = arr[i](num);
      }
      return num;
}
