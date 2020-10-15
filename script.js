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
    for(let i=1; i<=5; i++){
        
            a += `<hr>`;   
    }
    document.getElementById("lines").innerHTML = a;
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
    G3: "0px",
    F3: "+5px",
    E3: "+10px",
    D3: "+15px",
    C3: "+20px",
    B3: "+25px",
    A3: "+30px",
    G2: "+35px",
    F2: "+40px",
    E2: "+45px",
    D2: "+50px",
    C2: "+55px",
    B2: "+60px",
    A2: "+65px",
    G1: "+70px",
    F1: "+75px",
    E1: "+80px",
}
const askQuestion = () => {
    let question;
    do {question = notes[getRandomNumber(0,5)][getRandomNumber(0,4)];
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


