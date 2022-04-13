import type { AppProps } from "next/app";
import { useEffect } from "react";
import { isMobile } from "utils/isMobile";
import style from "config/index.module.scss";
import "./_app.scss";

const PAGE_MAX_WIDTH = parseFloat(style.pageMaxWidth) * 10 + 80;

function MyApp({ Component, pageProps }: AppProps) {
  function onResize() {
    const width = document.body.clientWidth;
    const fontSize = isMobile() ? (width / 400) * 10 : Math.min(1, width / PAGE_MAX_WIDTH) * 10;
    document.body.style.fontSize = fontSize + "px";
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
  return <Component {...pageProps} />;
}

export default MyApp;
