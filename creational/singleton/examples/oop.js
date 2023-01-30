// singleton class
var Singleton = (function() {
    var instance;

    function createDbInstance() {
        var connection = new Object("I am the database instance");
        return connection;
    }

    return {
        getDbInstance: function() {
            if (!instance) {
                instance = createDbInstance();
            }
            return instance;
        }
    }
})();

function run() {
    var instance1 = Singleton.getDbInstance();
    var instance2 = Singleton.getDbInstance();

    console.log(`Same instance? ${instance1 === instance2}`);
}

run(); // OUTPUT = "Same instance? true"