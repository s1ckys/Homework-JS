let sum = "";
for(let i = 1; i<=20;i++){
    if (i%2!=0){
       sum+=`${i} `;
    }
    else{
        sum+=`${i} \n`;
    }
}
console.log(sum);