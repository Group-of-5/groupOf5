import { useState } from 'react'
import Head from 'next/head'
import { generatePassword } from '../utils/password'

export default function Home() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)

  const handleSubmit = (e) => {
    e.preventDefault()
    setPassword(generatePassword(length))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <Head>
        <title>Password Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className=" text-5xl font-semibold text-blue-500">
           Generate Your Password
        </h1>

        <form className="mt-8" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-gray-700 ">Select Password Length:</span>
            <input
              type="number"
              min={4}
              max={64}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </label>
          <button type="submit" className=" border rounded-full bg-blue-500 hover:bg-blue-700 hover:text-white duration-200 ease-in-out px-4 py-2 mt-4">
            Generate Password
          </button>
        </form>

        {password && (
          <div className="mt-8">
            <p className="text-2xl font-bold">Generated Password:</p>
            <p className="text-lg">{password}</p>
          </div>
        )}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Mr.Sophisticated
      </footer>
    </div>
  )
}
