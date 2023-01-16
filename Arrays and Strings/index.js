// Pure function as we are not modifying the contents and the return is the same
const isUnique = word => {
    characters = new Set();
    for(const c of word) {
        if(characters.has(c)) {
            return false;
        }
        characters.add(c);
    }

    return true;
}

function checkIsUnique() {
    const word = document.querySelector('#is-unique-input').value;
    const unique = isUnique(word);
    document.querySelector('#is-unique-output').innerHTML = `Is unique: ${unique ? 'True' : 'False'}`;
}