const current = document.getElementById("current")
//const currentVal=current.textContent
const result = document.getElementById("result")
//const resultVal=result.textContent

let oprDurum = "false"
let opr = document.querySelectorAll(".operations")
opr.forEach(e => {
    e.addEventListener("click", function(e) {
        oprCalc(e) 
    })
})
let btnClicked = document.querySelectorAll(".btnClicked")
btnClicked.forEach(element => {
    element.onclick = function () {
        console.log(element.textContent);
        current.textContent += element.textContent
    }    
});
function oprCalc(e) {
    oprDurum = "true"
     resultVal=currentVal+e.textContent
     let yeniOpr=currentVal
     console.log(yeniOpr);
     //current.textContent=result.textContent+currentNum+yeniOpr
    
    // switch(e){

    //     case "+":currentVal=(sonuc + Number(currentNum)); break
    //     case "-":currentVal=(sonuc - Number(currentNum)); break
    //     case "÷":currentVal=(sonuc / Number(currentNum)); break
    //     case "X":currentVal=(sonuc * Number(currentNum)); break
    //     case "%":currentVal=(sonuc % Number(currentNum)); break

    // }
    // sonuc=currentNum
    // opr=yeniOpr
}



// function btnClickedfunc(e){
//     console.log(e.textContent);
//     console.log(currentVal);
//    return currentVal += e.textContent
// }

const resetBtn = document.querySelector("#reset")
resetBtn.onclick = function () {
    current.textContent = ""
    result.textContent = ""

}