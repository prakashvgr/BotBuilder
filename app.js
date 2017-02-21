var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();

server.listen( process.env.port || process.env.PORT || 3978, function() {
	console.log('%s Listinging to %s', server.name, server.url);
});

var MICROSOFT_APP_ID = process.env.MICROSOFT_APP_ID || '1e834cae-0d7e-4c99-b7da-ab55bdd5d704';
var MICROSOFT_APP_PASSWORD = process.env.MICROSOFT_APP_PASSWORD || 'noYRUzVyHwgPCGDFgD2FXAb';

var connector = new builder.ChatConnector({
	appID: MICROSOFT_APP_ID,
	appPassword: MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/', function(session) {
	session.send('Hello World');
});