thirdLine = document.getElementById('thirdLine');
titanicPythonCode = document.getElementById('titanicPythonCode');
secondLine = document.getElementById('secondLine');
viewHere = document.getElementById('viewHere');
expandIcon = document.getElementById('expandIcon');
shipIcon = document.getElementById('shipIcon');
titleTitanicPythonCode = document.getElementById('titleTitanicPythonCode');
pythonCodeDiv = document.getElementById('pythonCodeDiv');


pythonCode.style.margin = '0';


pythonCode.style.display = 'none';

titanicPythonCode.style.border = '1px solid black';

let collapsed = true;

thirdLine.addEventListener('click', () => {

    if (collapsed == true){
    viewHere.textContent = 'Collapse';
    titanicPythonCode.style.width = '100%';
    titanicPythonCode.style.height = '10%';
    shipIcon.style.display = 'none'

    secondLine.style.display = 'none';
    expandIcon.style.display = 'none';
    pythonCode.style.display = 'flex';
    


    collapsed = false;
   
    }
    else {
    viewHere.textContent = 'View Here';
    titanicPythonCode.style.width = '25%';
    titanicPythonCode.style.hieght = '30%';
    secondLine.style.display = 'flex';
    expandIcon.style.display = 'flex';
    shipIcon.style.display = 'flex'

    shipIcon.style.width = '15%'
    shipIcon.style.height = '15%'

    pythonCode.style.display = 'none';

    collapsed = true;
    }
});