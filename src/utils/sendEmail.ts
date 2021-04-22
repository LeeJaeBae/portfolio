import dotenv from 'dotenv';
import Mailgun from 'mailgun-js';
dotenv.config();

const mailGunClient = new Mailgun({
	apiKey: process.env.MAILGUN_API_KEY || '',
	domain: 'sandbox9de20ebd27b245a2a2de14eacdef8840.mailgun.org',
});

const sendEmail = (subject: string, html: string) => {
	console.log('test');
	const emailData = {
		from: 'LeeJaewon <nea4182@gmail.com>',
		to: 'nea4182@gmail.com',
		subject,
		html,
	};
	return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
	const emailSubject = `${fullName} 님, 이메일을 인증해주세요.`;
	const emailBody = `이메일을 인중하시려면 <a href="http://number.com/verification/${key}/">here</a> 를 클릭해주세요.`;
	return sendEmail(emailSubject, emailBody);
};
