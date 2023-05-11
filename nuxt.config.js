// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-pino-log"],
  nuxtPinoLog: {
    // To disable all the logging
    disabled: false,

    // To disable client side loggging
    disableClientSide: false,

    // To disable server side logging
    disableServerSide: false,

    // Settings to determine if default handlers should be
    // registered for requests and errors respectively.
    // Set to `true` to skip request logging
    skipRequestMiddlewareHandler: true,
    // Set to `true` to skip error logging
    skipErrorMiddlewareHandler: true,

    // configure `pino-http`, see more https://github.com/pinojs/pino-http
    pinoHttpOptions: {
      serializers: {
        res: (res) => ({
          statusCode: res.statusCode,
        }),
      },
    },
  },
});
