import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useSession } from "next-auth/react";
import Login from "@/components/login";
import { Box } from "@mui/material";
import Dashboard from "./dashboard";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "90vh"
          }}
        >
          {session && (
            <>
              <SideMenu />
              <Dashboard />
            </>
          )}
          <Login />
        </Box>
      </main>
    </>
  );
}
