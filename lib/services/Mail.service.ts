import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ashly.koepp@ethereal.email',
        pass: 'vs5eevcxP1NhAPUMYx'
    }
});
export const SendEmail = async(name:string, email:string, token:string) => {
    const info = await transporter.sendMail({
        from: 'Pawanofficial02@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Forget Password", // Subject line
        // text: "Hello world?", // plain text body
        html: `
        hey,${name},
        click here
        <a href="http://localhost:3000/update-password?token=${token}">click here</a>
        `, // html body
      });
    

}