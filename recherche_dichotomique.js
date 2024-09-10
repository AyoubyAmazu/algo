const numbers = [2,4,8,10,16,18,22,28]; 
let trouver = 10;
let i = numbers.length/2
let j = numbers[i];
while(numbers[i]!=trouver){
    if(numbers[i]>trouver){
        i = i/2
    }else{
        i = (numbers.length-i)/2
    }
}
found = true;
console.log(numbers[i]);
