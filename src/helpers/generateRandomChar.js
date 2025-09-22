const randomCharGenerator = (length = 3) => {
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '123467890';

    const characters = `${lowerCase}${upperCase}${numbers}`.split('');
    // console.log(characters);
    
    for (let i = characters.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const k = Math.floor(Math.random() * (i + 1)); 
        [characters[i], characters[j], characters[k]] = [characters[k], characters[j], characters[i]];
    }

    return characters.splice(0, length).join('');
}

export default randomCharGenerator;