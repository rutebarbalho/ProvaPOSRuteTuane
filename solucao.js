var json = require(__dirname + '/numero.json');
var fs = require("fs");
console.log(json[0].numeros);
var n = json[0].numeros.split(",");
function Intervalos() {
	var n = JSON.parse(fs.readFileSync(json));
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
