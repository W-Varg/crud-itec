export default () => ({
  port: parseInt(process.env.PORT_SERVER, 10) || 3001,
  nodeEnv: process.env.NODE_ENVIROMENT || 'development',
  database: {
    user: process.env.HOST_USER_BASE_DATO,
    pass: process.env.HOST_PASSWORD_BASE_DATOS,
  },
});
