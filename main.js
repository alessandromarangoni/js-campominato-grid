let bottone = document.getElementById("button");
let bottoneMD = document.getElementById("button2");
let bottoneHD = document.getElementById("button3");
console.log(bottone)


bottone.addEventListener("click",start)
bottoneMD.addEventListener("click",startMD)
bottoneHD.addEventListener("click",startHD)

function start() {
    for (let i = 1; i < 100 +1; i++) {
        // const numero = i[i]
        let boxed = document.getElementById("boxed");
        let creaDiv = document.createElement("div");
        creaDiv.classList.add("box");
        boxed.appendChild(creaDiv);
        creaDiv.innerHTML = [i];

        creaDiv.addEventListener("click", function() {
            console.log("this: ", this);
            this.classList.toggle("clicked");
        });
    }
}

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



