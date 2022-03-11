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

function ReposScreen({route, navigation, darkModeHandler}) {
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
          <Project name="remisiki-home" description="Homepage Web App" href="https://github.com/remisiki/remisiki-home" thumb="" lang="JavaScript" />
          <Project name="kettyan-bot" description="Telegram Pixiv Illust Bot" href="https://remisiki.github.io/kettyan-bot/" thumb="" lang="Python" />
          <Project name="umjicanvas" description="Activity Count for UM-JI Canvas" href="https://github.com/remisiki/umjicanvas" thumb="" lang="Java" />
          <Project name="GMM-Demux" description="Barcoding Data Processing Tool" href="https://gmm-demux.readthedocs.io/en/latest/" thumb="" lang="Python" />
          <Project name="k-gatya" description="Random Pixiv Artworks Webpage" href="https://remisiki.github.io/k-gatya/" thumb="" lang="JavaScript" />
          <Project name="ECE4710J" description="UM-JI Course File" href="https://github.com/remisiki/ECE4710J" thumb="" lang="Python" />
          <Project name="VE370" description="UM-JI Course File" href="https://github.com/remisiki/VE370" thumb="" lang="Verilog" />
          <Project name="Test" description="hogehoge" href="" thumb="" lang="Batchfile" />
          <Project name="ここまでだ。。。" description="もっとがんばります！" href="" thumb="" lang="C++" />
        </div>
        <div className="gap"></div>
      </div>
      <Footer />
    </div>
  );
}

export default ReposScreen;