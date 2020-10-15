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