import { ScopedCssBaseline } from '@mui/material'
import '../styles/globals.css'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { RecoilRoot } from "recoil"
import Auth from "../src/context/Auth"

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
        <ScopedCssBaseline>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Auth>
              <Component {...pageProps} />
            </Auth>
          </LocalizationProvider>
        </ScopedCssBaseline>
    </RecoilRoot>
    )
}

export default MyApp
