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
import React, { useState } from 'react';
import Link from 'next/link';
import { useNavigate } from 'react-router';
import { addLead } from '../interfaces/controller';

export interface FormProps {
  result: boolean;
  isChecked: boolean;
  callTime: any;
}
const serviceList = [
  { service: "Разработка сайта" },
  { service: "Внедрение CRM" },
  { service: "Разработка дизайна" },
  { service: "Прочее" }
];

const budgetList = [
  { budget: "Меньше 100 000 руб." },
  { budget: "200 000 - 299 000 руб." },
  { budget: "300 000 - 399 000 руб." },
  { budget: "400 000 - 499 000 руб." },
  { budget: "Больше 500 000 руб." }
];

function Contacts(): JSX.Element {
  let form;
  const [sendStatus, setSendStatus] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const [callServices, setCallServices] = useState(
    serviceList.map((service) => ({ ...service, isChecked: false }))
  );
  
  const [callBudget, setCallBudget] = useState(
    budgetList.map((budget) => ({ ...budget, isChecked: false }))
  );

  const onChangeCheckBox = (e: {
    target: { checked: boolean; value: React.SetStateAction<string> };
  }) => {
    const { value, checked: isChecked } = e.target;
    setCallServices((prev) =>
      prev.map((ct) => {
        if (ct.service === value) ct.isChecked = isChecked;
        return ct;
      })
    );
    console.log("radio", e.target.value);
    if (isChecked){
      
    }
  };

  const onChangeRadio = (e: {
    target: { checked: boolean; value: React.SetStateAction<string> };
  }) => {
    const { value, checked: isChecked } = e.target;
    setCallBudget((prev) =>
      prev.map((ct) => {
        if (ct.budget === value) ct.isChecked = isChecked;
        return ct;
      })
    );
    console.log("radio", e.target.value);
    if (isChecked){
      
    }
  };

  const addNewLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addLead({
      name,
      phone,
      company,
      email,
      details,
      callServices,
      callBudget
    });
    setSendStatus(true);
    form = <>babe</>;
    console.log("Заявка отправлена");
  };
  if (sendStatus) {
    form = <>es</>;
  } else {
    form = <>sex</>;
  }
  return (
    <>
      <Head>
        <title>Контакты - Rokkit</title>
      </Head>
      <div className={cn(styles.heading, styles.headBlock)}>
        <Htag tag='h1'>Контакты</Htag>
        <p>
          Расскажите нам о своем проекте - мы свяжемся с вами и введем в курс дела
        </p>
      </div>
      <div className={styles.contactsWrapper}>
        {
          sendStatus ?
            <>
              <div className={styles.formSended}>
                <h2>Ваша заявка отправлена!</h2>
                <div>Наш менеджер свяжется с вами в ближайшее время</div>
              </div>
            </>
            
          :
          
            <form onSubmit={(e)=> addNewLead(e)} className={styles.formWrapper}>
              <div className={styles.formItem}>
                <label htmlFor="name">Имя</label>
                <input placeholder='Ваше имя' name='name' type="text" required value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className={styles.formItem}>
                <label htmlFor="tel">Телефон</label>
                <input placeholder='Ваш телефон' name='tel' type="text" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </div>
              <div className={styles.formItem}>
                <label htmlFor="">Организация</label>
                <input placeholder='Ваша организация' name="company" type="text" required value={company} onChange={(e)=>setCompany(e.target.value)}/>
              </div>
              <div className={styles.formItem}>
                <label htmlFor="">Почта</label>
                <input placeholder='Ваша почта' name="mail" type="text" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className={styles.formItem}>
                <label htmlFor="">Какую услугу хотели бы получить?</label>
                <div className={styles.checkWrapper}>
                  {callServices.map((item, index) => (
                      <label htmlFor={item.service} key={index} className={styles.check}>
                        <input name='service' type="checkbox" value={item.service} onChange={onChangeCheckBox} checked={item.isChecked}/>
                        <span>{item.service}</span>
                      </label>
                  ))}
                </div>
              </div>
              <div className={styles.formItem}>
                <label htmlFor="">Планируемый бюджет</label>
                <div className={styles.checkWrapper}>
                  {callBudget.map((item, index) => (
                      <label className={styles.check} htmlFor={item.budget}>
                        <input type="radio" id="bot" name="budget" value={item.budget} onChange={onChangeRadio} checked={item.isChecked}/>
                        <span>{item.budget}</span>
                      </label>
                  ))}
                </div>
              </div>
              <div className={cn(styles.formItem,styles.fullRow)}>
                <label htmlFor="">Детали проекта</label>
                <textarea placeholder='Расскажите подробнее о вашем проекте' name="details" maxLength={5000} required value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
              </div>
              <div className={styles.fullRow}>
                <input className={styles.submit} type="submit" />
                <p className={styles.sendNote}>
                  Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных и <Link target='_blank' href={'/privacy'}>политикой конфиденциальности</Link>
                </p>
              </div>
            </form>
        }
          
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
              <p>АО «ТИНЬКОФФ БАНК»</p>
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