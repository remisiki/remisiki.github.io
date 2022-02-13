import TwitterTimeLine from './Twitter';
import SideBar from './SideBar';

function HomeScreen({route, navigation}) {
  const avatar = require("../assets/avatar.jpg");
  return (
    <body>
      <div className="twitter-tl" id="twitter-tl" >
        <TwitterTimeLine name="remisiki" />
      </div>

      <div id="content" className="wrapper doc">
        <article>
          <img src={avatar} alt="Furan" id="avatar" />
          <h1>Welcome to Remisiki's Homepage!</h1>
          <p>
            This is my first homepage website made with <a href="https://ja.reactjs.org/">React.js</a>, and please forgive me for not being familiar with web design...
          </p>
          <p>
            My profile icon comes from <a href="https://www.pixiv.net/artworks/28137362">here</a>.
          </p>
        </article>
        <SideBar />
      </div>
    </body>
  );
}

export default HomeScreen;