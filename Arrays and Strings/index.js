word = new Array();

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const highlightCharacter = id => {
    return sleep(1000).then(v => {
        document.querySelector(`#${id}`).classList.add('highlight');
    });
}

const clearContainer = container => {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

// Pure function as we are not modifying the contents and the return is the same
const isUnique = async word => {
    characters = new Set();
    const outputContainer = document.querySelector('#is-unique-output');
    clearContainer(outputContainer);

    for(let i = 0; i < word.length; i++) {
        const c = word[i];
        const id = `${c}-${i}`;
        await highlightCharacter(id);
        if(characters.has(c)) {
            outputContainer.innerHTML = 'Is unique: False';
            return;
        }

        characters.add(c);
    }

    output.innerHTML = 'Is unique: True';
}

async function checkIsUnique() {
    const word = document.querySelector('#is-unique-input').value;
    
    // display the words 
    let visualContainer = document.querySelector('#is-unique-visual');
    clearContainer(visualContainer);

    for (let i = 0; i < word.length; i++) {
        const span = document.createElement('span');
        const c = word[i];
        const id = `${c}-${i}`;
        span.id = id;
        span.innerHTML = c;
        span.className = 'character';
        visualContainer.appendChild(span);
    }

    await isUnique(word);
}