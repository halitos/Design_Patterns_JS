class Mortgage {
    constructor(name) {
        this.name = name;

        this.bank = new Bank();
        this.credit = new Credit();
        this.background = new Background();
    }

    applyFor(amount) {
        var result = "approved";

        if (!this.bank.verify(this.name, amount)) {
            result = "denied";
        } else if (!this.credit.get(this.name)) {
            result = "denied";
        } else if (!this.background.check(this.name)) {
            result = "denied";
        }

        return `${this.name} has been ${result} for a ${amount} mortgage`;
    }
}

class Bank {
    verify(name, amount) {
        // complex logic here
        return true;
    }
}

class Credit {
    get(name) {
        // complex logic here
        return true;
    }
}

class Background {
    check(name) {
        // complex logic here
        return true;
    }
}

function run() {
    var mortgage = new Mortgage("Jim Bobson");
    var result = mortgage.applyFor("£200,000");
    console.log(result);
}

run();