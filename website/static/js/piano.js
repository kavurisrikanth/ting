document.onload = go();

function go() {
    drawPianoSection();
}

function drawWhiteKey() {
    let white = document.createElement('li');
    white.setAttribute('class', 'white');
    return white;
}

function drawNonFirstWhiteKey() {
    let white = drawWhiteKey();
    markAsNonFirst(white);
    return white;
}

function drawStartKey() {
    let white = drawWhiteKey();
    markAsStart(white);
    return white;
}

function markAsNonFirst(white) {
    white.className += ' non-first-key';
}

function markAsStart(white) {
    white.className += ' start-key';
}

function drawBlackKey() {
    let black = document.createElement('li');
    black.setAttribute('class', 'black');
    return black;
}

function drawPianoPattern(keysList) {
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawNonFirstWhiteKey());
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawNonFirstWhiteKey());

    keysList.appendChild(drawWhiteKey());
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawNonFirstWhiteKey());
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawNonFirstWhiteKey());
    keysList.appendChild(drawBlackKey());
    keysList.appendChild(drawNonFirstWhiteKey());
}

function drawPianoSection() {
    let pianoDiv = document.querySelector('.piano-div');
    let optionsDiv = document.createElement('div');
    optionsDiv.setAttribute('class', 'options-div');
    optionsDiv.innerHTML += '<p>Options here.</p>';
    pianoDiv.appendChild(optionsDiv);

    let keysDiv = document.createElement('div');
    let keysList = document.createElement('ul');

    keysList.appendChild(drawStartKey());
    drawPianoPattern(keysList);
    keysList.appendChild(drawWhiteKey());
    drawPianoPattern(keysList);
    keysList.appendChild(drawWhiteKey());
    drawPianoPattern(keysList);

    keysDiv.appendChild(keysList);

    pianoDiv.style.backgroundColor = '#6b6565';
    pianoDiv.appendChild(keysDiv);
}