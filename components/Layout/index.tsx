import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './HeaderBar/HeaderBar';
import Footer from './FooterBar/FooterBar';
import GlobalStyle from './GlobalStyle';
import SideBarLayout from './SideBarLayout/SideBarLayout';

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div style = {{height: '100vh'}}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle />
        <Header/>
        <SideBarLayout />
            {children}
        {/* <Footer /> */}
    </div>
)

export default Layout