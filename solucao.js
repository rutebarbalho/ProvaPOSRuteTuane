var fs = require('fs')

main();

function main() {
	var nomeArquivo = process.argv[2];
	var n;

	var e = lerEntrada(nomeArquivo);
	if (e == 'json'){
		lerJson(nomeArquivo)
	}
	if (e == 'csv'){
		lerCsv(nomeArquivo)
	}
	if (e == 'xml'){
		lerXML(nomeArquivo)
	}

}

function lerEntrada(nomeArquivo){
	var index = nomeArquivo.lastIndexOf(".")
	var extensao = nomeArquivo.substring(index + 1, nomeArquivo.length);
	return extensao;
}

function lerCsv(nomeArquivo){
	var csv = require('csv-string')
	var arquivo = __dirname + '/' + nomeArquivo;
	fs.readFile(arquivo, 'utf8', (err, data) => {
		n = csv.parse(data);
		Intervalos(n)
	})
}
function lerXML(nomeArquivo) {
	var arquivo = __dirname + '/' + nomeArquivo;
	var n = [];
	var xmlParser = require('xml2js').parseString;

	fs.readFile(nomeArquivo, function(err, data) {
		xmlParser(data, function(err, n) {
			Intervalos(n);
		});
	})
}
function lerJson(nomeArquivo) {
	var json = require(__dirname + '/' + nomeArquivo);
	console.log(json);
	var fs = require("fs");
	console.log(json[0].numeros);
	var n = json[0].numeros.split(",");
	Intervalos(n)
}
function Intervalos(n) {
	var grupo = [];
	var grupos = [];
	for (var x=0; x<n.length; x++){
		if(grupo.length == 0) grupo.push(n[x])
		else if(n[x] - 1 == n[x-1]) grupo.push(n[x])
		else{
			grupos.push(grupo)
			grupo = []
			grupo.push(n[x])
		}
	}
	var intervalo = [];
	var numInicial = n[0];
	console.log(grupo);
	for(i=0; i < n.length; i++)	{
		// var grupo = grupos[i];
		if(grupo.length == 1) intervalo.push("[" + numInicial + "]")
		else intervalo.push("[" + grupo[0] + "-" + grupo[grupo.length-1] + "]")
	}
	salvar_arquivo("./intervalos.json", intervalo)
}

function salvar_arquivo(arq, intervalo) {
	fs.writeFile(arq, intervalo, function (err) {
		if (err) return console.log(err);
		console.log('Arquivo salvo');
	})
}
