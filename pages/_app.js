import { ScopedCssBaseline } from '@mui/material'
import '../styles/globals.css'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { RecoilRoot } from "recoil"



function MyApp({ Component, pageProps }) {
  return (
      <RecoilRoot>
        <ScopedCssBaseline>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Component {...pageProps} />
          </LocalizationProvider>
        </ScopedCssBaseline>
      </RecoilRoot>
    )
}

export default MyApp
