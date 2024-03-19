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
        Мы команда разработчиков, специализирующихся на web-решениях, стремящихся помочь нашим клиентам добиться успеха.
        </p>
        <p>
        Наша миссия - помочь своим клиентам зарабатывать больше с помощью digital-решений. 
        </p>
      </div>
      <div className={styles.block}>
        <Htag tag='h2'>Цель и ценности</Htag>
        <p className={styles.subtitle}>
          Компания Barrel существует для того, чтобы предоставлять нашим клиентам исключительный сервис и работу, дающую впечатляющие результаты. Наши ценности, приведенные ниже, поддерживают нашу цель.
        </p>
        <div className={styles.blockWrapper}>
          <div className={styles.valuesCard}>
            <h3>
              Вся обратная связь является информацией
            </h3>
            <p>
              Мы рассматриваем обратную связь как ценную информацию и активно ее ищем. Это помогает нам учиться, расти и повышать производительность.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <h3>
              Превратите неудачи в возможности роста
            </h3>
            <p>
              Мы рассматриваем обратную связь как ценную информацию и активно ее ищем. Это помогает нам учиться, расти и повышать производительность.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <h3>
              Взгляните на долгосрочную перспективу
            </h3>
            <p>
              Мы терпеливо работаем для достижения достойных результатов. Мы не ищем коротких путей и всегда будем уделять приоритетное внимание нашей честности и отношениям.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <h3>
              Быть инициативным
            </h3>
            <p>
              Мы концентрируемся на том, на что можем повлиять, и действуем безотлагательно. Мы берем на себя ответственность и избегаем обвинять других.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.blockCover}>
        <Htag tag='h2'>Направления работы</Htag>
        <div className={styles.directionswrapper}>
          <DirectionItem type='1'>
            How can we support teams that want to join the ecosystem but don’t have the technical knowledge or resources?
          </DirectionItem>
          <DirectionItem type='2'>
            How can we support teams that want to join the ecosystem but don’t have the technical knowledge or resources?
          </DirectionItem>
          <DirectionItem type='3'>
            How can we support teams that want to join the ecosystem but don’t have the technical knowledge or resources?
          </DirectionItem>
        </div>
      </div>
      <div className={styles.block}>
        <Htag tag='h2'>Как мы работаем</Htag>
        <div className={styles.actionsWrapper}>
          <div className={styles.actionsItem}>
            <img src="../static/img/action-1.png" alt="" />
            <h3>
              01 — Открытие и стратегия
            </h3>
            <p>
            Мы начинаем с понимания вашего бренда, рынка и аудитории. Мы проверяем ваш существующий цифровой опыт и разрабатываем четкую дорожную карту для достижения ваших целей.
            </p>
          </div>
          <div className={styles.actionsItem}>
            <img src="../static/img/action-2.png" alt="" />
            <h3>
              01 — Открытие и стратегия
            </h3>
            <p>
            Мы начинаем с понимания вашего бренда, рынка и аудитории. Мы проверяем ваш существующий цифровой опыт и разрабатываем четкую дорожную карту для достижения ваших целей.
            </p>
          </div>
          <div className={styles.actionsItem}>
            <img src="../static/img/action-3.png" alt="" />
            <h3>
              01 — Открытие и стратегия
            </h3>
            <p>
            Мы начинаем с понимания вашего бренда, рынка и аудитории. Мы проверяем ваш существующий цифровой опыт и разрабатываем четкую дорожную карту для достижения ваших целей.
            </p>
          </div>
          <div className={styles.actionsItem}>
            <img src="../static/img/action-4.png" alt="" />
            <h3>
              01 — Открытие и стратегия
            </h3>
            <p>
            Мы начинаем с понимания вашего бренда, рынка и аудитории. Мы проверяем ваш существующий цифровой опыт и разрабатываем четкую дорожную карту для достижения ваших целей.
            </p>
          </div>
        </div>
      </div>
      <CallBackBlock></CallBackBlock>
    </>
  );
}

export default withLayout(About);