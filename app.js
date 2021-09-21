var ele = document.body.querySelector(".looper");

var condition = true;

// while(condition){
//     var question = prompt("Hey turn it off now!")
//     if(question==="Pudding"){
//         conditon=false;
//         ele.innerHTML="It has stopped";
//     }
// }
var sum = Number(prompt("What's the starting number?"));
var addNumber = Number(prompt("How much do you wan to add?"));
var addUp = Number(prompt("How many time do you want to add that value to your original number?"));
for(var i=0; i<addUp; i++){
    sum = sum + addNumber;
}
ele.innerHTML = sum;

//math.random