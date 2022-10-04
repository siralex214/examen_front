import { AppProps } from "next/app";

import Head from "@components/Head";

import "remixicon/fonts/remixicon.css";
import GlobalStyle from "@components/Layout/GlobalStyle";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head
        title="coucou"
        description={
          "Next Boilerplate is a boilerplate of next and styled components, use this template to start your app."
        }
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
