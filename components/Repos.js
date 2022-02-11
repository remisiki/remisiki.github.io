import style from '../assets/index.css';
import SideBar from './SideBar'

function ReposScreen({route, navigation}) {
  const { itemId, otherParam } = route.params;
  return (
    <div id="content" className="wrapper doc">
      <article>
        <h1>Remisiki's Repositories</h1>
        <p>
          HogeHoge
        </p>
      </article>
      <SideBar />
    </div>
  );
}

export default ReposScreen;