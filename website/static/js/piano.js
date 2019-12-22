document.onload = go();

function go() {
    drawPianoSection();
}

function drawWhiteKey(first) {
    let white = document.createElement('li');
    white.setAttribute('class', 'white' + (first ? '' : ' non-first-key'));
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
    let optionsDiv = document.createElement('div');
    optionsDiv.innerHTML += '<p>Options here.</p>';
    pianoDiv.appendChild(optionsDiv);

    let keysDiv = document.createElement('div');
    let keysList = document.createElement('ul');

    drawPianoPattern(keysList);
    drawPianoPattern(keysList);
    drawPianoPattern(keysList);

    keysDiv.appendChild(keysList);
    pianoDiv.appendChild(keysDiv);
}