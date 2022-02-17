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
    $('#' + path).addClass("title-selected");
    navigation.navigate(path, {});
    $('.totop').click();
  }
  );
}

function switchLang(lang) {
  if ($('.title-right').hasClass("title-selected")) {
      $('.title-right').removeClass("title-selected");
  }
  $('#' + lang).addClass("title-selected");
}

function NavigationBlock({name}) {
  const { t, i18n } = useTranslation();
  // const avatar = require("./assets/icon.png");
  return (
    /*<Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />*/
    <div className="wrapper nav-block">
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
        <a className="title-center" onClick={navigate("Gallery")} id="Gallery">
          Gallery
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