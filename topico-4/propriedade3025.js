let num = 3025;

if (num < 0 || num > 9999 ) {
    process.exitCode = -1;
}

let i = ~~(num/100);
let j = num%100;
let result = (Math.pow((i+j),2));

if(result == num ){
   console.log("verdadeiro");
}
else console.log("falso");
