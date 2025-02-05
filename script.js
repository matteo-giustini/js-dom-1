const lampOnElm = document.getElementById("lampOn")
const lampOffElm = document.getElementById("lampOff")
const btnElm = document.getElementById("btn")



btnElm.addEventListener("click", function () {
       if(lampOnElm.classList.contains("hidden")){
        lampOnElm.classList.remove("hidden")
        lampOffElm.classList.add("hidden")
        btnElm.innerText = "Spegni"
       } else{
        lampOnElm.classList.add("hidden")
        lampOffElm.classList.remove("hidden")
        btnElm.innerText = "Accendi"
       } 
       
    }

)
