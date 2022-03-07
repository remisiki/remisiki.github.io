import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import './i18n';

function navigate(path) {
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

function Menu() {
  return (
    <div className="menu-bar" id="menu-block">
      <div onClick={navigate("Home")} className="menu-item" id="menuHome">
        Home
      </div>
      <div onClick={navigate("Info")} className="menu-item" id="menuInfo">
        Info
      </div>
      <div onClick={navigate("Repos")} className="menu-item" id="menuRepos">
        Repos
      </div>
      <div onClick={navigate("Game")} className="menu-item" id="menuGame">
        Game
      </div>
    </div>
  );
}

function NavigationBlock({name}) {
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
        <Menu />
      </div>
      <div className="guide-container">
        <a className="title-center" onClick={navigate("Home")} id="Home">
          {t('Home')}
        </a>
        <a className="title-center" onClick={navigate("Info")} id="Info">
          Info
        </a>
        <a className="title-center" onClick={navigate("Repos")} id="Repos">
          Repos
        </a>
        <a className="title-center" onClick={navigate("Game")} id="Game">
          Game
        </a>
      </div>
      <div className="right-action-container">
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