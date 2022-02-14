const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      textShadow: {
        "level-1":
          "0px 1px 2px rgba(0, 52, 102, 0.12), 0px 1px 3px rgba(0, 52, 102, 0.06);",
        "level-2":
          "0px 2px 4px rgba(0, 52, 102, 0.1), 0px 3px 6px rgba(0, 52, 102, 0.05);",
      },
      minWidth: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      minHeight: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      maxWidth: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      maxHeight: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      width: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
            list[index + "%"] = `${index}%`;
          }
          return list;
        })(),
      },
      height: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
            list[index + "%"] = `${index}%`;
          }
          return list;
        })(),
      },
      borderRadius: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 100; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      colors: (theme) => {
        return {
          dark: {
            DEFAULT: "#1B1B1B",
            l1: "#222222",
          },
          transparent: "transparent",
          current: "currentColor",
          "brand-blue": "#00BBFF",
          gray: {
            2: "#A8C3E8",
            6: "#E8F2FE",
            9: "#6F8EBD",
            10: "#5E7BAA",
            11: "#4D6896",
            12: "#3E5680",
            14: "#263755",
            15: "#1C2A42",
            17: "#0E1623",
            18: "#05090E",
            50: "#fafcff",
            100: "#F0F7FF",
            150: "#E8F2FE",
            200: "#E0ECFD",
            250: "#CEE0F8",
            300: "#A8C3E8",
            350: "#95B2DD",
            400: "#82A0CE",
            450: "#6F8EBD",
            500: "#5E7BAA",
            550: "#4D6896",
            600: "#3E5680",
            650: "#31456A",
            700: "#263755",
            750: "#1C2A42",
            800: "#0E1623",
            850: "#090F17",
            900: "#05090E",
            950: "#030407",
            1000: "#010202",
          },
          aqua: "#00BBFF",
        };
      },
      fontWeight: (theme) => {
        const list = {};
        for (let index = 0; index < 9; index++) {
          list[`${index}00`] = `${index}00`;
        }
        return list;
      },
      fontFamily: {},
      fontSize: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 100; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      boxShadow: (theme) => ({
        ...theme.boxShadow,
        "level-1":
          "0px 1px 3px rgba(0, 52, 102, 0.06), 0px 1px 2px rgba(0, 52, 102, 0.12);",
        "level-2":
          "0px 3px 6px rgba(0, 52, 102, 0.05), 0px 2px 4px rgba(0, 52, 102, 0.1);",
        "level-3":
          "0px 2px 6px rgba(0, 52, 102, 0.06), 0px 8px 20px rgba(0, 52, 102, 0.1);",
        "level-4":
          "0px 5px 10px rgba(0, 52, 102, 0.03), 0px 15px 25px rgba(0, 52, 102, 0.1);",
        "level-5": "0px 20px 40px rgba(0, 52, 102, 0.15);",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[`.left-${index}`] = {
              left: `${index}px`,
            };
            list[`.right-${index}`] = {
              right: `${index}px`,
            };
            list[`.top-${index}`] = {
              top: `${index}px`,
            };
            list[`.bottom-${index}`] = {
              bottom: `${index}px`,
            };

            list[`.-left-${index}`] = {
              left: `-${index}px`,
            };
            list[`.-right-${index}`] = {
              right: `-${index}px`,
            };
            list[`.-top-${index}`] = {
              top: `-${index}px`,
            };
            list[`.-bottom-${index}`] = {
              bottom: `-${index}px`,
            };
          }

          list[`.left-auto`] = {
            left: `auto`,
          };
          list[`.right-auto`] = {
            right: `auto`,
          };
          list[`.top-auto`] = {
            top: `auto`,
          };
          list[`.cb-auto`] = {
            bottom: `auto`,
          };

          for (let index = 0; index < 500; index++) {
            // for line height
            list[`.lh-${index}`] = {
              "line-height": `${index}px`,
            };
            // for pending
            list[`.p-${index}`] = {
              "padding-left": `${index}px`,
              "padding-right": `${index}px`,
              "padding-top": `${index}px`,
              "padding-bottom": `${index}px`,
            };
            list[`.pl-${index}`] = {
              "padding-left": `${index}px`,
            };
            list[`.pr-${index}`] = {
              "padding-right": `${index}px`,
            };
            list[`.pt-${index}`] = {
              "padding-top": `${index}px`,
            };
            list[`.pb-${index}`] = {
              "padding-bottom": `${index}px`,
            };
            list[`.px-${index}`] = {
              "padding-left": `${index}px`,
              "padding-right": `${index}px`,
            };
            list[`.py-${index}`] = {
              "padding-top": `${index}px`,
              "padding-bottom": `${index}px`,
            };

            // for margin
            list[`.m-${index}`] = {
              "margin-left": `${index}px`,
              "margin-right": `${index}px`,
              "margin-top": `${index}px`,
              "margin-bottom": `${index}px`,
            };
            list[`.ml-${index}`] = {
              "margin-left": `${index}px`,
            };
            list[`.mr-${index}`] = {
              "margin-right": `${index}px`,
            };
            list[`.mt-${index}`] = {
              "margin-top": `${index}px`,
            };
            list[`.mb-${index}`] = {
              "margin-bottom": `${index}px`,
            };
            list[`.mx-${index}`] = {
              "margin-left": `${index}px`,
              "margin-right": `${index}px`,
            };

            list[`.-ml-${index}`] = {
              "margin-left": `-${index}px`,
            };
            list[`.-mr-${index}`] = {
              "margin-right": `-${index}px`,
            };
            list[`.-mt-${index}`] = {
              "margin-top": `-${index}px`,
            };
            list[`.-mb-${index}`] = {
              "margin-bottom": `-${index}px`,
            };
          }

          list[".w-fit"] = {
            width: "fit-content",
          };
          list[".h-fit"] = {
            height: "fit-content",
          };

          return list;
        })(),
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
