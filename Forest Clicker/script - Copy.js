let count = 0;
let workers = 0;
let costw = 10
let costm = 100
let multiplier = 1;

function updateCount() {
    const counter = Math.round(count);
    document.getElementById("clicks").innerHTML = counter;
}

function updateCost() {
    const coster = Math.round(costw);
    document.getElementById("cost").innerHTML = coster
    const costerm = Math.round(costm);
    document.getElementById("managerCost").innerHTML = costerm
}
function increaseCount() {
    count++;
    updateCount();
}

function hireWorker() {
    if (count >= costw) {
        count -= costw;
        workers++;
        costw = costw * 1.15; // Increase cost by 15% for each worker hired
        updateCost();
        updateCount();
    }
}

function hireManager() {
    if (count >= costm) {
        count -= costm;
        multiplier++;
        costm = costm * 2; // Double the cost for each manager hired
        updateCost();
        updateCount();
}
}

function clickFrame() {
    count += (workers * multiplier) / 60;
    updateCount();
}

setInterval(clickFrame, 1000/60); // Call clickFrame 60 times per second

updateCount();