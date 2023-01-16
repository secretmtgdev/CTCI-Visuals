word = new Array();

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const highlightCharacter = id => {
    return sleep(1000).then(v => {
        document.querySelector(`#${id}`).classList.add('highlight');
    });
}

// Pure function as we are not modifying the contents and the return is the same
const isUnique = async word => {
    characters = new Set();
    const output = document.querySelector('#is-unique-output');
    for(let i = 0; i < word.length; i++) {
        const c = word[i];
        const id = `${c}-${i}`;
        await highlightCharacter(id);
        if(characters.has(c)) {
            output.innerHTML = 'Is unique: False';
        }

        characters.add(c);
    }

    output.innerHTML = 'Is unique: True';
}

async function checkIsUnique() {
    const word = document.querySelector('#is-unique-input').value;
    
    // display the words 
    let visualContainer = document.querySelector('#is-unique-visual');
    while (visualContainer.firstChild) {
        visualContainer.firstChild.remove();
    }

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