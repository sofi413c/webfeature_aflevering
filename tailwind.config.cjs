module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      p_grey: "#858585",
      p_mild_grey: "#D9D9D9",
      p_light_grey: "#ECECEF",
      s_black: "#292929",
      s_brown: "#735039",
      s_olive: "#747163",
      s_beige: "#ECDEB5",
      s_yellow: "#FCFF54",
      s_turquoise: "#9DE6DA",
      s_white: "#FFFFFF",
      s_jord: "#DD5023",
      t_true_black: "#000000",
    },

  
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
