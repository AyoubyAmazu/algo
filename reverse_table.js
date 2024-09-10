
// reverse a table

let newNumbers = [0,3,5,10];
for(let i =0; i<newNumbers.length-i-1; i++){
    temps=newNumbers[i];
    newNumbers[i]=newNumbers[newNumbers.length-i-1];
    newNumbers[newNumbers.length-i-1]=temps;
}
console.log(newNumbers);
