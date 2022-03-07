import React, { useState, useEffect } from 'react';
import style from '../assets/index.css';
import SideBar from './SideBar';
import { get } from './request';
import Chart from './Chart';
import List from './List';
import { scrollWith } from './scroll';
import Box from './Box';
import $ from 'jquery';

async function mostUsedLanguage() {
  let content = await get("https://api.github.com/users/remisiki/repos");
  let repos = [];
  let language_data = [];
  const repo_api = "https://api.github.com/repos/remisiki/"
  for (const repo of content) {
    repos.push(repo_api + repo.name + "/languages");
  }
  language_data = await Promise.all(repos.map(repo => get(repo)));
  let languages = new Set;
  for (const item of language_data) {
    for (const key of Object.keys(item)) {
      languages.add(key);
    }
  }
  languages.delete("Jupyter Notebook");
  let sortable_data = [];
  let sum = 0;
  for (const key of languages) {
    for (const item of language_data) {
      if (item[key]) {
        if (sortable_data[key]) {
          sortable_data[key] += item[key];
        }
        else {
          sortable_data[key] = item[key];
        }
        sum += item[key];
      }
      else {

      }
    }
  }
  sortable_data = Object.keys(sortable_data).map(
    (key) => ({ 
      key: key, 
      value: sortable_data[key]// * 100 / sum
    })
  );
  sortable_data.sort((a,b) => {
    if (a.value < b.value) return 1;
    if (a.value > b.value) return -1;
    return 0;
  });
  return (sortable_data);
}

function Project({name, description, href, thumb, lang}) {
  const avatar = require("../assets/avatar.jpg");
  return (
    <a className="cell" href={href}>
      <img src={avatar} />
      <span className="title">{name}</span>
      <br />
      <span className="content">{description}</span>
      <Box lang={lang} text={lang} width={`${lang.length * 9}px`} />
    </a>
  );
}

function ReposScreen({route, navigation}) {
  $('a[href^=http]').attr("target", "_blank");
  let [lists, setLists] = useState(false);
  useEffect(async () => {
    lists = await mostUsedLanguage();
    setLists(lists);
  },[])
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
    </div>
  );
}

export default ReposScreen;