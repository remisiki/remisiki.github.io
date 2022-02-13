import TwitterTimeLine from './Twitter';
import SideBar from './SideBar';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function HomeScreen({route, navigation}) {
  const avatar = require("../assets/avatar.jpg");
  const kyoto = require("../assets/IMG_20191220_105846.webp");
  return (
    <div>
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
            Homepage mainly contains my portfolio, public repositories, game status or other interests, galleries and future blogs if I have time to post some.
          </p>
          <p>
            Feel free to move around to other tabs!
          </p>
          <p>
            My profile icon comes from <a href="https://www.pixiv.net/artworks/28137362">here</a>.
          </p>
          <div className="gap">
          </div>
          <p>
            This is a landscape photo taken in my favorite city, Kyoto. More photos can be found in Gallery.
          </p>
          <LazyLoadImage src={kyoto} />
        </article>
        <div className="gap"> </div>
        {/*<SideBar />*/}
        
      </div>
    </div>
  );
}

export default HomeScreen;