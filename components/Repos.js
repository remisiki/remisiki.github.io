import React, { useState, useEffect } from 'react';
import style from '../assets/index.css';
import SideBar from './SideBar';
import { get } from './request';
import Chart from './Chart';
import List from './List';
import { scrollWith } from './scroll';

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

function ReposScreen({route, navigation}) {
  let [lists, setLists] = useState(false);
  useEffect(async () => {
    lists = await mostUsedLanguage();
    setLists(lists);
  },[])
  scrollWith([]);
  return (
    <div>
      { lists && <Chart data={lists} />}
      { lists && <List data={lists} />}
    </div>
  );
}

export default ReposScreen;