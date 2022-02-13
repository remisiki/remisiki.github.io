import style from '../assets/index.css';
import { useNavigation } from '@react-navigation/native';
import $ from 'jquery'

function SideBar() {
	const navigation = useNavigation();
	return (
		<aside className="sidebar" id="sidebar">
	        {/*<a href="#" onclick="javascript:foldSideBar(); return false;">
	          <div id="fold"><img src="./index_files/assets/images/fold.png" id="foldpng"></div></a>*/}
	        <div id="sidecontent">
		        <h3>
		            <span lang="en">Contents</span>
		        </h3>
		        <ul id="side1">
	          		<a href="#" onClick={() => {
	            		navigation.navigate('Home', {
			              // itemId: 86,
			              // otherParam: 'anything you want here',
	            		});
	            		// window.location.reload();
	            		$('#twitter-tl').html();

	          		}}>
	            		<span lang="en">Home</span>
	          		</a>
	          		<a href="#" onClick={() => {
	            		navigation.navigate('Info', {
			              // itemId: 86,
			              // otherParam: 'anything you want here',
	            		});
	          		}}>
	            		<span lang="en">Info</span>
	          		</a>
		          	<a href="#" onClick={() => {
	            		navigation.navigate('Repos', {
			              // itemId: 86,
			              // otherParam: 'anything you want here',
	            		});
	          		}}>
		            	<span lang="en">Repo</span>
		          	</a>
	        	</ul>
        	</div>
      	</aside>
	);
}

export default SideBar;