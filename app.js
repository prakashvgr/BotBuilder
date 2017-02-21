var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();

server.listen( process.env.port || process.env.PORT || 8080, function() {
	console.log('%s Listinging to %s', server.name, server.url);
});

var connector = new builder.ChatConnector({
	appID: process.env.MICROSOFT_APP_ID,
	appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/', function(session) {
	session.send('Hello World');
});