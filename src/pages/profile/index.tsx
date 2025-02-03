import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useAuth } from "@/apollo/auth-context";
import { useEffect } from "react";
import ProtectedRoute from "@/components/protectedRoute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Profile() {
  const auth = useAuth();
  useEffect(() => {
    console.log('passei aqui profile')
  }, [])
  return (
    <ProtectedRoute>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <h1>Olá {auth.user?.name}</h1>
      </div>
    </ProtectedRoute>
  );
}
