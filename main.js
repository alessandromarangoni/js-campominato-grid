let bottone = document.getElementById("button");
console.log(bottone)
// let main = document.getElementById("main");
// console.log(main)
// let boxed = document.getElementById("boxed");
let difficolta = document.getElementById("difficolta").value
console.log (difficolta)

if(difficolta=="facile"){
    button.addEventListener("click",start)
}
else if (difficolta =="medio"){
    console.log(difficolta)
    button.addEventListener("click",startMD)
}
else{
    console.log(difficolta)
    button.addEventListener("click",startHD)
}

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
        creaDiv.classList.add("box");
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
        creaDiv.classList.add("box");
        boxed.appendChild(creaDiv);
        creaDiv.innerHTML = [i];

        creaDiv.addEventListener("click", function() {
            console.log("this: ", this);
            this.classList.toggle("clicked");
        });
    }
}



