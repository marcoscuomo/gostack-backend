export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },

  // host: 'smtp.mailtrap.io',
  // port: '2525',
  // secure: false,
  // auth: {
  //   user: '64002227d71c3f',
  //   pass: '35475d67d4183a',
  // },
  // default: {
  //   from: 'Equipe GoBarber <noreply@gobarber.com>',
  // },
};
