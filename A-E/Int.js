let storage = {}

function store(rangesOfIntegers,colour) {
        storage[colour] = rangesOfIntegers;
        return storage;
}


console.log(store("34-78", "RED"));
console.log(store("31-41", "YELLOW"));
console.log(store("64-98", "GREEN"));
