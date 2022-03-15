import React, { useState, useEffect } from 'react';
import style from '../assets/index.css';
import { scrollWith } from './control/scroll';
import $ from 'jquery';
import { mostUsedLanguage } from './http/github';
import {
  SideBar,
  Chart,
  List,
  Box,
  Footer,
  Project,
} from './widgets';
import { useTranslation } from 'react-i18next';

function ReposScreen({route, navigation, darkModeHandler}) {
  const { t, i18n } = useTranslation();
  $('a[href^=http]').attr("target", "_blank");
  let [lists, setLists] = useState(false);
  useEffect(async () => {
    lists = await mostUsedLanguage();
    setLists(lists);
  },[])
  useEffect(() => {
    darkModeHandler();
  }, []);
  scrollWith([]);
  return (
    <div>
      <div className="repo-container">
        { lists && <Chart data={lists} />}
        { lists && <List data={lists} />}
        <div className="cell_container">
          <Project name="remisiki-home" description={t("proj0")} href="https://github.com/remisiki/remisiki-home" thumb="" lang="JavaScript" />
          <Project name="kettyan-bot" description={t("proj1")} href="https://remisiki.github.io/kettyan-bot/" thumb="ket" lang="Python" />
          <Project name="umjicanvas" description={t("proj2")} href="https://github.com/remisiki/umjicanvas" thumb="umjicanvas" lang="Java" />
          <Project name="GMM-Demux" description={t("proj3")} href="https://gmm-demux.readthedocs.io/en/latest/" thumb="tsne" lang="Python" />
          <Project name="k-gatya" description={t("proj4")} href="https://remisiki.github.io/k-gatya/" thumb="keg" lang="JavaScript" />
          <Project name="ECE4710J" description={t("projji")} href="https://github.com/remisiki/ECE4710J" thumb="svm" lang="Python" />
          <Project name="VE370" description={t("projji")} href="https://github.com/remisiki/VE370" thumb="cpu" lang="Verilog" />
          <Project name="ここまでだ。。。" description="もっとがんばります！" href="" thumb="" lang="C++" />
        </div>
        <div className="gap"></div>
      </div>
      <Footer />
    </div>
  );
}

export default ReposScreen;