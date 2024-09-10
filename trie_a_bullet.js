
// tri a bullet
let numbers = [4,7,1,6,9];
let temps;
let tri = false;
for(let i = 0 ; i<numbers.length;i++){

 for(let j =0; j<numbers.length;j++){
    if(numbers[j]>numbers[j+1]){
      temps = numbers[j];
      numbers[j]=numbers[j+1];
      numbers[j+1] = temps; 
    }
 }
}
console.log(numbers);