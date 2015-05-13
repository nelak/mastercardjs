# mastercardjs
JSON Wrapper to Mastercard's XML API
https://developer.mastercard.com/

```
'use strict';
var fs = require('fs');

var config = { 
	private_key: fs.readFileSync('MCKey.pem'),
	consumer_key: 'CONSUMER_KEY',
	env: 'sandbox'
};

var mastercard = require('mastercardjs')(config);

mastercard.merchantIdentifier.merchantId({
	Format: 'XML',
	MerchantId: 'STILLWATERSGENERALSTBRANSONMO'
}, function(error, response){
	console.log(JSON.stringify(response));
});
```
