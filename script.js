const checkAnswer = () => {

}
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min; 

const drawFrets = () => {
    let a = "";
    for(let i=1; i<=6; i++){
        for(let j=0; j<=4; j++){
            let b = `${7-i}${j==0 ? 0 : 5-j}`;
            a += `<div class="fret" id="fret${b}" onclick="checkAnswer()" style="grid-row:${i}; grid-column: ${j};">${b}</div>`;
        }    
    }
    document.getElementById("frets").innerHTML = a;
}
drawFrets()
const drawQuestion = () => {
    let a = "";
    for(let i=1; i<=5; i++){a += `<hr>`;}
    document.getElementById("lines").innerHTML = a;
    let b ="";
    for(let i=1; i<=3; i++){b += `<hr>`;}
    document.getElementById("exLines").innerHTML = b;
    let c = "";
    for (let i = 65; i<=71; i++) {c += `<input type="radio" name="answers" id="answer${i-64}"><label for="answer${i-64}" id="${String.fromCharCode(i)}">${String.fromCharCode(i)}</label>`;}// A-65, G-71
        document.getElementById("notesList").innerHTML = c;
}
drawQuestion()
const notes = [
    ["E3","F3",,"G3",],
    ["B3","C3",,"D3",],
    ["G2",,"A3",,],
    ["D2",,"E2","F2",],
    ["A2",,"B2","C2",],
    ["E1","F1",,"G1",]
]
const notePositions = {
    G3: "+8px",
    F3: "+14px",
    E3: "+20px",
    D3: "+26px",
    C3: "+32px",
    B3: "+38px",
    A3: "+44px",
    G2: "+50px",
    F2: "+56px",
    E2: "+62px",
    D2: "+68px",
    C2: "+74px",
    B2: "+80px",
    A2: "+86px",
    G1: "+92px",
    F1: "+98px",
    E1: "+104px",
}
const askQuestion = () => {
    let question;
    do {question = notes[getRandomNumber(0,5)][getRandomNumber(0,4)];
    // do {question = notes[0][1];
    } while (question === undefined);
    document.getElementById("hint").innerHTML = question;
    console.log(notePositions[question])
    console.log(typeof question)
    document.getElementById("note").style.top = notePositions[question];
}
askQuestion()
// const notes = [
//     ["E3","F3","F3#","G3","G3#"],
//     ["B3","C3","C3#","D3","D3#"],
//     ["G2",,"A3","A3#",],
//     ["D2",,"E2","F2",],
//     ["A2",,"B2","C2",],
//     ["E1","F1",,"G1",]
// ]


