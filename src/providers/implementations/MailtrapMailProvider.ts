import { IMailProvider, IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import env from '../../config/env'

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail
  private mailHost: string = env.mailProviderHost
  private mailPort: number = Number(env.mailProviderPort)
  private mailUser: string = env.mailProviderUser
  private mailPass: string = env.mailProviderPass

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: this.mailHost,
      port: this.mailPort,
      auth: {
        user: this.mailUser,
        pass: this.mailPass
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
