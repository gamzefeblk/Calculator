let current = document.getElementById("current")
let show = document.getElementById("show")

let result = 0
newCur = ""
lastOpr = ""

const opr = document.querySelectorAll(".operations")
opr.forEach(function (el) {
    el.onclick = function (e) {
        if (this.textContent == "C") {
            let back = current.textContent
            current.textContent = back.substring(0, back.length - 1)
        } else if (this.textContent == "+/-") {
            if (current.textContent > 0) {
                current.textContent = -current.textContent
            } else {
                current.textContent = current.textContent * (-1)
            }
        } else if (show.textContent == "") {
            show.textContent = current.textContent + this.textContent
            newCur = ""
        } else if (this.textContent == "=") {
            result = eval(show.textContent + current.textContent)
            show.textContent += current.textContent + this.textContent

            current.textContent = result
            newCur = ""
        } else {
            if (lastOpr == "=") {
                result = eval(show.textContent.substring(0, show.textContent.length - 1))
                show.textContent = result + this.textContent
                newCur = ""
            } else {
                result = eval(show.textContent + current.textContent)
                show.textContent = result + this.textContent
                newCur = ""
            }
        }
        lastOpr = this.textContent
    }
})

const btnClicked = document.querySelectorAll(".btnClicked")

btnClicked.forEach(function (element) {
    current.textContent = ""
    element.addEventListener("click", function () {
        console.log(current.textContent);
        
        if (show.textContent == "") {
            current.textContent += this.textContent
        } else {
            newCur += this.textContent
            current.textContent = newCur
        }
        if (current.textContent == 0 ) {
            current.textContent = ""
        }
        if (current.textContent == "." ) {
            current.textContent = "0."
        }
    })
})
const resetBtn = document.querySelector("#reset")
resetBtn.onclick = function () {
    current.textContent = ""
    show.textContent = ""
}