"use strict";

module.exports = {
	encode: encode,
	decode: decode
};

var fs = require("fs");

function getFileContent(filePath, options){
	return new Promise((resolve, reject) => {
		var rs = fs.createReadStream(filePath, options);
		var content = "";
		
		rs.on("error", error => reject(error));
		
		rs.on("data", chunk => content += chunk);
		
		rs.on("end", _ => resolve(content));
	});
}

function loadAndSaveFileContent(inputFilePath, outputFilePath, callback, getFileContentParameters, writeFileParameters){
	outputFilePath = outputFilePath || inputFilePath;
	callback = callback || function(error){};
	
	var ps = new Promise((resolve, reject) => {
		getFileContent(inputFilePath, getFileContentParameters||{})
			.then(content => {
				fs.writeFile(outputFilePath, content, writeFileParameters||{}, error => {
					if(error){
						return reject(error) | callback(error);
					}
					
					return resolve() | callback();
				});
			})
			.catch(error => {
				return reject(error) | callback(error);
			});
	});
	
	if(callback){
		// supress UnhandledPromiseRejectionWarning
		ps.catch(error => {});
	}
	
	return ps;
}

function encode(inputFilePath, outputFilePath, callback){
	return loadAndSaveFileContent(inputFilePath, outputFilePath, callback, {encoding:"base64"});
}

function decode(inputFilePath, outputFilePath, callback){
	return loadAndSaveFileContent(inputFilePath, outputFilePath, callback, null, "base64");
}