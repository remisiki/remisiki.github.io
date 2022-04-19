import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { toggleDarkMode } from '../control/dark';

function navigate(path) {
  return (() => {
    window.location.href = `#/${(path === 'home') ? '' : path}`;
    window.scrollTo(0, 0);
    selectNavi(path);
  }
  );
}

function selectNavi(path) {
  const navi_items = document.getElementsByClassName('title-center');
  const menu_items = document.getElementsByClassName('menu-item');
  const menu_btn = document.getElementById('menu');
  const menu_block = document.getElementById('menu-block');

  for (const navi_item of navi_items) {
    if (navi_item?.id && (navi_item.id === `navi-${path}`)) {
      navi_item.classList?.add('title-selected');
    }
    else {
      navi_item?.classList?.remove('title-selected');
    }
  }
  for (const menu_item of menu_items) {
    if (menu_item?.id && (menu_item.id === `menu-${path}`)) {
      menu_item.classList?.add('menu-item-selected');
    }
    else {
      menu_item?.classList?.remove('menu-item-selected');
    }
  }
  menu_btn?.classList?.remove('menu-btn-selected');
  menu_block.style.display = '';
}

function switchLang(lang) {
  const navi_langs = document.querySelectorAll('.title-right:not(#moon)');
  
  for (const navi_lang of navi_langs) {
    if (navi_lang?.id && (navi_lang.id === lang)) {
      navi_lang.classList?.add('title-selected');
    }
    else {
      navi_lang?.classList?.remove('title-selected');
    }
  }
}

function Menu() {
  const { t, i18n } = useTranslation();
  return (
    <div className="menu-bar" id="menu-block">
      <div onClick={navigate("home")} className="menu-item" id="menu-home">
        {t('Home')}
      </div>
      <div onClick={navigate("profile")} className="menu-item" id="menu-profile">
        {t('Info')}
      </div>
      <div onClick={navigate("project")} className="menu-item" id="menu-project">
        {t('Repos')}
      </div>
      <div onClick={navigate("game")} className="menu-item" id="menu-game">
        {t('Game')}
      </div>
    </div>
  );
}

function NavigationBlock({name}) {
  const { t, i18n } = useTranslation();
  const logo = require("../../assets/favicon.png");
  return (
    <div className="wrapper nav-block">
      <div className="left-container">
        <div id="head-logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div
          className="title-left menu-btn" 
          onClick={() => {
            const menu_block = document.getElementById('menu-block');
            if (menu_block.style.display) {
              menu_block.style.display = '';
            }
            else {
              menu_block.style.display = 'block';
            }
            document.getElementById('menu').classList.toggle('menu-btn-selected');
          }}
          id="menu"
        >
          <span></span>
        </div>
        <Menu />
      </div>
      <div className="guide-container">
        <div className="title-center" onClick={navigate("home")} id="navi-home">
          {t('Home')}
        </div>
        <div className="title-center" onClick={navigate("profile")} id="navi-profile">
          {t('Info')}
        </div>
        <div className="title-center" onClick={navigate("project")} id="navi-project">
          {t('Repos')}
        </div>
        <div className="title-center" onClick={navigate("game")} id="navi-game">
          {t('Game')}
        </div>
      </div>
      <div className="right-action-container">
        <div 
          className="title-right" 
          onClick={()=>{
            const moon = document.getElementById('moon');
            moon.classList.toggle('title-selected'); 
            localStorage.setItem('dark_prefer', moon.classList.contains('title-selected'));
            toggleDarkMode(); 
          }} 
          id="moon"
        >
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <div className="title-right" onClick={()=>{ i18n.changeLanguage('en'); switchLang("en"); }} id="en">
          E
        </div>
        <div className="title-right" onClick={()=>{ i18n.changeLanguage('ja'); switchLang("ja"); }} id="ja">
          あ
        </div>
        <div className="title-right" onClick={()=>{ i18n.changeLanguage('zh'); switchLang("zh"); }} id="zh">
          中
        </div>
      </div>
    </div>
  );
}

export { NavigationBlock, selectNavi, switchLang };