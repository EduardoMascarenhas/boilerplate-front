import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

interface LayoutProps {
    children: React.ReactNode;
    title?: string; // Optional title prop
    description?: string; // Optional description prop
}


const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {


    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
            className={`page ${geistSans.variable} ${geistMono.variable}`}
        >
            {children}
        </div>
    </>;
};

export default Layout;

