import type { NextApiRequest, NextApiResponse } from 'next'


export default function (req: { body: any }, res: any) {
    let nodemailer = require('nodemailer')
    require('dotenv').config()
    const PASSWORD = process.env.password
    const USERNAME = process.env.email

    console.log(USERNAME , PASSWORD);
    const mailData = {
        from: req.body.email,
        to: 'junaidejaz.111@gmail.com',
        subject: `Message From ${req.body.subject}`,
        text: req.body.message,
        html: `<div> ${req.body.name} <br/> ${req.body.message} <br/>
        ${req.body.phone }<br/>
        </div>`
       }

    const transporter = nodemailer.createTransport({
        port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
    secure: true,
    });


    transporter.sendMail(mailData, function (err: any, info: any) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
    res.status(200)
  }