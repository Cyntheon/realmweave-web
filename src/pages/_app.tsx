import {MantineProvider} from "@mantine/core";
import {AppProps} from "next/app";
import {DefaultSeo} from "next-seo";
import AppLayout from "../modules/app/AppLayout";

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Realmweave"
        defaultTitle="Realmweave"
        description="Worldbuilding made easy and social"
        openGraph={{
          title: "Realmweave",
          url: "https://realmweave.com/",
          description: "Worldbuilding made easy and social"
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "minimum-scale=1, initial-scale=1, width=device-width"
          }
        ]}
      />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionOptions={{
          key: "emotion"
        }}
        theme={{
          colorScheme: "dark"
        }}
      >
        <AppLayout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </AppLayout>
      </MantineProvider>
    </>
  );
}
