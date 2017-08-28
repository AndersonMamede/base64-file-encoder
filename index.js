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

function encode(inputFilePath, outputFilePath, callback){
	outputFilePath = outputFilePath || inputFilePath;
	callback = callback || function(error){};
	
	getFileContent(inputFilePath, (error, content) => {
		if(error){
			return callback(error);
		}
		
		fs.writeFile(outputFilePath, content, error => {
			error ? callback(error) : callback();
		});
	}, {encoding:"base64"});
}

function decode(inputFilePath, outputFilePath, callback){
	outputFilePath = outputFilePath || inputFilePath;
	callback = callback || function(error){};
	
	getFileContent(inputFilePath, (error, content) => {
		if(error){
			return callback(error);
		}
		
		fs.writeFile(outputFilePath, content, "base64", error => {
			error ? callback(error) : callback();
		});
	});
}