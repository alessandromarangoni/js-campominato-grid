// difficolta
let select = document.getElementById("diff").value
// bottone di start
let bottone = document.getElementById("button");
// quantita di celle da generare
let quantiti = 49;
let quadrata = Math.sqrt(quantiti)
console.log(quadrata)
// bottoni per difficolta md e hd e reset
let bottoneMD = document.getElementById("button2");
let bottoneHD = document.getElementById("button3");
let reset =document.getElementById("button4")

// verifico la difficolta (non funziona)

if (select == "md"){
    quantiti = 10
}
else if(select == "hd"){
    quantiti = 2
}

// resetto 

reset.addEventListener("click", function(){
    document.getElementById("boxed").innerHTML = "";
})
bottone.addEventListener("click",start,)
bottoneMD.addEventListener("click",startMD)
bottoneHD.addEventListener("click",startHD)

function start() {
    
    for (let i = 1; i < quantiti +1; i++)   {
        // const numero = i[i]
        let boxed = document.getElementById("boxed");
        let creaDiv = document.createElement("div");
        creaDiv.classList.add("box");
        boxed.appendChild(creaDiv);
        if (quantiti == 49){
            creaDiv.style.width = `calc(100% / ${quadrata})`
            creaDiv.style.height = `calc(100% / ${quadrata})`
        }
        else if (quantiti == 10){
            creaDiv.style.width = `calc(100% / ${quadrata})`
            creaDiv.style.height = `calc(100% / ${quadrata})`
        }

        else{
            creaDiv.style.width = `calc(100% / ${quadrata})`
            creaDiv.style.height = `calc(100% / ${quadrata})`
        }


        creaDiv.addEventListener("click", function() {
            creaDiv.innerHTML = Math.floor(Math.random()*5)
                if(creaDiv.innerHTML == 4)
                {alert("hai perso")
                    boxed.innerHTML=""
                }

                else if(creaDiv.innerHTML == 3){
                    // creaDiv.innerHTML = ""
                    
                }
        });
    }
}
// funzione md
function startMD() {
    for (let i = 1; i < 81 +1; i++) {
        // const numero = i[i]
        let boxed = document.getElementById("boxed");
        let creaDiv = document.createElement("div");
        creaDiv.classList.add("boxMD");
        boxed.appendChild(creaDiv);
        creaDiv.innerHTML = [i];

        creaDiv.addEventListener("click", function() {
            console.log("this: ", this);
            this.classList.toggle("clicked");
        });
    }
}
// funzione hd

function startHD() {
    for (let i = 1; i < 49 +1; i++) {
        // const numero = i[i]
        let boxed = document.getElementById("boxed");
        let creaDiv = document.createElement("div");
        creaDiv.classList.add("boxHD");
        boxed.appendChild(creaDiv);
        creaDiv.innerHTML = [i];

        creaDiv.addEventListener("click", function() {
            console.log("this: ", this);
            this.classList.toggle("clicked");
        });
    }
}



