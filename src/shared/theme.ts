interface Theme {
  colors: {
    pleo: string;
    lightPink: string;
    lightGrey: string;
  };
  sizing: {
    minHeight: string;
  };
  spacing: {
    mdPadding: string;
  };
  borderRadius: string;
}

const theme: Theme = {
  colors: {
    pleo: "#ff3366",
    lightPink: "rgb(249, 233, 238)",
    lightGrey: "#dcdcdc",
  },
  sizing: {
    minHeight: "350px",
  },
  spacing: {
    mdPadding: "15px",
  },
  borderRadius: "9px",
};

export default theme;
