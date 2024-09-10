let n= [11,2,20,9,5,8,22,0];
let petit = n[0];
let grand= n[0];
for(let i = 0 ; i<n.length;i++){
    if(n[i]<petit){
        petit = n[i]
    }else if(n[i]>grand){
        grand = n[i]
    }
}
console.log(petit,grand);

