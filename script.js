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

    let shadowX = Math.floor((center.x - e.clientX) / 33);
    let shadowY = Math.floor((center.y - e.clientY) / 33);
    let shadowBlur = Math.sqrt((shadowX - shadowY) ** 2) / 2 + 25;

    console.log("Shadow X offset: ", shadowX, "Shadow Y offset: ", shadowY, "Shadow blur radius: ", shadowBlur);

    document.documentElement.style.setProperty("--shadow-x", `${shadowX}px`);
    document.documentElement.style.setProperty("--shadow-y", `${shadowY}px`);
    document.documentElement.style.setProperty("--shadow-blur", `${shadowBlur}px`);
    setTimeout(() => cooldown = false, 33);
}