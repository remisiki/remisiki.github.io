import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function navigate(path, darkModeHandler) {
  const navigation = useNavigation();
  return (() => {
    if ($('.title-center').hasClass("title-selected")) {
      $('.title-center').removeClass("title-selected");
    }
    if ($('.menu-item').hasClass("menu-item-selected")) {
      $('.menu-item').removeClass("menu-item-selected");
    }
    if ($('#menu').hasClass("menu-btn-selected")) {
      $('#menu').removeClass("menu-btn-selected");
    }
    $(`#${path}`).addClass("title-selected");
    $(`#menu${path}`).addClass("menu-item-selected");
    $('#menu-block').hide();
    navigation.navigate(path, {});
    if (path === "Home") {
      window.location.reload();
    }
    darkModeHandler();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }
  );
}

function switchLang(lang) {
  if ($('.title-right').hasClass("title-selected")) {
      $('.title-right').removeClass("title-selected");
  }
  $('#' + lang).addClass("title-selected");
}

function Menu({darkModeHandler}) {
  return (
    <div className="menu-bar" id="menu-block">
      <div onClick={navigate("Home", darkModeHandler)} className="menu-item" id="menuHome">
        Home
      </div>
      <div onClick={navigate("Info", darkModeHandler)} className="menu-item" id="menuInfo">
        Info
      </div>
      <div onClick={navigate("Repos", darkModeHandler)} className="menu-item" id="menuRepos">
        Repos
      </div>
      <div onClick={navigate("Game", darkModeHandler)} className="menu-item" id="menuGame">
        Game
      </div>
    </div>
  );
}

function NavigationBlock({name, darkModeHandler}) {
  const { t, i18n } = useTranslation();
  let [ menu, setMenu ] = useState(false);
  // const avatar = require("./assets/icon.png");
  return (
    /*<Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />*/
    <div className="wrapper nav-block">
      <div className="left-container">
        <a 
          className="title-left menu-btn" 
          onClick={() => {
            $('#menu-block').toggle();
            $('#menu').toggleClass('menu-btn-selected');
          }}
          id="menu"
        >
          <span></span>
        </a>
        <Menu darkModeHandler={darkModeHandler} />
      </div>
      <div className="guide-container">
        <a className="title-center" onClick={navigate("Home", darkModeHandler)} id="Home">
          {t('Home')}
        </a>
        <a className="title-center" onClick={navigate("Info", darkModeHandler)} id="Info">
          Info
        </a>
        <a className="title-center" onClick={navigate("Repos", darkModeHandler)} id="Repos">
          Repos
        </a>
        <a className="title-center" onClick={navigate("Game", darkModeHandler)} id="Game">
          Game
        </a>
      </div>
      <div className="right-action-container">
        <div 
          className="title-right" 
          onClick={()=>{ 
            $('#moon').toggleClass('title-selected'); 
            darkModeHandler(); 
            localStorage.setItem('dark_prefer', $('#moon').hasClass('title-selected'));
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

export default NavigationBlock;