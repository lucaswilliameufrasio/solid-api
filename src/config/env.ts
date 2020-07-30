export = {
  mailProviderHost: process.env.MAIL_PROVIDER_HOST || '127.0.0.1',
  mailProviderPort: process.env.MAIL_PROVIDER_PORT || 25,
  mailProviderUser: process.env.MAIL_PROVIDER_USER || 'postmaster',
  mailProviderPass: process.env.MAIL_PROVIDER_PASS || ''
}
