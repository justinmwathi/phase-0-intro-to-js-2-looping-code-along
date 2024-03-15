// Code your solutions in this file
const names=["Guadalupe", "Ollie", "Aki"];

function writeCards(names,event){
    let newArray=[];
    for(let i=0;i<names.length;i++){
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }    
    return newArray;
    
}
writeCards(names,"surprise")


function countDown(){
    let countDown=0;
    while(countDown<11){
        console.log(countDown++)
    }
}