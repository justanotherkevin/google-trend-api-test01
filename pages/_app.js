import '../styles/global.scss'

import Link from 'next/link'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
