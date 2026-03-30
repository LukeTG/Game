document.addEventListener("DOMContentLoaded", () => {
    const treeButton = document.getElementById("tree");
    const treeImage = document.getElementById("treeImage");
    const titleScreen = document.getElementById("title-screen");
    const clickerScreen = document.getElementById("clicker-screen");
    const treeCountText = document.getElementById("treeCount");

    // GAME STATE
    let treeCount = 0;
    let cps = 0;

    let pollenators = 0, pollenatorsAdd = 1, pollenatorCost = 10;
    let treeHuggers = 0, treeHuggerAdd = 3, treeHuggerCost = 25;
    let rainDancers = 1, rainDancerMult = 1, rainDancerCost = 100;
    let treeMancers = 0, treeMancersAdd = 100, treeMancerCost = 5000;
    let tractors = 0, tractorAdd = 500, tractorCost = 15000;
    let treeXFactors = 1, treeXFactorMult = 2, treeXFactorCost = 100000;
    let autoPlanters = 0, autoPlanterAdd = 25000, autoPlanterCost = 1000000;
    let seedBombers = 0, seedBomberAdd = 200000, seedBomberCost = 5000000;
    let interContinentalBallisticSeeders = 0, interContinentalBallisticSeederAdd = 20000000, interContinentalBallisticSeederCost = 250000000;
    let seedViruses = 1, seedVirusMult = 10, seedVirusCost = 5000000000;

    const addMult = 1.4, multMult = 2;

    // Enable title click after animation
    setTimeout(() => {
        if (treeButton) treeButton.style.pointerEvents = "auto";
    }, 3200);

    // Title → Clicker transition
    treeButton?.addEventListener("click", () => {
        titleScreen.classList.add("hidden");
        setTimeout(() => {
            clickerScreen.classList.add("active");
        }, 1000);
    });

    // Tree clicker
    treeImage?.addEventListener("click", () => {
        treeCount += 1 + cps * 10;
        treeCountText.textContent = formatNumber(treeCount);

        // Restart shake animation instantly
        treeImage.classList.remove("shake");
        void treeImage.offsetWidth; // reflow
        treeImage.classList.add("shake");
    });

    // FORMAT NUMBERS FOR DISPLAY
    function formatNumber(value) {
        if (value < 1000) return value.toFixed(1);
        const units = ["k", "M", "B", "T", "Qa", "Qi"];
        let unitIndex = -1;
        let number = value;
        while (number >= 1000 && unitIndex < units.length - 1) {
            number /= 1000;
            unitIndex++;
        }
        return number.toFixed(1) + units[unitIndex];
    }

    // UPDATE DISPLAY
    function updateDisplay() {
        treeCountText.textContent = formatNumber(treeCount);

        document.getElementById("pollenatorCount").textContent = pollenators;
        document.getElementById("treeHuggerCount").textContent = treeHuggers;
        document.getElementById("rainDancerCount").textContent = rainDancers - 1;
        document.getElementById("treemancerCount").textContent = treeMancers;
        document.getElementById("tractorCount").textContent = tractors;
        document.getElementById("treeXFactorCount").textContent = treeXFactors - 1;
        document.getElementById("autoPlanterCount").textContent = autoPlanters;
        document.getElementById("seedBomberCount").textContent = seedBombers;
        document.getElementById("interContinentalBallisticSeederCount").textContent = interContinentalBallisticSeeders;
        document.getElementById("seedVirusCount").textContent = seedViruses - 1;

        document.getElementById("pollenatorCost").textContent = formatNumber(pollenatorCost);
        document.getElementById("treeHuggerCost").textContent = formatNumber(treeHuggerCost);
        document.getElementById("rainDancerCost").textContent = formatNumber(rainDancerCost);
        document.getElementById("treemancerCost").textContent = formatNumber(treeMancerCost);
        document.getElementById("tractorCost").textContent = formatNumber(tractorCost);
        document.getElementById("treeXFactorCost").textContent = formatNumber(treeXFactorCost);
        document.getElementById("autoPlanterCost").textContent = formatNumber(autoPlanterCost);
        document.getElementById("seedBomberCost").textContent = formatNumber(seedBomberCost);
        document.getElementById("interContinentalBallisticSeederCost").textContent = formatNumber(interContinentalBallisticSeederCost);
        document.getElementById("seedVirusCost").textContent = formatNumber(seedVirusCost);
    }

    // HIRE FUNCTIONS
    function hirePollenator() { 
        if (treeCount >= pollenatorCost) { 
            treeCount -= pollenatorCost; 
            pollenators++; 
            pollenatorCost *= addMult; 
            updateDisplay(); 
        } 
    }
    function hireTreeHugger() { 
        if (treeCount >= treeHuggerCost) { 
            treeCount -= treeHuggerCost; 
            treeHuggers++; 
            treeHuggerCost *= addMult; 
            updateDisplay(); 
        } 
    }
    function hireRainDancer() { 
        if (treeCount >= rainDancerCost) { 
            treeCount -= rainDancerCost; 
            rainDancers++; 
            rainDancerCost *= multMult; 
            updateDisplay(); 
        } 
    }
    function hireTreeMancer() { 
        if (treeCount >= treeMancerCost) { 
            treeCount -= treeMancerCost; 
            treeMancers++; 
            treeMancerCost *= addMult; 
            updateDisplay(); 
        } 
    }
    function hireTractor() { 
        if (treeCount >= tractorCost) { 
            treeCount -= tractorCost; 
            tractors++; 
            tractorCost *= addMult; 
            updateDisplay(); 
        } 
    }
    function hireTreeXFactor() { 
        if (treeCount >= treeXFactorCost) { 
            treeCount -= treeXFactorCost; 
            treeXFactors++; 
            treeXFactorCost *= multMult; 
            updateDisplay(); 
        } 
    }
    function hireAutoPlanter() { 
        if (treeCount >= autoPlanterCost) { 
            treeCount -= autoPlanterCost; 
            autoPlanters++; 
            autoPlanterCost *= addMult; 
            updateDisplay(); 
        } 
    }
    function hireSeedBomber() { 
        if (treeCount >= seedBomberCost) { 
            treeCount -= seedBomberCost; 
            seedBombers++; 
            seedBomberCost *= addMult; 
            updateDisplay(); 
        } 
    }
    function hireICBSeeder() { 
        if (treeCount >= interContinentalBallisticSeederCost) { 
            treeCount -= interContinentalBallisticSeederCost; 
            interContinentalBallisticSeeders++; 
            interContinentalBallisticSeederCost *= addMult; 
            updateDisplay(); 
        } 
    }
    function hireSeedVirus() { 
        if (treeCount >= seedVirusCost) { 
            treeCount -= seedVirusCost; 
            seedViruses++; 
            seedVirusCost *= multMult; 
            updateDisplay(); 
        } 
    }

    // LINK BUTTONS
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

    // AUTOMATIC TREE ADD LOOP (60 FPS)
    setInterval(() => {
        treeCount += ((pollenators * pollenatorsAdd
                   + treeHuggers * treeHuggerAdd)
                   * rainDancers * rainDancerMult
                   + (treeMancers * treeMancersAdd
                   + tractors * tractorAdd)
                   * treeXFactors * treeXFactorMult
                   + (autoPlanters * autoPlanterAdd
                   + seedBombers * seedBomberAdd
                   + interContinentalBallisticSeeders * interContinentalBallisticSeederAdd)
                   * seedViruses * seedVirusMult) / 60;
        cps = ((pollenators * pollenatorsAdd
                   + treeHuggers * treeHuggerAdd)
                   * rainDancers * rainDancerMult
                   + (treeMancers * treeMancersAdd
                   + tractors * tractorAdd)
                   * treeXFactors * treeXFactorMult
                   + (autoPlanters * autoPlanterAdd
                   + seedBombers * seedBomberAdd
                   + interContinentalBallisticSeeders * interContinentalBallisticSeederAdd)
                   * seedViruses * seedVirusMult) / 60;
        updateDisplay();
        
    }, 1000 / 60);

    // INITIAL DISPLAY
    updateDisplay();
});