class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}

const myHashMap = new HashMap();
myHashMap.put('a', 1);
console.log(myHashMap.get('a'));
myHashMap.remove('a');
console.log(myHashMap.get('a'));
