const dex = {};

dex["caligrafie"] = "Arta de a scrie";
dex["barza"] = "Pasare calatoare cu penele albe";


console.log(dex["caligrafie"]);




function getIndexByWord(word) {
    let index = 0;

    for (let i = 0; i < word.length; i++) {
        const letter = word.charAt(i);
        const asciiCode = letter.charCodeAt(0);
        index += asciiCode;
    }

    return index;
}

const arrayDictionary = [];

const barzaIndex = getIndexByWord("barza");
arrayDictionary[barzaIndex] = "Pasare calatoare cu penele albe";

const caligrafieIndex = getIndexByWord("caligrafie");
arrayDictionary[caligrafieIndex] = "Arta de a scrie";

console.log(arrayDictionary);
