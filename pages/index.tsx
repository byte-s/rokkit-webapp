import Head from 'next/head'
import Image from 'next/image'
import { withCoverLayout, withLayout } from '../Layout/Layout'
import { Htag } from '../components/Htag/Htag';
import { Button } from '../components/Button/Button';
import { CallButton } from '../components/CallButton/CallButton';
import { CoverHtag } from '../components/CoverHtag/CoverHtag';

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Rokkit - заказать внедрение CRM, разработку сайтов и интернет-магазинов</title>
      </Head>
      <CoverHtag>Улучшаем бизнес с помощью уникального плана роста, тщательного анализа рынка и современной разработки, включая внедрение CRM систем</CoverHtag>
      <CallButton appearance='white' arrow>Свяжитесь с нами</CallButton>
    </>
  ); 
}

export default withCoverLayout(Home);