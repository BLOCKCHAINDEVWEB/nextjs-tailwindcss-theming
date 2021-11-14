import { useState, useEffect } from 'react'
import Head from 'next/head'
import SelectMenus from '../components/SelectMenus'
import { useTheming } from '../lib/useTheming'

export default function Home() {
  const [theme, setTheme] = useTheming("theme", "light")

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next app theming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${theme}`}>
        <main>
          <div className="flex flex-col h-screen w-full items-center">
            <div className="m-auto ">
              <h1 className="text-lg text-accent font-semibold mb-5">
                Welcome to theming App!
              </h1>
              <SelectMenus
                theme={theme}
                setTheme={value => setTheme(value)}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
