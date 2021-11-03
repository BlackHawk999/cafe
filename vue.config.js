module.exports = {
  transpileDependencies: ["vuetify"],
  // scss: {
  //   additionalData: `
  //     @import "@/scss/main.scss";
  //   `,
  // },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/main.scss";
        `,
      },
    },
  },
};
