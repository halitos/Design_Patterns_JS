class Iterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.items.length;
    }

    next() {
        return this.items[this.index++];
    }
}

function run() {
    const items = [1, "hello", false, 99.8];
    const iterator = new Iterator(items);
    while(iterator.hasNext()) {
        console.log(iterator.next());
    }
}

run();