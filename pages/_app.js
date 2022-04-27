import { ScopedCssBaseline } from "@mui/material";
import "../styles/globals.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { RecoilRoot } from "recoil";
import Auth from "../src/context/Auth";

//styles
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#caa7f9",
    },
    secondary: {
      main: "#145439",
    },
  },
  components: {
    MuiTypography: {
      style: {
        fontFamily: "Poppins",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Auth>
              <Component {...pageProps} />
            </Auth>
          </LocalizationProvider>
        </ScopedCssBaseline>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
