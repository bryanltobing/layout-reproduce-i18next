import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t("hello-world")}</div>
      {children}
    </div>
  );
};

export default appWithTranslation(MyApp);
