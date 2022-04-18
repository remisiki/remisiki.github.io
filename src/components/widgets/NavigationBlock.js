import React, { useState } from "react";
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { toggleDarkMode } from '../control/dark';

function navigate(path) {
  return (() => {
    window.location.href = `#/${(path === 'home') ? '' : path}`;
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    selectNavi(path);
  }
  );
}

function selectNavi(path) {
  if ($('.title-center').hasClass("title-selected")) {
    $('.title-center').removeClass("title-selected");
  }
  if ($('.menu-item').hasClass("menu-item-selected")) {
    $('.menu-item').removeClass("menu-item-selected");
  }
  if ($('#menu').hasClass("menu-btn-selected")) {
    $('#menu').removeClass("menu-btn-selected");
  }
  $(`#navi-${path}`).addClass("title-selected");
  $(`#menu-${path}`).addClass("menu-item-selected");
  $('#menu-block').hide();
}

function switchLang(lang) {
  if ($('.title-right:not(#moon)').hasClass("title-selected")) {
      $('.title-right:not(#moon)').removeClass("title-selected");
  }
  $('#' + lang).addClass("title-selected");
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
            $('#menu-block').toggle();
            $('#menu').toggleClass('menu-btn-selected');
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
            $('#moon').toggleClass('title-selected'); 
            localStorage.setItem('dark_prefer', $('#moon').hasClass('title-selected'));
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