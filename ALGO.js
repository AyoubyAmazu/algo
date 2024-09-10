let numbers = [4,2,0,9];

let temps ;
for(let i = 0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
        if(numbers[i]<numbers[j]){
          temps =  numbers[i]
          numbers[i]=numbers[j]
          numbers[j]=temps  
        }
      }
    }
console.log(numbers);

let newTemps ;
for(let i = 0 ; i<numbers.length;i++){
 for(let j =0; j<numbers.length-i-1;j++){
    if(numbers[j]>numbers[j+1]){
      newTemps = numbers[j];
      numbers[j]=numbers[j+1];
      numbers[j+1] = newTemps;
    }
 }
}
console.log(numbers);