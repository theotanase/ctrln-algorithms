function getMostFrequentSymbol(text) {
    let maxNumberOfSymbol = 0;
    let mostFrequentSymbol;
    const startIndex = "A".charCodeAt(0);
    const endIndex = "z".charCodeAt(0);
    const buckets = [];

    for (let i = startIndex; i <= endIndex; i++) {
        buckets[i] = 0;
    }

    for (let index = 0; index < text.length; index++) {
        const code = text.charCodeAt(index);
        buckets[code]++;
    }

    for (let index = startIndex; index <= endIndex; index++) {
        if(buckets[index] > maxNumberOfSymbol) {
            maxNumberOfSymbol = buckets[index];
            mostFrequentSymbol = String.fromCharCode(index);
        }
    }

    return mostFrequentSymbol;
}

console.log(getMostFrequentSymbol("ABRACADABRAjjjjjjjjjjjjjjjjjjjjj"));
