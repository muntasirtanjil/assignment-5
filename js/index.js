
document.getElementById('discover').addEventListener('click', function (event) {

    window.location.href = "next.html"
})




 
let colors = ["red", "blue", "green", "orange", "purple", "pink", "yellow"];
let colorIndex = 0;


document.getElementById("theam").addEventListener("click", function () {
   

    document.body.style.backgroundColor = colors[colorIndex];


    colorIndex = (colorIndex + 1) % colors.length;
});
