//MAIN EXPAND BUTTON

const toggleButton = document.getElementById('thirdLine');
const container = document.getElementById('titanicPythonCode');
const viewHereText = document.getElementById('viewHere');

//PYTHON TITANIC BLOCKS

const firstBlock = document.getElementById('firstTitanicPythonBlock');
const secondBlock = document.getElementById('secondTitanicPythonBlock');
const thirdBlock = document.getElementById('thirdTitanicPythonBlock');
const fourthBlock = document.getElementById('fourthTitanicPythonBlock');
const fifthBlock = document.getElementById('fifthTitanicPythonBlock');

const allPyBlocks = [
    firstBlock,
    secondBlock,
    thirdBlock,
    fourthBlock,
    fifthBlock
]


//PYTHON TEXT FILES
const pyDataTransformation = document.getElementById('pyDataTransformation');
const pyDTTEST = document.getElementById('pyDTTEST');
const pyFinalModel = document.getElementById('pyFinalModel');
const pyFinalPrediction = document.getElementById('pyFinalPrediction');
const pyOptuna = document.getElementById('pyOptuna');


const allPyTextBlocks = [
    pyDataTransformation,
    pyDTTEST,
    pyFinalModel,
    pyFinalPrediction,
    pyOptuna
];

const blockMap = new Map();

// 2. Loop through one of the arrays to populate the Map
allPyBlocks.forEach((block, index) => {
    // Get the corresponding text block from the other array using the same index
    const textBlock = allPyTextBlocks[index];

    // Set the pyBlock object as the key and the pyTextBlock as the value
    blockMap.set(block, textBlock);
});



toggleButton.addEventListener('click', () => {


    if (container.classList.contains('expanded')) {
        container.classList.remove('expanded');

        allPyTextBlocks.forEach(block => {
            block.classList.remove('expanded');
        });

        allPyBlocks.forEach(block => {
            block.style.backgroundColor = ('rgb(223, 215, 215)');
        });


    }
    else {
        container.classList.add('expanded')
    }


    const isNowExpanded = container.classList.contains('expanded');
    // isNowExpanded? 'Value for True' : 'Value for False'
    viewHereText.textContent = isNowExpanded ? 'Collapse' : 'View Here';


})


blockMap.forEach((pyTextBlock, pyBlock) => {
    
    pyBlock.addEventListener('click', () => {

        // Check if the item we clicked was already expanded BEFORE we change anything.
        // We check the class on its corresponding textBlock.
        const wasAlreadyExpanded = pyTextBlock.classList.contains('expanded');

        // --- STEP 1: RESET EVERYTHING ---
        // Loop through the entire map again to reset all elements to their default state.
        blockMap.forEach((tb, pb) => {
            // Remove 'expanded' class from all text blocks
            tb.classList.remove('expanded');
            // Reset the background color on all pyBlocks
            pb.style.backgroundColor = 'rgb(223, 215, 215)';
        });

        // --- STEP 2: ACTIVATE THE CLICKED ONE (if it wasn't already open) ---
        if (!wasAlreadyExpanded) {
            // Add the 'expanded' class to the clicked item's partner
            pyTextBlock.classList.add('expanded');
            // Set the "active" background color on the item that was clicked
            pyBlock.style.backgroundColor = 'rgb(172, 166, 166)';
        }
    });
});