import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { emailTemplate } from 'utils/emailTemplate'

export default async function Contact(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { name, email, message } = JSON.parse(req.body)

    const transporter = await nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
      secure: true,
    })

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error)
          reject(error)
        } else {
          console.log('Server is ready to take our messages')
          resolve(success)
        }
      })
    })

    const mailData = {
      from: email,
      to: process.env.MAIL_RECEIVE,
      subject: `Portfolio | Message`,
      text: message,
      html: emailTemplate(message, email, name),
    }

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          console.log(info)
          resolve(info)
        }
      })
    })

    return res
      .status(200)
      .json({ status: 200, message: 'Le mail a été envoyé avec succès !' })
  } catch (e) {
    return res
      .status(500)
      .json("Une erreur est survenue lors de l'envoi du mail.")
  }
}
