var UltraSES = require('ultrases');
var AWS = require('ultrases/node_modules/aws-sdk');
AWS.config.update({
	accessKeyId: 'AKIAJEKPO5HTULSW5LSQ',
	secretAccessKey: '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',
	region: 'us-west-2'
});


var mailer = new UltraSES({
	sdk: AWS,
	defaults: {from: 'Zing <kudushinichi_0328@hotmail.com>'}
});



var email = {to: 'jev.zing@gmail.com', subject: 'First SES'};
mailer.sendText(email, 'Test #1 from AWS SES', function(err){
	if(err) throw err;
	console.log('email sent!');
});