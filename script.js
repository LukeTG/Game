// ============================
// NUMBER FORMATTER
// ============================

function format(num){
    if(num < 1000) return Math.floor(num);
    const units = ["K","M","B","T","Qa","Qi"];
    let unit = -1;
    while(num >= 1000 && unit < units.length-1){
        num /= 1000;
        unit++;
    }
    return num.toFixed(1) + units[unit];
}

// ============================
// VARIABLES
// ============================

let count = 0;

let pollenators = 0, pollenatorsAdd = 1, pollenatorCost = 10;
let treeHuggers = 0, treeHuggerAdd = 3, treeHuggerCost = 25;
let rainDancers = 0, rainDancerMult = 1, rainDancerCost = 100;
let treeMancers = 0, treeMancersAdd = 100, treeMancerCost = 5000;
let tractors = 0, tractorAdd = 500, tractorCost = 15000;
let treeXFactors = 0, treeXFactorMult = 2, treeXFactorCost = 100000;
let autoPlanters = 0, autoPlanterAdd = 25000, autoPlanterCost = 1000000;
let seedBombers = 0, seedBomberAdd = 200000, seedBomberCost = 5000000;
let interContinentalBallisticSeeders = 0, interContinentalBallisticSeederAdd = 20000000, interContinentalBallisticSeederCost = 250000000;
let seedViruses = 0, seedVirusMult = 10, seedVirusCost = 5000000000;

let addMult = 1.2, multMult = 2;

// ============================
// TPS CALCULATION
// ============================

function getTPS(){
    return (
        ((pollenators * pollenatorsAdd) + (treeHuggers * treeHuggerAdd)) * (1 + rainDancers * rainDancerMult) +
        ((treeMancers * treeMancersAdd) + (tractors * tractorAdd)) * (1 + treeXFactors * treeXFactorMult) +
        ((autoPlanters * autoPlanterAdd) + (seedBombers * seedBomberAdd) + (interContinentalBallisticSeeders * interContinentalBallisticSeederAdd)) * (1 + seedViruses * seedVirusMult)
    );
}

// ============================
// DISPLAY UPDATE
// ============================

function updateDisplay(){
    document.getElementById("clicks").innerText = format(count);
    document.getElementById("tps").innerText = format(getTPS());
    updateCost();
}

// ============================
// COST UPDATE
// ============================

function updateCost(){
    document.getElementById("pollenatorCost").innerText = format(pollenatorCost);
    document.getElementById("treeHuggerCost").innerText = format(treeHuggerCost);
    document.getElementById("rainDancerCost").innerText = format(rainDancerCost);
    document.getElementById("treeMancerCost").innerText = format(treeMancerCost);
    document.getElementById("tractorCost").innerText = format(tractorCost);
    document.getElementById("treeXFactorCost").innerText = format(treeXFactorCost);
    document.getElementById("autoPlanterCost").innerText = format(autoPlanterCost);
    document.getElementById("seedBomberCost").innerText = format(seedBomberCost);
    document.getElementById("interContinentalBallisticSeederCost").innerText = format(interContinentalBallisticSeederCost);
    document.getElementById("seedVirusCost").innerText = format(seedVirusCost);
}

// ============================
// CLICK TREE
// ============================

document.getElementById("clickButton").onclick = () => {
    count++;
    updateDisplay();
};

// ============================
// PURCHASE FUNCTIONS
// ============================

function hirePollenator(){ if(count >= pollenatorCost){ count -= pollenatorCost; pollenators++; pollenatorCost *= addMult; updateDisplay(); } }
function hireTreeHugger(){ if(count >= treeHuggerCost){ count -= treeHuggerCost; treeHuggers++; treeHuggerCost *= addMult; updateDisplay(); } }
function hireRainDancer(){ if(count >= rainDancerCost){ count -= rainDancerCost; rainDancers++; rainDancerCost *= multMult; updateDisplay(); } }
function hireTreeMancer(){ if(count >= treeMancerCost){ count -= treeMancerCost; treeMancers++; treeMancerCost *= addMult; updateDisplay(); } }
function hireTractor(){ if(count >= tractorCost){ count -= tractorCost; tractors++; tractorCost *= addMult; updateDisplay(); } }
function hireTreeXFactor(){ if(count >= treeXFactorCost){ count -= treeXFactorCost; treeXFactors++; treeXFactorCost *= multMult; updateDisplay(); } }
function hireAutoPlanter(){ if(count >= autoPlanterCost){ count -= autoPlanterCost; autoPlanters++; autoPlanterCost *= addMult; updateDisplay(); } }
function hireSeedBomber(){ if(count >= seedBomberCost){ count -= seedBomberCost; seedBombers++; seedBomberCost *= addMult; updateDisplay(); } }
function hireICBSeeder(){ if(count >= interContinentalBallisticSeederCost){ count -= interContinentalBallisticSeederCost; interContinentalBallisticSeeders++; interContinentalBallisticSeederCost *= addMult; updateDisplay(); } }
function hireSeedVirus(){ if(count >= seedVirusCost){ count -= seedVirusCost; seedViruses++; seedVirusCost *= multMult; updateDisplay(); } }

// ============================
// BUTTON EVENT LISTENERS
// ============================

document.getElementById("pollenator").onclick = hirePollenator;
document.getElementById("treeHugger").onclick = hireTreeHugger;
document.getElementById("rainDancer").onclick = hireRainDancer;
document.getElementById("treeMancer").onclick = hireTreeMancer;
document.getElementById("tractor").onclick = hireTractor;
document.getElementById("treeXFactor").onclick = hireTreeXFactor;
document.getElementById("autoPlanter").onclick = hireAutoPlanter;
document.getElementById("seedBomber").onclick = hireSeedBomber;
document.getElementById("interContinentalBallisticSeeder").onclick = hireICBSeeder;
document.getElementById("seedVirus").onclick = hireSeedVirus;

// ============================
// GAME LOOP
// ============================

function gameLoop(){
    count += getTPS()/60;
    updateDisplay();
}

setInterval(gameLoop, 16);
updateDisplay();