import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

const Login = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          Signed In as {session?.user?.email} <br />
          <Button variant="contained" color="error" onClick={() => signOut()}>
            Sign out
          </Button>
        </>
      ) : (
        <>
          <h1>Please Log In</h1>
          <br />
          <Button variant="contained" color="success" onClick={() => signIn()}>
            Sign in
          </Button>
        </>
      )}
    </>
  );
};

export default Login;
