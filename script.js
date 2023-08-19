const ANSWERS = [
    "Mulig det.",
    "Ja!",
    "Kanskje",
    "Absolutt ikke.",
    "Aldri i verden!",
    "Om du er heldig.",
    "Usannsynlig...",
    "Absolutt!"
];

let center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
};

let cooldown = false;

let answer;

const randomAnswer = () => { 
    let newAnsIndex = Math.floor(Math.random() * (ANSWERS.length - 1));
    return ANSWERS[ANSWERS.push(ANSWERS.splice(newAnsIndex, 1)[0]) - 1];
};

const newAnswer = () => {
    randomItem = randomAnswer();
    answer = `${randomItem}`;
    updateView();
};

const updateView = () => {
    document.getElementById("text-span").innerHTML = answer;
};

window.addEventListener('resize', function() {
    center.x = window.innerWidth / 2;
    center.y = window.innerHeight / 2;
    console.log(center.x, center.y);
});

document.body.onmousemove = e => {
    if (cooldown) return;
    cooldown = true;

    let root = document.documentElement.style;

    let shadowX     = (center.x - e.clientX) / 15;
    let shadowY     = (center.y - e.clientY) / 15;
    let shadowBlur  = Math.sqrt((shadowX - shadowY) ** 2) / 3 + 25;

    console.log("Shadow X offset:", shadowX.toFixed(2), "Shadow Y offset:", shadowY.toFixed(2), "Shadow blur radius:", shadowBlur.toFixed(2));

    root.setProperty("--shadow-x", `${shadowX}px`);
    root.setProperty("--shadow-y", `${shadowY}px`);
    root.setProperty("--shadow-blur", `${shadowBlur}px`);
    
    setTimeout(() => cooldown = false, 16);
}