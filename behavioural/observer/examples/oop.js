class Click {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(function(item) {
            if (item !== fn) {
                return item;
            }
        });
    }

    fire(o, thisObj) {
        var scope = thisObj;
        this.observers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}

function run() {
    var clickHandler = function(item) {
        console.log(`Fired: ${item}`); 
    }

    var click = new Click();
 
    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
}

run();