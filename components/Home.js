import TwitterTimeLine from './Twitter';
import SideBar from './SideBar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { scrollWith } from './scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { useTranslation } from 'react-i18next';

function ToDoList({num, status}) {
  let list = [];
  const { t, i18n } = useTranslation();
  for (let i = 0; i < num; i ++) {
    list.push(
      <li key={`todo${i}`}>
        <div className={`status ${status[i]}`}>{t(status[i])}</div>
        {t(`todo${i}`)}
      </li>
    );
  }
  return (
    <>
      {list}
    </>
  );
}

function HomeScreen({route, navigation}) {
  const avatar = require("../assets/avatar.jpg");
  const sections = ["Welcome", "Accounts", "ToDo-List"];
  const todo_status = ["progress", "pend", "progress", "complete", "pend", "pend", "pend", "pend", "pend", "stop", "pend", "progress", "pend", "pend", "progress"];
  const { t, i18n } = useTranslation();
  scrollWith(sections);
  return (
    <div>
      <div className="twitter-tl" id="twitter-tl" >
        <TwitterTimeLine name="remisiki" />
      </div>

      <div id="content" className="wrapper doc">
        <article id={sections[0]}>
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
        </article>
        <article id={sections[1]}>
          <h1>
            <span>Social Accounts</span>
          </h1>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            {'  '}Twitter for study:{'  '}
            <a href="https://twitter.com/remisiki">@remisiki</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            {'  '}Github:{'  '}
            <a href="https://github.com/remisiki">Remisiki</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-telegram" />
            {'  '}Telegram:{'  '}
            <a href="https://t.me/remisiki">@remisiki</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            {'  '}Twitter for game:{'  '}
            <a href="https://twitter.com/mukei_stg">@mukei_stg</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-discord" />
            {'  '}Discord:{'  '}
            <a href="https://discordapp.com/users/422313209937002507">むけい#6131</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-steam" />
            {'  '}Steam:{'  '}
            <a href="https://steamcommunity.com/profiles/76561198843774402">むけい</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
            {'  '}YouTube:{'  '}
            <a href="https://www.youtube.com/channel/UC4mJDWoAdQBa-FUx_FXoiQw">れみしき</a>
          </p>
          <p>
            I use Twitter and Telegram quite often for private messages. <span className="yellow-marker-thin">Be careful that there may be not-safe-for-work retweets in my Twitter for game account!</span> Details of my Github repositories may be found in Repos tab. Feel free to add me on Steam, Discord and visit my Youtube channel to discover my gaming process!
          </p>
        </article>
        <article id={sections[2]}>
          <h1>
            {t("todo")}
          </h1>
          <p>
            {t("todot")}
          </p>
          <ul>
            <ToDoList num={15} status={todo_status} />
          </ul>
        </article>
        <SideBar sections={sections} name="home" />
        <div className="gap"></div>
        
      </div>
      {/*<footer>Foot</footer>*/}

    </div>
  );
}

export default HomeScreen;