let num = 153;

if(num<0||num>9999){
    process.exitCode = -1;
}
let c = ~~(num/100);
let du = num%100;
let d = ~~(du/10);
let u = du%10;

let result = (Math.pow((c),3)+Math.pow((d),3)+Math.pow((u),3));
if(num == result){
    console.log("verdadeiro");
} else process.exitCode = -1;