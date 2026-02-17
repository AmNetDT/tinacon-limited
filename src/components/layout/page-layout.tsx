"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import TopBar from "../common/top-bar";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  showTopBar?: boolean;
  className?: string;
}

/**
 * Main page layout component with header, footer, and optional top bar
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  showTopBar = true,
  className = "",
}) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <div className={`antialiased bg-body text-body font-body ${className}`}>
        <div className="relative">
          <Image
            className="absolute top-4 left-0 md:top-10 md:left-20 z-0"
            src="/images/layer-blur.svg"
            alt=""
            width={200}
            height={200}
          />
          {showTopBar && <TopBar />}
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
