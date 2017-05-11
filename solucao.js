var nomeArquivo = process.argv[2];
var n;
function lerEntrada(nomeArquivo){
	var index = nomeArquivo.lastIndexOf(".")
	var extensao = nomeArquivo.substring(index + 1, nomeArquivo.length);
	return extensao;
}
var e = lerEntrada(nomeArquivo);
if (e == 'json'){
	lerJson()
}
if (e == 'csv'){
	lerCsv()
}
if (e == 'xml'){
	lerXML()
}
function lerCsv(nomeArquivo){
	var fs = require('fs')
	var csv = require('csv-string')
	var arquivo = __dirname + '/' + nomeArquivo;
	var resultado;
	fs.readFile(arquivo, 'utf8', (err, data) => {
	    resultado = csv.parse(data);
		Intervalos()
})
	function lerXML(nomeArquivo, funcao) {
		var arquivo = __dirname + '/' + nomeArquivo;
		var n = [];
	    var fs = require('fs');
	    var xmlParser = require('xml2js').parseString;

	    fs.readFile(nomeArquivo, function(err, data) {
	        xmlParser(data, funcao);
				})
				Intervalos()
}
function lerJson(nomeArquivo) {
	var json = require(__dirname + '/' + nomeArquivo);
	console.log(json);
	var fs = require("fs");
	console.log(json[0].numeros);
	n = json[0].numeros.split(",");
	Intervalos()
}
function Intervalos() {
	var grupo = [];
	var grupos = [];
	for (var x=0; x<n.length; x++){
		if(grupo.length == 0) grupo.push(n[x])
		else if(n[x] - 1 == n[x-1]) conjunto.push(n[x])
		else{
			grupos.push(grupo)
			grupo = []
			grupo.push(n[x])
		}
	}
	var intervalo = [];
	var numInicial = n[0];
		for(i=0; i < n.length; i++)	{
		var grupo = grupos[i];
		if(grupo.length == 1) intervalo.push("[" + numInicial + "]")
		else intervalo.push("[" + grupo[0] + "-" + grupo[grupo.length-1] + "]")
			}
			salvar_arquivo("/intervalos.json", intervalo)
		}
function salvar_arquivo() {
	fs.writeFile('intervalos.json', JSON.stringify(intervalo), function (err) {
	if (err) return console.log(err);
	console.log('Arquivo salvo');
})
