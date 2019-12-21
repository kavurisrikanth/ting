document.onload = go();

function go() {
    let pianoDiv = document.querySelector('.piano-div');
    pianoDiv.innerHTML = '<p>Paragraph written using JavaScript.</p>';
    drawPianoSection();

    console.log("Hello, world");
}

function drawPianoSection() {
    let pianoDiv = document.querySelector('.piano-div');
    pianoDiv.innerHTML = `
        <ul class="set">
            <li class="white b"></li>
            <li class="black as"></li>
            <li class="white a"></li>
            <li class="black gs"></li>
            <li class="white g"></li>
            <li class="black fs"></li>
            <li class="white f"></li>
            <li class="white e"></li>
            <li class="black ds"></li>
            <li class="white d"></li>
            <li class="black cs"></li>
            <li class="white c"></li>
        </ul>
    `;
}