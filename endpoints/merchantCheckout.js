module.exports = {
	resources: [{
		name: 'merchantInitialization',
		root: 'MerchantInitializationRequest',
		sandbox: 'https://sandbox.api.mastercard.com/masterpass/v6/merchant-initialization/',
		production: 'https://api.mastercard.com/masterpass/v6/merchant-initialization/'
	}, {
		name: 'preCheckoutData',
		root: 'PrecheckoutDataRequest',
		sandbox: 'https://sandbox.api.mastercard.com/masterpass/v6/precheckout', 
		production: 'https://api.mastercard.com/masterpass/v6/precheckout'
	}]
};