module.exports = {
	resources: [{
		name: 'terminationInquiry',
		root: 'TerminationInquiryRequest',
		sandbox: 'https://sandbox.api.mastercard.com/fraud/merchant/v1/termination-inquiry',
		production: 'https://api.mastercard.com/fraud/merchant/v1/termination-inquiry'
	},
	{
		name: 'terminationInquiryV2',
		root: 'TerminationInquiryRequest',
		sandbox: 'https://sandbox.api.mastercard.com/fraud/merchant/v1/termination-inquiry',
		production: 'https://api.mastercard.com/fraud/merchant/v1/termination-inquiry'
	},
	{
		name: 'terminationInquiryHistory',
		root: 'TerminationInquiryRequest',
		sandbox: 'https://sandbox.api.mastercard.com/fraud/merchant/v1/termination-inquiry',
		production: 'https://api.mastercard.com/fraud/merchant/v1/termination-inquiry'
	},
	{
		name: 'terminationInquiryHistoryV2',
		root: 'TerminationInquiryRequest',
		sandbox: 'https://sandbox.api.mastercard.com/fraud/merchant/v1/termination-inquiry',
		production: 'https://api.mastercard.com/fraud/merchant/v1/termination-inquiry'
	}]
};