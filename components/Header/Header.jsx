import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "/public/images/PFP_Logo.jpg";
import Container from "../Container";

function Header() {
  return(
    <>
      <Head>
        <title>Portraits For Paws</title>
        <link rel="icon" href="/images/PFP_Logo.jpg" /> { /* Update with proper favicon */ }
      </Head>
      <Container>
        <h1>Portraits For Paws</h1>
        <Image 
          src={logo} 
          alt="Portraits For Paws Logo"
          width="250px"
          height="250px"
        />
      </Container>
    </>
  )
}

export default Header;