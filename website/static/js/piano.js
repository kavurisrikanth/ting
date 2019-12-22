document.onload = go();

function go() {
    let pianoDiv = document.querySelector('.piano-div');
    pianoDiv.innerHTML = '<p>Paragraph written using JavaScript.</p>';
    drawPianoSection();

    console.log("Hello, world");
}

function drawWhiteKey(first) {
    let white = document.createElement('li');
    white.setAttribute('class', 'white' + (first ? '' : ' non_first_key'));
    return white;
}

function drawBlackKey() {
    let black = document.createElement('li');
    black.setAttribute('class', 'black');
    return black;
}

function drawPianoPattern(keysList) {
    keysList.appendChild(drawWhiteKey(true));
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawWhiteKey());
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawWhiteKey());

    keysList.appendChild(drawWhiteKey(true));
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawWhiteKey());
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawWhiteKey());
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawWhiteKey());
}

function drawPianoSection() {
    let pianoDiv = document.querySelector('.piano-div');
    let keysList = document.createElement('ul');

    drawPianoPattern(keysList);
    drawPianoPattern(keysList);
    drawPianoPattern(keysList);

    pianoDiv.appendChild(keysList);
}