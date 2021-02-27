import '../styles/global.css'

// Carrega uma vez a cada mudança de rota

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
