class LegacyApi {
    request(credentials, params) {
        return `Legacy API Response: Credentials: ${JSON.stringify(credentials)}, Params: ${params}`;
    }
}

class NewApi {
    constructor() {
        this.credentials = {};
    }
    authenticate(credentials) {  
        this.credentials = credentials;
    }
    fetchResponse(params) {
        return `New API Response: Credentials: ${JSON.stringify(this.credentials)}, Params: ${params}`;
    }
}

class ApiAdapter {
    request(credentials, params) {
        var api = new NewApi();
        api.authenticate(credentials);
        return api.fetchResponse(params);
    }
}

function run() {
    // Params
    var credentials = { username: 'Bob', password: '123' };
    var params = { bikeType: 'road' };

    // Legacy API
    var legacyApi = new LegacyApi();
    var legacyResponse = legacyApi.request(credentials, params);

    // New API using adapter
    var newApi = new ApiAdapter();
    var newApiResponse = newApi.request(credentials, params);
    
    console.log(legacyResponse);
    console.log(newApiResponse);
}

run();