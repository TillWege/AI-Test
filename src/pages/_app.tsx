import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <MantineProvider forceColorScheme={"dark"}><Component {...pageProps} /></MantineProvider>;
};

export default api.withTRPC(MyApp);
