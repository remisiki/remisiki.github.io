import style from '../assets/index.css';
import { useNavigation } from '@react-navigation/native';
import $ from 'jquery'

function SideNavi(name) {
	return (
		<li key={name}>
			<a href={"#" + name} id={name + "Navi"}>
				<span>
					{name}
				</span>
			</a>
		</li>
	);
}

function SideBar({sections}) {
	const navigation = useNavigation();
	var navis = [];
	for (var i = 0; i < sections.length; i ++) {
		navis.push(SideNavi(sections[i]));
	}
	console.log(navis[0]);
	return (
		<aside className="sidebar" id="sidebar">
	        {/*<a href="#" onclick="javascript:foldSideBar(); return false;">
	          <div id="fold"><img src="./index_files/assets/images/fold.png" id="foldpng"></div></a>*/}
	        <div id="sidecontent">
		        <h3>
		            <span lang="en">Contents</span>
		        </h3>
		        <ul id="side1">
	          		{navis}
	        	</ul>
        	</div>
      	</aside>
	);
}

export default SideBar;