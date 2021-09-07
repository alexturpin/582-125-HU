import "../styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold">Intégration multimédia 1</h1>
      <h4 className="text-2xl font-semibold mb-6">582-125-HU</h4>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
