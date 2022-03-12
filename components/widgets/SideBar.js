import { useNavigation } from '@react-navigation/native';
import $ from 'jquery';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function SideNavi(name) {
	const { t, i18n } = useTranslation();
	return (
		<li key={name}>
			<a href={"#" + name} id={name + "Navi"}>
				<span>
					{t(name)}
				</span>
			</a>
		</li>
	);
}

function ToolBar() {
	const { t, i18n } = useTranslation();
	return (
		<>
			<h3>{t("Tools")}</h3>
			<ul>
				<li><a onClick={() => $('.fold-block').show()} style={{cursor: "pointer"}}>{t("Expand")}</a></li>
				<li><a onClick={() => $('.fold-block').hide()} style={{cursor: "pointer"}}>{t("Fold")}</a></li>
			</ul>
		</>
	);
}

function foldSideBar(id) {
	$(`#sidecontent-${id}`).toggle();
	$(`#foldpng-${id}`).toggleClass('reverse-z');
	$(`#sidebar-${id}`).toggleClass('small-aside');
}

function SideBar({sections, tool = false, name}) {
	const { t, i18n } = useTranslation();
	const navigation = useNavigation();
	const fold = require("../../assets/fold.png");
	const screen_width = window.innerWidth;
	const mobile_view = (screen_width < 425);
	var navis = [];
	for (var i = 0; i < sections.length; i ++) {
		navis.push(SideNavi(sections[i]));
	}
	useEffect(() => {
		if (mobile_view) {
			foldSideBar(name);
			$(`#sidebar-${name}`).addClass('right-aside');
		}
	}, [sections]);
	return (
		<aside className="sidebar" id={`sidebar-${name}`}>
			{mobile_view &&
		        <div onClick={() => foldSideBar(name)}>
		          <div>
			          <img src={fold} id={`foldpng-${name}`} className="foldpng" />
		          </div>
		        </div>
		    }
	        <div id={`sidecontent-${name}`}>
		        <h3>
		            <span lang="en">{t("Contents")}</span>
		        </h3>
		        <ul>
	          		{navis}
	        	</ul>
	        	{tool && <ToolBar />}
        	</div>
      	</aside>
	);
}

export default SideBar;