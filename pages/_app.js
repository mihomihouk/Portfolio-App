import { ScopedCssBaseline } from '@mui/material'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ScopedCssBaseline>
      <Component {...pageProps} />
    </ScopedCssBaseline>
    )
}

export default MyApp
