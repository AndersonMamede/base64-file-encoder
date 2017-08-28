"use strict";

module.exports = {
	encode: encode,
	decode: decode
};

var fs = require("fs");

function getFileContent(filePath, callback, options){
	var content = "";
	var rs = fs.createReadStream(filePath, options||undefined);
	
	rs.on("error", error => callback(error, null));
	
	rs.on("data", chunk => content += chunk);
	
	rs.on("end", () => callback(null, content));
}

function encode(filePath, callback){
	getFileContent(filePath, (error, content) => {
		if(error){
			return callback(error);
		}
		
		fs.writeFile(filePath, content, error => {
			error ? callback(error) : callback();
		});
	}, {encoding:"base64"});
}

function decode(filePath, callback){
	getFileContent(filePath, (error, content) => {
		if(error){
			return callback(error);
		}
		
		fs.writeFile(filePath, content, "base64", error => {
			error ? callback(error) : callback();
		});
	});
}