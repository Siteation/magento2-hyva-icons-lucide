module.exports = {
  plugins: [
    {
      name: "preset-default",
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
