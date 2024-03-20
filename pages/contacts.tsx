import Head from 'next/head'
import Image from 'next/image'
import { withLayout } from '../Layout/Layout'
import { Htag } from '../components/Htag/Htag';
import { Button } from '../components/Button/Button';
import { CallButton } from '../components/CallButton/CallButton';
import { CoverHtag } from '../components/CoverHtag/CoverHtag';
import { CallBackBlock } from '../components/CallBackBlock/CallBackBlock';
import cn from 'classnames'
import styles from './pages.module.css'
import React from 'react';



function Contacts(): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
        <title>Контакты - Rokkit</title>
      </Head>
      <div className={cn(styles.heading, styles.headBlock)}>
        <Htag tag='h1'>Контакты</Htag>
        <p>
          Расскажите нам о своем проекте - мы свяжемся с вами и введем в курс дела
        </p>
      </div>
      <div className={styles.contactsWrapper}>
          <div className={styles.formWrapper}>
            <div className={styles.formItem}>
              <label htmlFor="name">Имя</label>
              <input placeholder='Ваше имя' id='name' name="name" type="text" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="tel">Телефон</label>
              <input placeholder='Ваш телефон' id='tel' name="tel" type="text" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="">Организация</label>
              <input placeholder='Ваша организация' id='company' name="company" type="text" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="">Почта</label>
              <input placeholder='Ваша почта' id='mail' name="mail" type="text" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="">Какую услугу хотели бы получить?</label>
              <div className={styles.checkWrapper}>
                <label className={styles.check} htmlFor="">
                  <input type="checkbox" />
                  <span>Разработку сайта</span>
                </label>
                <label className={styles.check} htmlFor="">
                  <input type="checkbox" />
                  <span>Внедрение CRM</span>
                </label>
                <label className={styles.check} htmlFor="">
                  <input type="checkbox" />
                  <span>Разработку дизайна</span>
                </label>
                <label className={styles.check} htmlFor="">
                  <input type="checkbox" />
                  <span>Прочее...</span>
                </label>
              </div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="">Планируемый бюджет</label>
              <div className={styles.checkWrapper}>
                <label className={styles.check} htmlFor="">
                  <input type="radio" id="bot" name="drone" value="bot"/>
                  <span>Меньше 100 000 руб.</span>
                </label>
                <label className={styles.check} htmlFor="">
                  <input type="radio" id="top" name="drone" value="top"/>
                  <span>200 000 - 299 000 руб.</span>
                </label>
                <label className={styles.check} htmlFor="">
                  <input type="radio" id="low" name="drone" value="low"/>
                  <span>300 000 - 399 000 руб.</span>
                </label>
                <label className={styles.check} htmlFor="">
                  <input type="radio" id="sex" name="drone" value="sex"/>
                  <span>400 000 - 499 000 руб.</span>
                </label>
                <label className={styles.check} htmlFor="">
                  <input type="radio" id="sex" name="drone" value="sex"/>
                  <span>Больше 500 000 руб.</span>
                </label>
              </div>
            </div>
            <div className={cn(styles.formItem,styles.fullRow)}>
              <label htmlFor="">Имя</label>
              <textarea placeholder='Расскажите подробнее о вашем проекте' name="" id="" maxLength={5000}></textarea>
            </div>
            <div className={styles.fullRow}>
              <Button appearance='black'>Свяжитесь со мной</Button>
            </div>
          </div>
            <div className={styles.contacts}>
              <h2>Наша почта</h2>
              <a href="mailto:rokkitstudio@gmail.com">rokkitstudio@gmail.com</a>
              <h2>Наши соц. сети</h2>
              <a href="http://">VK</a>
              <a href="http://">Telegram</a>
              <h2>Наши контакты</h2>
              <p>Российская Федерация, Омская область, <br /> г. Омск, ул. Фурманова, 7В</p>
              <p>+79994589255</p>
              <h2>Реквизиты</h2>
              <p>ООО «РОККИТ»</p>
              <span>Юридический адрес</span>
              <p>644031, РОССИЯ, ОМСКАЯ ОБЛАСТЬ, Г.О. ГОРОД ОМСК, Г ОМСК, УЛ ЧЕРНОМОРСКАЯ, Д. 6</p>
              <span>ИНН/КПП</span>
              <p>5503274800/550301001</p>
              <span>ОГРН/ОГРНИП</span>
              <p>1245500003650</p>
              <span>Расчетный счет</span>
              <p>40702810010001582089</p>
              <span>Банк</span>
              <p>АО "ТИНЬКОФФ БАНК"</p>
              <span>ИНН банка</span>
              <p>7710140679</p>
              <span>БИК банка</span>
              <p>044525974</p>
              <span>Корреспондентский счет банка</span>
              <p>30101810145250000974</p>
            </div>
        </div>
    </>
  );
}

export default withLayout(Contacts);