const lampOnElm = document.getElementById("lampOn")
const lampOffElm = document.getElementById("lampOff")
const btnElm = document.getElementById("btn")

btnElm.addEventListener("click",
    function () {
        lampOnElm.style.display = "block"
        lampOffElm.style.display = "none"
        console.log("tasto cliccato")
    }

)
