// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

// places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to

// are acceptable.

// Example
// There are elements, two positive, two negative and one zero. Their ratios are , and

// Results are printed as:

// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
    let i = 0;
    let plus = 0;
    let minus = 0;
    let zero = 0;
    let total = arr.length;
    while(i < total){
        if (arr[i] > 0){
            plus++;
            i++;
        }
        else if (arr[i] < 0){
            minus++;
            i++;
        }
        else if (arr[i] == 0){
            zero++;
            i++;
        }    
    }
    let plusratio = (plus/total).toFixed(6);
    let minusratio = (minus/total).toFixed(6);
    let zeroratio = (zero/total).toFixed(6);
    
    console.log(plusratio,'\n',minusratio,'\n',zeroratio);
}
