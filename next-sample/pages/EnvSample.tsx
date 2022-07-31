import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
  // サーバーサイドで描画するときはtest1, クライアントサイドではundefined
  console.log('process.env.TEST', process.env.TEST)
  // test2
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>{process.env.TEST}</p>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

// getStaticPropsは常にサーバーサイドで実行されるので、すべての環境変数が参照できる
export const getStaticProps: GetStaticProps = async (context) => {
  // test1
  console.log('process.env.TEST', process.env.TEST)
  // test2
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return {
    props: {}
  }
}

export default EnvSample;