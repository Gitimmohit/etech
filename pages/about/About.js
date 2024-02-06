import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();

  const pageTitle = "About page";
  const pageDescription = "This is the description of your About page";
  const pageKeywords = "next.js, metadata, example";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <h1>Hello, this is the About page</h1>
        <p>Page-specific content goes here...</p>
      </div>
    </>
  );
};

export default About;
