# 💳 IBAN API validation using ibanapi.com

The official javascript JSONP module for validating IBAN using the ibanapi.com public API<br/>
This module offers methods to validate IBAN (full and basic validation) wherein full validation will return the bank information alongside the basic validations. 

## How to use
* Get an [API Key](https://ibanapi.com/get-api) from the ibanapi.com website.
* Download the distribuation file and link it in your project or use public CDN
* You can now initialize & use the library as follows

* For full iban validation
```javascript
    //Get all the IBAN Information
    var ibanApi = IBANApi();
    ibanApi.validateIBAN("EE471000001020145685","API_KEY").then(function(data){
        console.log(data);
    });
```

* For basic iban validation
```javascript
    //Get all the basic IBAN Information
    var ibanApi = IBANApi();
    ibanApi.validateIBANBasic("EE471000001020145685","API_KEY").then(function(data){
        console.log(data);
    });
```

* To get the balance
```javascript
    //Get the account balance
    var ibanApi = IBANApi();
    ibanApi.getBalance("API_KEY").then(function(data){
        console.log(data);
    });
```

## Issue or suggestion
Please feel free to open a bug report or pull request to this repo.<br/>
or visit the [iban api website](https://ibanapi.com)