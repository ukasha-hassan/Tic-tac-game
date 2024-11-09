let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg"); 

let turno=true;
const winpatters=[
    [0,1,2,],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
     
];
const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList("hide")
}
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("button was clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="x";
            turno=true ;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText="Congratulation, winner is :" + winner;
    msgcontainer.classList.remove("hide");
    disablebox();
}
const checkwinner=()=>{
 for(let pattern of winpatters)
 {

    let posval=boxes[pattern[0]].innerText;
    let posva2=boxes[pattern[1]].innerText;
    let posva3=boxes[pattern[2]].innerText;
    if(posval !=""&& posva2!=""&&posva3!=""){
        if(posval===posva2&&posva2===posva3){
            console.log("Winner",posval);
            showWinner(posval); 
             
        }
    }
    
 };
  
};
const enableboxes=()=>{
    for(let box of boxes){

        box.disabled=false;
        box.innerText="";
    }
    }
    newgame.addEventListener("click", resetgame);
    resetbtn.addEventListener("click", resetgame);
