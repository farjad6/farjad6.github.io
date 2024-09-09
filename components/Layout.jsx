import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {calculateYearsOfExperience} from "./helpers";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>{process.env.NEXT_PUBLIC_AUTHOR_NAME} | Portfolio</title>
        <meta
          name="description"
          content={`${process.env.NEXT_PUBLIC_AUTHOR_NAME} is a Full-stack web developer with ${calculateYearsOfExperience()}+ years of experience.`}
        />
        {/*TODO: update keywords from config or env*/}
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content={process.env.NEXT_PUBLIC_AUTHOR_NAME} />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
