import Head from 'next/head'
import { withCoverLayout, withLayout } from '../Layout/Layout'
import { Htag } from '../components/Htag/Htag';
import styles from './pages.module.css'
import { DirectionItem } from '../components/DirectionItem/DirectionItem';
import { CallBackBlock } from '../components/CallBackBlock/CallBackBlock';
import cn from 'classnames'
import React from 'react';

function About(): JSX.Element {
  return (
    <>
    <Head>
      <title>О нас - Rokkit</title>
    </Head>
      <div className={cn(styles.heading, styles.headBlock)}>
        <Htag tag='h1'>Кто мы?</Htag>
        <p>
          Мы команда разработчиков, специализирующихся на web-решениях, направленных помочь нашим клиентам добиться успеха.
        </p>
        <p>
          Наша организация осуществляет деятельность в области информационных технологий в части оказываемых услуг разработка программного обеспечения, сайтов, интернет магазинов.
        </p>
        <p>
          Наша миссия - помочь своим клиентам зарабатывать больше с помощью digital-решений. 
        </p>
      </div>
      <div className={styles.block}>
        <Htag tag='h2'>Цель и ценности</Htag>
        <p className={styles.subtitle}>
          Компания Rokkit существует для того, чтобы предоставлять нашим клиентам исключительный сервис и работу, дающую впечатляющие результаты. Наши ценности, приведенные ниже, поддерживают нашу цель.
        </p>
        <div className={styles.blockWrapper}>
          <div className={styles.valuesCard}>
            <h3>
              Вся обратная связь - полезная информация
            </h3>
            <p>
              Мы рассматриваем обратную связь как ценную информацию и активно собираем её. Это помогает нам учиться, расти и улучшать нашу работу.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <h3>
              Превратите неудачи в возможности роста
            </h3>
            <p>
              Ошибки, потери и упущенные возможности — это шансы на улучшение. Мы используем полученные уроки, чтобы в следующий раз добиться лучшего результата.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <h3>
              Работать на долгосрочную перспективу
            </h3>
            <p>
              Мы терпеливо работаем для достижения достойных результатов. Мы не ищем коротких путей и всегда будем уделять особое внимание нашей честности и отношениям с клиентами и поставщиками.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <h3>
              Быть инициативным
            </h3>
            <p>
              Мы сконцентрированы на том, на что можем повлиять, и действуем безотлагательно. Мы берем на себя ответственность и не спешим обвинять других.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.blockCover}>
        <Htag tag='h2'>Направления работы</Htag>
        <div className={styles.directionswrapper}>
          <DirectionItem type='1'>
            Измените дизайн существующего веб-сайта, создайте его с нуля или перенесите свой интернет-магазин на другую платформу.
          </DirectionItem>
          <DirectionItem type='2'>
            Улучшите показатели продаж, получайте аналитику, и оптимизируйте бизнес-процессы отделов с помощью современной системы.
          </DirectionItem>
          <DirectionItem type='3'>
            Есть идея? Воплотим вашу идею в дизайн-макете вашего нового сайта, веб и мобильного приложения.
          </DirectionItem>
        </div>
      </div>
      <div className={styles.block}>
        <Htag tag='h2'>Как мы работаем</Htag>
        <div className={styles.actionsWrapper}>
          <div className={styles.actionsItem}>
            <img src="../static/img/action-1.webp" alt="Проектирование и модель" />
            <h3>
              01 — Аналитика и аудит
            </h3>
            <p>
              Мы начинаем с изучения вашего бренда, рынка и аудитории. Мы проверяем ваш существующий цифровой опыт и разрабатываем четкую дорожную карту для достижения ваших целей.
            </p>
          </div>
          <div className={styles.actionsItem}>
            <img src="../static/img/action-2.webp" alt="Проектирование и модель" />
            <h3>
              02 — Проектирование и модель
            </h3>
            <p>
              Мы уделяем особое внимание дизайну вашего сайта и пользовательскому опыту, изучая запоминающиеся способы продемонстрировать ваш бренд и продукты, при этом делая большую ставку на удобстве использования.
            </p>
          </div>
          <div className={styles.actionsItem}>
            <img src="../static/img/action-3.webp" alt="Разработка и внедрение" />
            <h3>
              03 — Разработка и внедрение
            </h3>
            <p>
              Мы превращаем проекты в код и реализуем функции и интеграции для достижения необходимой функциональности. Мы тщательно тестируем, чтобы гарантировать качество.
            </p>
          </div>
          <div className={styles.actionsItem}>
            <img src="../static/img/action-4.webp" alt="Развертывание и оптимизация" />
            <h3>
              04 — Развертывание и оптимизация
            </h3>
            <p>
              Мы составляем наш контрольный список перед запуском, который включает в себя соображения по доступности, SEO и отслеживанию аналитики. Затем мы предлагаем поддержку после запуска.
            </p>
          </div>
        </div>
      </div>
      <CallBackBlock></CallBackBlock>
    </>
  );
}

export default withLayout(About);