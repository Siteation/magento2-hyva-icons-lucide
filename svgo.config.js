module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "svg:class",
        elemSeparator: ":",
        preserveCurrentColor: false,
      },
    },
  ],
};
