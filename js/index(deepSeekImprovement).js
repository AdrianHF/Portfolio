// Constants and Configuration
const CONFIG = {
    circle: {
      defaultRadius: "1%",
      activeRadius: "2%",
      excludedCircles: [ 2, 9, 19, 18, 29, 1, 6, 20, 15]
    },
    icons: {
      defaultSize: "0",
      activeSize: "4%",
      specialIcons: {
        ship: { width: "4.5%", height: "4.5%", x: "52.9%", y: "76.7%" },
        linkedIn: { width: "3.4%", height: "3.4%", x: "43.4%", y: "75%" },
        github: { width: "4.1%", height: "4.1%", x: "52.4%", y: "69%" },
        kaggle: { width: "5%", height: "5%", x: "30.55%", y: "71.5%" },
        excel: { width: "4.5%", height: "4.5%", x: "60.65%", y: "72.6%" },
        sql: { width: "4.2%", height: "4.2%", x: "36%", y: "63.8%" },
        powerBI: { width: "6.8%", height: "6.8%", x: "53.8%", y: "53.7%" },
        python: { width: "5.5%", height: "5.5%", x: "48.75%", y: "59.2%" },
        aws: { width: "5%", height: "5%", x: "27.5%", y: "58.6%" }
      }
    },
    text: {
      defaultFill: "none",
      activeFill: "#E6AB00"
    }
  };
  
  // DOM Elements
  const elements = {
    circles: document.querySelectorAll('.enlargeCircles circle'),
    cvText: document.querySelector('.cvText'),
    ship: document.querySelector('.ship'),
    underConstructionIcons: document.querySelectorAll(".underConstruction"),
    specialIcons: {
      linkedIn: document.getElementById("linkedInIcon"),
      github: document.getElementById("githubIcon"),
      kaggle: document.getElementById("kaggleIcon"),
      excel: document.getElementById("excelIcon"),
      sql: document.getElementById("sqlIcon"),
      powerBI: document.getElementById("powerBI"),
      python: document.getElementById('pythonIcon'),
      aws: document.getElementById('awsIcon')
    }
  };
  
  // State Management
  const state = {
    circlesXValues: [],
    circlesYValues: [],
    isActive: false
  };
  
  // Initialization
  function initialize() {
    // Set initial sizes
    resetAllElements();
    
    // Pre-calculate circle positions
    calculateCirclePositions();
    
    // Set up event listeners
    setupEventListeners();
  }
  
  // Calculate circle positions
  function calculateCirclePositions() {
    for (let i = 1; i < 33; i++) {
      const circle = document.getElementById(`circle${i}`);
      if (circle) {
        state.circlesXValues[i] = adjustPosition(circle.getAttribute("cx"), -1.9);
        state.circlesYValues[i] = adjustPosition(circle.getAttribute("cy"), -2.4);
      }
    }
  }
  
  // Helper function to adjust position values
  function adjustPosition(value, adjustment) {
    const numericValue = parseFloat(value.replace("%", ""));
    return `${numericValue + adjustment}%`;
  }
  
  // Reset all elements to default state
  function resetAllElements() {
    // Reset circles
    elements.circles.forEach(circle => {
      circle.setAttribute('r', CONFIG.circle.defaultRadius);
    });
  
    // Reset text
    elements.cvText.setAttribute('fill', CONFIG.text.defaultFill);
  
    // Reset ship
    elements.ship.setAttribute('width', '0');
    elements.ship.setAttribute('height', '0');
  
    // Reset under construction icons
    elements.underConstructionIcons.forEach(icon => {
      icon.setAttribute('width', "0");
      icon.setAttribute('height', "0");
    });
  
    // Reset special icons
    Object.values(elements.specialIcons).forEach(icon => {
      if (icon) {
        icon.setAttribute('width', '0');
        icon.setAttribute('height', '0');
      }
    });
  }
  
  // Activate all elements
  function activateElements() {
    // Activate circles
    elements.circles.forEach(circle => {
      circle.setAttribute('r', CONFIG.circle.activeRadius);
    });
  
    // Activate text
    elements.cvText.setAttribute('fill', CONFIG.text.activeFill);
  
    // Activate ship
    elements.ship.setAttribute('x', CONFIG.icons.specialIcons.ship.x);
    elements.ship.setAttribute('y', CONFIG.icons.specialIcons.ship.y);
    elements.ship.setAttribute('width', CONFIG.icons.specialIcons.ship.width);
    elements.ship.setAttribute('height', CONFIG.icons.specialIcons.ship.height);
  
    // Activate under construction icons
    elements.underConstructionIcons.forEach(icon => {
      icon.setAttribute('width', CONFIG.icons.activeSize);
      icon.setAttribute('height', CONFIG.icons.activeSize);
    });
  
    // Activate special icons
    const { linkedIn, github, kaggle, excel, sql, powerBI, python, aws } = CONFIG.icons.specialIcons;
    setIconAttributes(elements.specialIcons.linkedIn, linkedIn);
    setIconAttributes(elements.specialIcons.github, github);
    setIconAttributes(elements.specialIcons.kaggle, kaggle);
    setIconAttributes(elements.specialIcons.excel, excel);
    setIconAttributes(elements.specialIcons.sql, sql);
    setIconAttributes(elements.specialIcons.powerBI, powerBI);
    setIconAttributes(elements.specialIcons.python, python);
    setIconAttributes(elements.specialIcons.aws, aws);
    // Position under construction icons
    positionUnderConstructionIcons();
  }
  
  // Set icon attributes
  function setIconAttributes(icon, attributes) {
    if (!icon) return;
    Object.entries(attributes).forEach(([attr, value]) => {
      icon.setAttribute(attr, value);
    });
  }
  
  // Position under construction icons
  function positionUnderConstructionIcons() {
    for (let i = 1; i < 33; i++) {
      if (!CONFIG.circle.excludedCircles.includes(i)) {
        const icon = document.getElementById(`uC${i}`);
        if (icon) {
          icon.setAttribute("x", state.circlesXValues[i]);
          icon.setAttribute("y", state.circlesYValues[i]);
        }
      }
    }
  }
  
  // Setup hover effects
  function setupHoverEffects() {
    // Generic hover handler
    function createHoverHandler(circleId) {
      return {
        mouseover: () => document.getElementById(circleId)?.classList.add('hovered'),
        mouseout: () => document.getElementById(circleId)?.classList.remove('hovered')
      };
    }
  
    // Set up hover effects for special elements
    const hoverMappings = [
      { element: document.querySelector('.cvHover'), circleId: 'circle2' },
      { element: document.querySelector('.ship'), circleId: 'circle18' },
      { element: document.getElementById('linkedInIcon'), circleId: 'circle9' },
      { element: document.getElementById('githubIcon'), circleId: 'circle19' },
      { element: document.getElementById('kaggleIcon'), circleId: 'circle3' },
      { element: document.getElementById('excelIcon'), circleId: 'circle29' },
      { element: document.getElementById('sqlIcon'), circleId: 'circle6' },
      { element: document.getElementById('powerBI'), circleId: 'circle20' },
      { element: document.getElementById('pythonIcon'), circleId: 'circle15' },
      { element: document.getElementById('awsIcon'), circleId: 'circle4' }
    ];
  
    hoverMappings.forEach(({ element, circleId }) => {
      if (element) {
        const { mouseover, mouseout } = createHoverHandler(circleId);
        element.addEventListener('mouseover', mouseover);
        element.addEventListener('mouseout', mouseout);
      }
    });
  
    // Set up hover effects for under construction icons
    for (let i = 1; i < 33; i++) {
      if (![5,7,8,10,11,12,13,14,16,17,21,22,23,24,25,26,27,28,30,31,32].includes(i)) continue;
      
      const icon = document.getElementById(`uC${i}`);
      if (icon) {
        const { mouseover, mouseout } = createHoverHandler(`circle${i}`);
        icon.addEventListener('mouseover', mouseover);
        icon.addEventListener('mouseout', mouseout);
      }
    }
  }
  
  // Main toggle function
  function toggleElements() {
    state.isActive = !state.isActive;
    
    if (state.isActive) {
      activateElements();
    } else {
      resetAllElements();
    }
  }
  
  // Set up event listeners
  function setupEventListeners() {
    // Main click handler
    document.getElementById('black-circle')?.addEventListener('click', toggleElements);
    
    // Hover effects
    setupHoverEffects();
  }
  
  // Initialize the application
  initialize();