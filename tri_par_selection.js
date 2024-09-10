let numbers = [4,2,0,9];
 // tri par selection 
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



//trouver le plus grqnd et les plus 