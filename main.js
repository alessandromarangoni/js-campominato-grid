let bottone = document.getElementById("button");
console.log(bottone)
// let main = document.getElementById("main");
// console.log(main)
// let boxed = document.getElementById("boxed");

button.addEventListener("click",start)

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




