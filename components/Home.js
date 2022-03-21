import SideBar from './widgets/SideBar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { scrollWith } from './control/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import {
  TwitterTimeLine,
  Footer,
} from './widgets';

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

function HomeScreen({route, navigation, theme}) {
  const avatar = require("../assets/avatar.jpg");
  const sections = ["Welcome", "Accounts", "ToDo-List"];
  const todo_status = ["progress", "pend", "progress", "complete", "pend", "pend", "pend", "pend", "pend", "stop", "pend", "progress", "pend", "pend", "progress", "progress"];
  const { t, i18n } = useTranslation();
  scrollWith(sections);
  return (
    <div>
      <div className="twitter-tl" id="twitter-tl" >
        <TwitterTimeLine name="remisiki" theme={theme} />
      </div>

      <div id="content" className="wrapper doc">
        <article id={sections[0]}>
          <img src={avatar} alt="Furan" id="avatar" />
          <h1>{t("hms0t")}</h1>
          <p>{t("hms0p0p0")}<a href="https://ja.reactjs.org/">React.js</a>{t("hms0p0p1")}</p>
          <p>{t("hms0p1")}</p>
          <p>{t("hms0p3p0")}<a href="https://www.pixiv.net/artworks/28137362">{t("hms0p3p1")}</a>{t("hms0p3p2")}</p>
        </article>
        <article id={sections[1]}>
          <h1>{t("hms1t")}</h1>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            &ensp;{t("hms1p0")}&ensp;
            <a href="https://twitter.com/remisiki">@remisiki</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            &ensp;{t("hms1p1")}&ensp;
            <a href="https://github.com/remisiki">Remisiki</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-telegram" />
            &ensp;{t("hms1p2")}&ensp;
            <a href="https://t.me/remisiki">@remisiki</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            &ensp;{t("hms1p3")}&ensp;
            <a href="https://twitter.com/mukei_stg">@mukei_stg</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-discord" />
            &ensp;{t("hms1p4")}&ensp;
            <a href="https://discordapp.com/users/422313209937002507">むけい#6131</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-steam" />
            &ensp;{t("hms1p5")}&ensp;
            <a href="https://steamcommunity.com/profiles/76561198843774402">むけい</a>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
            &ensp;{t("hms1p6")}&ensp;
            <a href="https://www.youtube.com/channel/UC4mJDWoAdQBa-FUx_FXoiQw">れみしき</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            &ensp;{t("hms1p7")}&ensp;
            <a href="mailto:yangyiwen.sigo@hotmail.com">Hotmail</a>
          </p>
          <p>{t("hms1p8p0")}<span className="yellow-marker-thin">{t("hms1p8p1")}</span>{t("hms1p8p2")}</p>
        </article>
        <article id={sections[2]}>
          <h1>
            {t("todo")}
          </h1>
          <p>
            {t("todot")}
          </p>
          <ul>
            <ToDoList num={16} status={todo_status} />
          </ul>
        </article>
        <SideBar sections={sections} name="home" />
        <div className="gap"></div>
        
      </div>
      <Footer />

    </div>
  );
}

export default HomeScreen;