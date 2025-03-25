expandButton = document.getElementById("expandButton")


expandButton.setAttribute("x", "41%");
expandButton.setAttribute("y", "9.7%");
expandButton.setAttribute("width", "5%");
expandButton.setAttribute("height", "5%");

squareEB = document.getElementById("squareEB");

squareEB.setAttribute("x", "41%");
squareEB.setAttribute("y", "9.7%");
squareEB.setAttribute("width", "5%");
squareEB.setAttribute("height", "5%");

flag = 0;
console.log(flag);

squareNO = document.getElementById("squareNO");

squareNO.setAttribute("x", "30%");
squareNO.setAttribute("y", "30%");
squareNO.setAttribute("width", "5%");
squareNO.setAttribute("height", "5%");

a1 = document.querySelector(".a1");

a1.setAttribute("stroke-linejoin", "none");
a1.setAttribute("stroke-linecap", "none");
a1.setAttribute("fill", "none");
a1.setAttribute("stroke", "none");

numberOne = document.getElementById("numberOne");

numberOne.setAttribute("width", "0");
numberOne.setAttribute("height", "0");



document.getElementById('expandButton').addEventListener('click', function () {


    if (flag == 0) {

        textBox = document.getElementById("textBox");
        textBox.style.color = 'black';
        textBox.style.transition = "color 3s";

        a1.setAttribute("stroke-linejoin", "round");
        a1.setAttribute("stroke-linecap", "round");

        a1.setAttribute("fill", "transparent");
        a1.setAttribute("stroke", "black");

        numberOne.setAttribute("width", "4%");
        numberOne.setAttribute("height", "4%");
        numberOne.setAttribute("x", "30.5%");
        numberOne.setAttribute("y", "30.5%");

    } else {

        textBox = document.getElementById("textBox");
        textBox.style.color = 'transparent';
        textBox.style.transition = "color 1s";

        numberOne.setAttribute("fill", "transparent");
        numberOne.setAttribute("transition", "fill 3s");


    }
});




document.getElementById('squareEB').addEventListener('click', function () {

    if (flag == 0) {

        textBox = document.getElementById("textBox");
        textBox.style.color = 'black';
        textBox.style.transition = "color 3s";


        a1.setAttribute("stroke-linejoin", "round");
        a1.setAttribute("stroke-linecap", "round");

        a1.setAttribute("fill", "transparent");
        a1.setAttribute("stroke", "black");
        a1.style.transition = "stroke 3s";

        numberOne.setAttribute("width", "4%");
        numberOne.setAttribute("height", "4%");
        numberOne.setAttribute("x", "30.5%");
        numberOne.setAttribute("y", "30.5%");
        numberOne.setAttribute("fill", "black");
        numberOne.style.transition = "fill 3s";


    } else {

        textBox = document.getElementById("textBox");
        textBox.style.color = 'transparent';
        textBox.style.transition = "color 1s";

        a1.setAttribute("fill", "transparent");
        a1.setAttribute("stroke", "transparent");
        a1.style.transition = "stroke 1s";

        numberOne.setAttribute("fill", "transparent");
        numberOne.style.transition = "fill 1s";


    }
});



document.getElementById('squareEB').addEventListener('click', function () {

    if (flag == 1) {

        document.querySelector('.a').style.stroke = "transparent";


        flag = 0;
        console.log(flag);


    }
    else {

        console.log(flag);
        document.querySelector('.a').style.stroke = "black";


        flag = 1;
        console.log(flag);

    }
});



