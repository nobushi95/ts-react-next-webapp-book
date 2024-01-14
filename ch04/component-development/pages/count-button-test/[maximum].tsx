import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { CountButton } from '../../containers/CountButton';

type CountButtonTestProps = {
  maximum: number;
};

const CountButtonTest: NextPage<CountButtonTestProps> = (props) => {
  const { maximum } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log('render ButtonTest page');

  return (
    <div>
      <Head>
        <title>Test CountButton container</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CountButton label={`maximum: ${maximum}`} maximum={maximum} />
      </main>
    </div>
  );
};

interface CountButtonTestParam extends ParsedUrlQuery {
  maximum: string;
}

export const getStaticPaths: GetStaticPaths<
  CountButtonTestParam
> = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<
  CountButtonTestProps,
  CountButtonTestParam
> = async (context) => {
  return {
    props: {
      maximum: parseInt(context.params!['maximum']),
    },
  };
};

export default CountButtonTest;
