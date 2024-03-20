import Head from 'next/head'
import { withCoverLayout } from '../Layout/Layout'
import { CallButton } from '../components/CallButton/CallButton';
import { CoverHtag } from '../components/CoverHtag/CoverHtag';
import React from 'react';

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
        <title>Rokkit - заказать внедрение CRM, разработку сайтов и интернет-магазинов</title>
      </Head>
      <CoverHtag>Улучшаем бизнес с помощью уникального плана роста, тщательного анализа рынка и современной разработки, включая внедрение CRM систем</CoverHtag>
      <CallButton appearance='white' arrow>Свяжитесь с нами</CallButton>
    </>
  ); 
}

export default withCoverLayout(Home);