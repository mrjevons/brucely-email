var UltraSES = require('ultrases');
var AWS = require('ultrases/node_modules/aws-sdk');
const pug = require('pug');

// configuration for SES
AWS.config.update({
	accessKeyId: 'AKIAJEKPO5HTULSW5LSQ',
	secretAccessKey: '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',
	region: 'us-west-2'
});

// declare mailer with SES
var mailer = new UltraSES({
	sdk: AWS,
	defaults: {from: 'Zing <kudushinichi_0328@hotmail.com>'}
});


// declare email with TO, SUBJECT
var email = {to: 'jev.zing@gmail.com', subject: 'Second Test with Jade/Pug'};

/** configure pre-set email and send out email with CONTENT **/
// mailer.sendText(email, 'Test #1 from AWS SES', function(err){
// 	if(err) throw err;
// 	console.log('email sent!');
// });

// declare jade/pug template
var template = {file: 'email-template/template_jade.jade', locals: { name: 'Jevons'}};

// send out the email with template
mailer.sendTemplate(email, template, function(err) {
	if(err) throw err;
	console.log('compiled template email sent!');
})