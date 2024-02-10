let counter = 0;
let history_number = 0;
let resStr = "";
let changeCounter = document.getElementById("displayCounter")
let history = document.getElementById("history")

function incCounter() {
    counter++;
    changeCounter.innerHTML = counter;
}


function decCounter() {
    if (counter > 0)
        counter--;
    changeCounter.innerHTML = counter;

}

function saveHistory() {
    history_number++;
    resStr = history.innerHTML + counter + ", ";

    if (history_number > 5) {
        resStr = resStr.slice(resStr.indexOf(",") + 1)
        history_number--;
    }

    history.innerHTML = resStr;
    history.style.textAlign = "center";

}

function resetCounter() {
    counter = 0;
    changeCounter.innerHTML = counter;
}

function clearHistory() {
    history_number = 0;
    resStr = "";
    history.innerHTML = resStr;

}