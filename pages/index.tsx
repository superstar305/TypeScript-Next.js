import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from '@next/font/google'

import Layout from '../components/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title="Home | Next.js + TypeScript Example" />
    </>
  )
}
