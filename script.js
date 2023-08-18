let ANSWERS = [
    "Mulig det.",
    "Ja!",
    "Kanskje",
    "Absolutt ikke.",
    "Aldri i verden!",
    "Om du er heldig.",
    "Usannsynlig...",
    "Absolutt!"
];

let lastAnsIndex = null;
let answer = null;

const getElement = (id) => {
    return document.getElementById(id);
};

const randomAnswer = (index) => {
    let newAnsIndex = Math.floor(Math.random() * (ANSWERS.length - 1));
    return ANSWERS.push(ANSWERS.splice(newAnsIndex, 1)[0]);
};

const newAnswer = () => {
    randomItem = randomAnswer(lastAnsIndex);
    answer = /*HTML*/ `
        <div class="outer-ball" onclick="newAnswer()">
            <div class="inner-ball">
                <div class="answer">
                    <span class="text-span">${randomItem}</span>
                </div>
            </div>
        </div>
    `;
    updateView();
};

const updateView = () => {
    let element = getElement('app');
    element.innerHTML = answer;
};