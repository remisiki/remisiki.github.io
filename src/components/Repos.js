import React, { useState, useEffect } from 'react';
import { scrollWith } from './control/scroll';
import { mostUsedLanguage } from './http/github';
import {
	Chart,
	List,
	Footer,
	Project,
} from './widgets';
import { useTranslation } from 'react-i18next';
import { checkDarkMode } from './control/dark';
import { selectNavi, switchLang } from './widgets/NavigationBlock';

function ReposScreen() {
	const { t, i18n } = useTranslation();
	let [lists, setLists] = useState(false);
	useEffect(() => {
		selectNavi('project');
		switchLang(i18n.language);
		checkDarkMode();
		async function fetchGithubData() {
			const res = await mostUsedLanguage();
			setLists(res);
		}
		fetchGithubData();
		const external_links = document.querySelectorAll('a[href^=http]');
		for (const link of external_links) {
			link.setAttribute('target', '_blank');
		}
		window.scrollTo(0, 0);
	}, [])
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
					<Project name="remiqq" description={t("proj5")} href="https://github.com/remisiki/remiqq" thumb="electron" lang="JavaScript" />
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