'use strict';

var crypto = require('crypto');
var fs = require('fs');
var request = require('request');
var xml2js = require('xml2js');
var path = require('path');
var endpoints = {};



var dir = fs.readdirSync(path.join(__dirname, '/endpoints'));
//TODO: improve this handler
dir.forEach(function(file){
	var components = file.split('.');
	delete components[components.length - 1];
	endpoints[components[0]] = require('./endpoints/' + components[0]);
});

function _callService(config, endpoint, qs, body, callback){
	var oauth = {
			signature_method: 'RSA-SHA1',
			consumer_key: config.consumer_key,
			private_key: config.private_key
		};

	if(!callback && body instanceof Function) {
		callback = body;
		body = null;
	}

	if(body){

		var builder = new xml2js.Builder({
				rootName: this.root
			});

		body = builder.buildObject(body);
		console.log(body);
		
		if(body !== ''){
			oauth.body_hash = crypto.createHash('sha1').update(body).digest('base64');
		}

		request.post({
			url: endpoint,
			oauth: oauth,
			qs: qs,
			body: body || ''
		}, function(err, response){
			if(err){
				callback(err);
			} else {
				if(response.body) {
					xml2js.parseString(response.body, callback);
				} else {
					callback(err, response.body);
				}
			}
		});

	} else {

		request.get({
			url: endpoint,
			oauth: oauth,
			qs: qs
		}, function(err, response){
			if(err){
				callback(err);
			} else {
				if(response.body) {
					xml2js.parseString(response.body, callback);
				} else {
					callback(err, response.body);
				}
			}
		});

	}

}

function init(config){
	//_config = config;
	var methods = {};
	for(var endpoint in endpoints) {

		methods[endpoint] = {};

		endpoints[endpoint].resources.forEach( function (resource){

			methods[endpoint][resource.name] = _callService.bind(resource, config, resource[config.env]);

		});

	}

	return methods;
}

module.exports = function(config){
	return init(config);
};


