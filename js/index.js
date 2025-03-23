
const circles = document.querySelectorAll('.enlargeCircles circle');
circles.forEach(circle => {
  circle.setAttribute('r', "1%");
});

sqlIcon = document.getElementById("sqlIcon");
sqlIcon.setAttribute('width', '0');
sqlIcon.setAttribute('height', '0');

excelIcon = document.getElementById("excelIcon");
excelIcon.setAttribute('width', '0');
excelIcon.setAttribute('height', '0');

kaggleIcon = document.getElementById("kaggleIcon");
kaggleIcon.setAttribute('width', '0');
kaggleIcon.setAttribute('height', '0');



linkedInIcon = document.getElementById("linkedInIcon");
linkedInIcon.setAttribute('width', '0');
linkedInIcon.setAttribute('height', '0');

githubIcon = document.getElementById('githubIcon');
githubIcon.setAttribute("width", '0');
githubIcon.setAttribute("height", '0');


cvText = document.querySelector('.cvText');
cvText.setAttribute('fill', 'none');

ship = document.querySelector('.ship');
ship.setAttribute('width', "0");
ship.setAttribute('height', "0");

powerBI = document.getElementById("powerBI");
powerBI.setAttribute("width","0");
powerBI.setAttribute("height", "0");


icons = document.querySelectorAll(".underConstruction");


icons.forEach((icon) => {

  icon.setAttribute('width', "0");
  icon.setAttribute('height', "0");

}

);


circlesXValues = [];
circlesYValues = [];

uC = [];


for (i = 1; i < 33; i++) {

  a = "circle" + i;

  circlesXValues[i] = document.getElementById(a).getAttribute("cx")
  circlesXValues[i] = circlesXValues[i].replace("%", "");

  circlesXValues[i] = circlesXValues[i] - 1.9
  circlesXValues[i] = circlesXValues[i] + "%"



  circlesYValues[i] = document.getElementById(a).getAttribute("cy")
  circlesYValues[i] = circlesYValues[i].replace("%", "");

  circlesYValues[i] = circlesYValues[i] - 2.4
  circlesYValues[i] = circlesYValues[i] + "%"

  console.log(a);
  console.log(circlesXValues);
  console.log(circlesYValues);


}












document.getElementById('black-circle').addEventListener('click', function () {


  cvText = document.querySelector('.cvText')
  circles.forEach(circle => {



    currentRadius = parseFloat(circle.getAttribute('r'));
    if (currentRadius == "2") {
      circle.setAttribute('r', "1%");
      cvText.setAttribute('fill', 'none');
      ship.setAttribute('width', '0');
      ship.setAttribute('height', '0');
      icons.forEach((icon) => {

        linkedInIcon.setAttribute('width', '0');
        linkedInIcon.setAttribute('height', '0');

        icon.setAttribute('width', "0");
        icon.setAttribute('height', "0");

        githubIcon.setAttribute("width", '0');
        githubIcon.setAttribute("height", '0');

        kaggleIcon.setAttribute('width', '0');
        kaggleIcon.setAttribute('height', '0');

        excelIcon.setAttribute('width', '0');
        excelIcon.setAttribute('height', '0');

        sqlIcon.setAttribute('width', '0');
        sqlIcon.setAttribute('height', '0');

        powerBI.setAttribute("width","0");
        powerBI.setAttribute("height", "0");


      });


    }

    else {

      circle.setAttribute('r', "2%");

      cvText.setAttribute('fill', '#E6AB00');

      ship.setAttribute('x', "53%");
      ship.setAttribute('y', "76.7%");
      ship.setAttribute('width', "4.5%");
      ship.setAttribute('height', "4.5%");

      linkedInIcon.setAttribute('width', '3.4%');
      linkedInIcon.setAttribute('height', '3.4%');
      linkedInIcon.setAttribute('x', '43.4%');
      linkedInIcon.setAttribute('y', '75%');

      githubIcon.setAttribute("width", '4.1%');
      githubIcon.setAttribute("height", '4.1%');
      githubIcon.setAttribute('x', '52.4%');
      githubIcon.setAttribute('y', '69%');

      kaggleIcon.setAttribute('width', '5%');
      kaggleIcon.setAttribute('height', '5%');
      kaggleIcon.setAttribute('x', '30.55%');
      kaggleIcon.setAttribute('y', '71.5%');

      excelIcon.setAttribute('width', '4.5%');
      excelIcon.setAttribute('height', '4.5%');
      excelIcon.setAttribute('x', '60.65%');
      excelIcon.setAttribute('y', '72.6%');

      sqlIcon.setAttribute('width', '4.2%');
      sqlIcon.setAttribute('height', '4.2%');
      sqlIcon.setAttribute('x', '36%');
      sqlIcon.setAttribute('y', '63.8%');

  
      powerBI.setAttribute("width","6.8%");
      powerBI.setAttribute("height", "6.8%");
      powerBI.setAttribute("x","53.8%");
      powerBI.setAttribute("y", "53.7%");


      for (i = 1; i < 33; i++) {


        if (![3, 2, 9, 19, 18, 29, 1, 6, 20].includes(i)) {

          a = "uC" + i;
          b = "circle" + i;
          uC[i] = document.getElementById(a)

          uC[i].setAttribute("x", circlesXValues[i]);
          uC[i].setAttribute("y", circlesYValues[i]);


        }
      }




      icons.forEach((icon) => {

        icon.setAttribute('width', "4%");
        icon.setAttribute('height', "4%");


      });

    }


  });


});






document.querySelector('.cvHover').addEventListener('mouseover', function () {
  document.getElementById('circle2').classList.add('hovered');
});

document.querySelector('.cvHover').addEventListener('mouseout', function () {
  document.getElementById('circle2').classList.remove('hovered');
});

document.querySelector('.ship').addEventListener('mouseover', function () {
  document.getElementById('circle18').classList.add('hovered');
});

document.querySelector('.ship').addEventListener('mouseout', function () {
  document.getElementById('circle18').classList.remove('hovered');
});


document.getElementById('linkedInIcon').addEventListener('mouseover', function () {
  document.getElementById('circle9').classList.add('hovered');
});

document.getElementById('linkedInIcon').addEventListener('mouseout', function () {
  document.getElementById('circle9').classList.remove('hovered');
});


document.getElementById('githubIcon').addEventListener('mouseover', function () {
  document.getElementById('circle19').classList.add('hovered');
});

document.getElementById('githubIcon').addEventListener('mouseout', function () {
  document.getElementById('circle19').classList.remove('hovered');
});


document.getElementById('kaggleIcon').addEventListener('mouseover', function () {
  document.getElementById('circle3').classList.add('hovered');
});

document.getElementById('kaggleIcon').addEventListener('mouseout', function () {
  document.getElementById('circle3').classList.remove('hovered');
});

document.getElementById('excelIcon').addEventListener('mouseover', function () {
  document.getElementById('circle29').classList.add('hovered');
});

document.getElementById('excelIcon').addEventListener('mouseout', function () {
  document.getElementById('circle29').classList.remove('hovered');
});

document.getElementById('sqlIcon').addEventListener('mouseover', function () {
  document.getElementById('circle6').classList.add('hovered');
});

document.getElementById('sqlIcon').addEventListener('mouseout', function () {
  document.getElementById('circle6').classList.remove('hovered');
});





document.getElementById('powerBI').addEventListener('mouseover', function () {
  document.getElementById('circle20').classList.add('hovered');
});

document.getElementById('powerBI').addEventListener('mouseout', function () {
  document.getElementById('circle20').classList.remove('hovered');
});





document.getElementById('uC4').addEventListener('mouseover', function () {
  document.getElementById('circle4').classList.add('hovered');
});
document.getElementById('uC4').addEventListener('mouseout', function () {
  document.getElementById('circle4').classList.remove('hovered');
});

document.getElementById('uC5').addEventListener('mouseover', function () {
  document.getElementById('circle5').classList.add('hovered');
});
document.getElementById('uC5').addEventListener('mouseout', function () {
  document.getElementById('circle5').classList.remove('hovered');
});



document.getElementById('uC7').addEventListener('mouseover', function () {
  document.getElementById('circle7').classList.add('hovered');
});
document.getElementById('uC7').addEventListener('mouseout', function () {
  document.getElementById('circle7').classList.remove('hovered');
});

document.getElementById('uC8').addEventListener('mouseover', function () {
  document.getElementById('circle8').classList.add('hovered');
});
document.getElementById('uC8').addEventListener('mouseout', function () {
  document.getElementById('circle8').classList.remove('hovered');
});


document.getElementById('uC10').addEventListener('mouseover', function () {
  document.getElementById('circle10').classList.add('hovered');
});
document.getElementById('uC10').addEventListener('mouseout', function () {
  document.getElementById('circle10').classList.remove('hovered');
});

document.getElementById('uC11').addEventListener('mouseover', function () {
  document.getElementById('circle11').classList.add('hovered');
});
document.getElementById('uC11').addEventListener('mouseout', function () {
  document.getElementById('circle11').classList.remove('hovered');
});

document.getElementById('uC12').addEventListener('mouseover', function () {
  document.getElementById('circle12').classList.add('hovered');
});
document.getElementById('uC12').addEventListener('mouseout', function () {
  document.getElementById('circle12').classList.remove('hovered');
});

document.getElementById('uC13').addEventListener('mouseover', function () {
  document.getElementById('circle13').classList.add('hovered');
});
document.getElementById('uC13').addEventListener('mouseout', function () {
  document.getElementById('circle13').classList.remove('hovered');
});

document.getElementById('uC14').addEventListener('mouseover', function () {
  document.getElementById('circle14').classList.add('hovered');
});
document.getElementById('uC14').addEventListener('mouseout', function () {
  document.getElementById('circle14').classList.remove('hovered');
});

document.getElementById('uC15').addEventListener('mouseover', function () {
  document.getElementById('circle15').classList.add('hovered');
});
document.getElementById('uC15').addEventListener('mouseout', function () {
  document.getElementById('circle15').classList.remove('hovered');
});

document.getElementById('uC16').addEventListener('mouseover', function () {
  document.getElementById('circle16').classList.add('hovered');
});
document.getElementById('uC16').addEventListener('mouseout', function () {
  document.getElementById('circle16').classList.remove('hovered');
});

document.getElementById('uC17').addEventListener('mouseover', function () {
  document.getElementById('circle17').classList.add('hovered');
});
document.getElementById('uC17').addEventListener('mouseout', function () {
  document.getElementById('circle17').classList.remove('hovered');
});




document.getElementById('uC21').addEventListener('mouseover', function () {
  document.getElementById('circle21').classList.add('hovered');
});
document.getElementById('uC21').addEventListener('mouseout', function () {
  document.getElementById('circle21').classList.remove('hovered');
});

document.getElementById('uC22').addEventListener('mouseover', function () {
  document.getElementById('circle22').classList.add('hovered');
});
document.getElementById('uC22').addEventListener('mouseout', function () {
  document.getElementById('circle22').classList.remove('hovered');
});

document.getElementById('uC23').addEventListener('mouseover', function () {
  document.getElementById('circle23').classList.add('hovered');
});
document.getElementById('uC23').addEventListener('mouseout', function () {
  document.getElementById('circle23').classList.remove('hovered');
});

document.getElementById('uC24').addEventListener('mouseover', function () {
  document.getElementById('circle24').classList.add('hovered');
});
document.getElementById('uC24').addEventListener('mouseout', function () {
  document.getElementById('circle24').classList.remove('hovered');
});

document.getElementById('uC25').addEventListener('mouseover', function () {
  document.getElementById('circle25').classList.add('hovered');
});
document.getElementById('uC25').addEventListener('mouseout', function () {
  document.getElementById('circle25').classList.remove('hovered');
});

document.getElementById('uC26').addEventListener('mouseover', function () {
  document.getElementById('circle26').classList.add('hovered');
});
document.getElementById('uC26').addEventListener('mouseout', function () {
  document.getElementById('circle26').classList.remove('hovered');
});

document.getElementById('uC27').addEventListener('mouseover', function () {
  document.getElementById('circle27').classList.add('hovered');
});
document.getElementById('uC27').addEventListener('mouseout', function () {
  document.getElementById('circle27').classList.remove('hovered');
});

document.getElementById('uC28').addEventListener('mouseover', function () {
  document.getElementById('circle28').classList.add('hovered');
});
document.getElementById('uC28').addEventListener('mouseout', function () {
  document.getElementById('circle28').classList.remove('hovered');
});



document.getElementById('uC30').addEventListener('mouseover', function () {
  document.getElementById('circle30').classList.add('hovered');
});
document.getElementById('uC30').addEventListener('mouseout', function () {
  document.getElementById('circle30').classList.remove('hovered');
});

document.getElementById('uC31').addEventListener('mouseover', function () {
  document.getElementById('circle31').classList.add('hovered');
});
document.getElementById('uC31').addEventListener('mouseout', function () {
  document.getElementById('circle31').classList.remove('hovered');
});

document.getElementById('uC32').addEventListener('mouseover', function () {
  document.getElementById('circle32').classList.add('hovered');
});
document.getElementById('uC32').addEventListener('mouseout', function () {
  document.getElementById('circle32').classList.remove('hovered');
});




