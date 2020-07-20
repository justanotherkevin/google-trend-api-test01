import '../styles/main.scss'
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';

if (typeof window !== 'undefined') {
  // window.$ = $;
  // window.jQuery = $;
  // require('materialize-css');
  require ('materialize-css/dist/js/materialize.min.js')
}
import Link from 'next/link'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (

    <Component {...pageProps} />
  )
}
