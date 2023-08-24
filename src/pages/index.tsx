import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Typography variant='h1' component='div'>Credit Zen</Typography>
      </div>
    </main>
  )
}
