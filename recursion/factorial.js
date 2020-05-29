function computeFactorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        console.log(`result = ${result} * ${i} (${result * i})`);
        result *= i;
    }
    return result;
}

function computeFactorial2(num) {
    var result = 1;
    for (var i = num; i > 1; i--) {
        console.log(`result = ${result} * ${i} (${result * i})`);
        result *= i;
    }
    return result;
}

console.log(computeFactorial(5)); //120
console.log(computeFactorial2(5)); //120

function computeFactorialRecursively(num) {
   if (num === 1) {
       console.log('hitting the base case');
       return 1;
   } else {
       console.log(`returning ${num} * computeFactorialRecursively(${num - 1})`);
       return num * computeFactorialRecursively(num - 1);
   }
}

// computeFactorialRecursively(5); //120


// function logNumbers(start, end) {
//     console.log(`iteratively looping from ${start} until ${end}`);

//     for (var i = start; i <= end; i++) {
//         console.log('hitting index', i);
//     }
// }

// console.log('~~~~logNumbers~~~~');
// logNumbers(1, 2);


