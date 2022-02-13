import TwitterTimeLine from './Twitter';
import SideBar from './SideBar';

function GameScreen({route, navigation}) {
  // const avatar = require("../assets/avatar.jpg");
  return (
    <body>
      <div className="twitter-tl" id="twitter-tl" >
        <TwitterTimeLine name="mukei_stg"/>
      </div>

      <div id="content" className="wrapper doc">
        <article>
          <h1>Remisiki as a gamer</h1>
          <p>
            HogeHoge
          </p>
        </article>
        <SideBar />
      </div>
    </body>
  );
}

export default GameScreen;