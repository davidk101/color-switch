const colors = ["green", "red", "purple", "pink", "yellow", "orange", "lightblue", "lightgreen" ];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    const rand = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[rand];
    color.textContent = colors[rand];
})
