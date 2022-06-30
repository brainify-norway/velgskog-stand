import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
