"use strict";

module.exports = {
	encode: encode,
	decode: decode
};

var fs = require("fs");

function getFileContent(filePath){
	return new Promise((resolve, reject) => {
		var rs = fs.createReadStream(filePath);
		var fileContent = "";
		
		rs.on("error", error => reject(error));
		
		rs.on("data", chunk => fileContent += chunk);
		
		rs.on("end", _ => resolve(fileContent));
	});
}

function encode(inputFilePath, outputFilePath){
	return new Promise((resolve, reject) => {
		var writer = fs.createWriteStream(outputFilePath || inputFilePath);
		
		writer.on("error", () => reject(error));
		
		writer.on("finish", () => resolve());
		
		fs.createReadStream(inputFilePath, {
			encoding: "base64"
		}).pipe(writer);
	});
}

function decode(inputFilePath, outputFilePath){
	return new Promise((resolve, reject) => {
		getFileContent(inputFilePath)
			.then(fileContent => {
				fs.writeFile(outputFilePath || inputFilePath, fileContent, "base64", error => {
					error ? reject(error) : resolve();
				});
			})
			.catch(error => reject(error));
	});
}