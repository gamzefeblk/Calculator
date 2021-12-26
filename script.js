let current = document.getElementById("current")
let show = document.getElementById("show")

let oprDurum = "false",
    opr = "",
    result = 0

const btnClicked = document.querySelectorAll(".btnClicked")
btnClicked.forEach(function (element) {
    element.addEventListener("click", function () {
        current.textContent += this.textContent
        if (current.textContent == 0) {
            current.textContent = ""
        }
        // if (current.textContent.includes("+") && current.textContent.split('+').length == 3) {
        //     show.textContent = current.textContent
        //     current.textContent = current.textContent.split('+').reduce(totalFunc) + "+"
        if (this.textContent=="+" && current.textContent.split('+').length == 3) {
            show.textContent += current.textContent
            const back = current.textContent
            current.textContent = back.substring(0, back.length - 1)
            current.textContent = eval(current.textContent)+"+"
        } else if (current.textContent.includes("-") && current.textContent.split('-').length == 3) {
            show.textContent+= current.textContent
            //current.textContent = current.split('-').reduce(minusFunc) + "-"
            const back = current.textContent
            current.textContent = back.substring(0, back.length - 1)
            current.textContent = eval(current.textContent)+"-"
        } else if (current.textContent.includes("/") && current.split('/').length == 3) {
            show.textContent = current.textContent
            const back = current.textContent
            current.textContent = back.substring(0, back.length - 1)
            current.textContent = eval(current.textContent)+"/"
        } else if (current.textContent.includes("*") && current.textContent.split('*').length == 3) {
            show.textContent = current.textContent
            const back = current.textContent
            current.textContent = back.substring(0, back.length - 1)
            current.textContent = eval(current.textContent)+"*"
        } else if (this.textContent == '=') {
            //current.textContent = current.textContent.substring(0, current.textContent.length - 1)
            show.textContent = current.textContent
            const back = current.textContent
            current.textContent = back.substring(0, back.length - 1)
            current.textContent = eval(current.textContent)
        } else if (this.textContent == 'C') {
            const back = current.textContent
            current.textContent = back.substring(0, back.length - 2)
        }

    })
})

const resetBtn = document.querySelector("#reset")
resetBtn.onclick = function () {
    current.textContent = ""
    show.textContent = ""
}

// function oprControl(current, show) {
//     console.log(current.includes("+"));
//     console.log(current.split('+').length);

//     if (current.includes("+") && current.split('+').length == 3) {
//        // current.substring(0, current.length - 1)
//         show.textContent += current
//         current.textContent = current.split('+').reduce(totalFunc)
//         console.log(current.textContent.split('+'));
//     } else if (current.textContent.includes("-") && current.textContent.split('-').length == 3) {
//         show.textContent += current
//         current.textContent = current.split('-').reduce(minusFunc)
//     } else if (current.includes("/") && current.split('/').length == 3) {
//         show.textContent += current
//         current.textContent = current.split('/').reduce(devideFunc)
//     } else if (current.includes("*") && current.split('*').length == 3) {
//         show.textContent += current
//         current.textContent = current.split('*').reduce(multiFunc)
//     }


// }

function totalFunc(total, value, index, array) {
    return Number(total) + Number(value);
}

function minusFunc(total, value, index, array) {
    return Number(total) - Number(value);
}

function devideFunc(total, value, index, array) {
    return Number(total) / Number(value);
}

function multiFunc(total, value, index, array) {
    return Number(total) * Number(value);
}
//const opr = document.querySelectorAll(".operations")
//console.log(element.textContent.substring(element.length-1))

// const opr = document.querySelectorAll(".operations")
// opr.forEach(function (el) {
//     console.log(el.textContent);
//     el.onclick = function (e) {
//         console.log(e.textContent);

//         oprDurum = "true"
//         let yeniOpr=this.textContent
//         show.textContent = current.textContent + yeniOpr
//         let yeniOpr = current.textContent
//     }
// })

// function oprOnClick(val){
//     oprDurum = "true"
//         let yeniOpr=val.textContent
//         show.textContent = current.textContent + yeniOpr
//         let yeniOpr = current.textContent
// }



// function btnClickedfunc() {
//     console.log("dfdfd");
//         return current.textContent += this.textContent
// }