export const appConfig =  () =>({ 
    port: parseInt(process.env.APP_PORT),
    host: process.env.APP_HOST
})