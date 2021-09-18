/**
 * The official ibanapi.com JS library
 * @author ibanapi.com
 * @since 18/09/2021
 */

function IBANApi() {
    var appURL = "https://api.ibanapi.com/v1/";
    /**
     * Validate the IBAN and get bank data
     * @param {string} iban 
     * @param {string} api_key 
     * @returns {Promise} a promise with validation data
     */
    this.validateIBAN = function(iban, api_key) {
        var vURL = appURL + "validate/" + iban + "?api_key=" + api_key
        return callURL(vURL).then(function(data) {
            return new Promise(rs => rs(data))
        })
    }

    /**
     * Validate the IBAN
     * @param {string} iban 
     * @param {string} api_key 
     * @returns {Promise} a promise with validation data
     */
    this.validateIBANBasic = function(iban, api_key) {
        var vURL = appURL + "validate-basic/" + iban + "?api_key=" + api_key
        return callURL(vURL).then(function(data) {
            return new Promise(rs => rs(data))
        })
    }

    /**
     * Get account balance
     * @param {string} iban 
     * @param {string} api_key 
     * @returns {Promise} a promise with balance data
     */
    this.getBalance = function(api_key) {
        var bURL = appURL + "balance?api_key=" + api_key
        return callURL(bURL).then(function(data) {
            return new Promise(rs => rs(data))
        })
    }

    this.callURL = (unique => url =>
        new Promise(rs => {
            const script = document.createElement('script');
            const name = `_jsonp_${unique++}`;

            if (url.match(/\?/)) {
                url += `&callback=${name}`;
            } else {
                url += `?callback=${name}`;
            }

            script.src = url;
            window[name] = json => {
                rs(json);
                script.remove();
                delete window[name];
            };

            document.body.appendChild(script);
        }))(0);

    return {
        validateIBAN: this.validateIBAN,
        validateIBANBasic: this.validateIBANBasic,
        getBalance: this.getBalance
    }
}