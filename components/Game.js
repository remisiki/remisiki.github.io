import TwitterTimeLine from './Twitter';
import SideBar from './SideBar';
import { scrollWith } from './scroll';
import { useTranslation } from 'react-i18next';

function GameScreen({route, navigation}) {
  const { t, i18n } = useTranslation();
  const sections = ["Touhou", "CAVE", "Hollow-Knight"];
  scrollWith(sections);
  return (
    <div>
      <div className="twitter-tl" id="twitter-tl" >
        <TwitterTimeLine name="mukei_stg"/>
      </div>

      <div id="content" className="wrapper doc">
        <article>
          <h1>{t("gmh")}</h1>
          <h2 id={sections[0]}>
            <span>{t("gms0")}</span>
          </h2>
          <p>"<span className="yellow-marker-thin">&emsp;</span>"{t("gms0p0")}</p>
          <ul>
            <li>
              <span style={{color: "#b0282a", "font-weight": "bold"}}>{t("gms0l0")}</span>
              <ul>
                <li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l0hc")}</span></li>
                <li>{t("gms0excc")}{t("gms0l0l1")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#c028b9", "font-weight": "bold"}}>{t("gms0l1")}</span>
              <ul>
                <li>{t("gms0lcc")}{t("gms0l1l0p0")}<span className="yellow-marker-thin">{t("gms0l1hc")}</span>{t("gms0l1l0p1")}</li>
                <li>{t("gms0excc")}{t("gms0l1l1")}</li>
                <li>{t("gms0nbcc")}{t("gms0l1l2")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#9a7a01", "font-weight": "bold"}}>{t("gms0l2")}</span>
              <ul>
                <li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l2hc")}</span>{t("gms0l2l0")}</li>
                <li>{t("gms0excc")}{t("gms0l2l1")}</li>
                <li>{t("gms0nbcc")}{t("gms0l2l2")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#758f00", "font-weight": "bold"}}>{t("gms0l3")}</span>
              <ul>
                <li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l3hc")}</span></li>
              </ul>
            </li>
            <li>
              <span style={{color: "#539816", "font-weight": "bold"}}>{t("gms0l4")}</span>
              <ul>
                <li>{t("gms0lcc")}{t("gms0l4l0")}<span className="yellow-marker-thin">{t("gms0l4hc")}</span></li>
                <li>{t("gms0excc")}{t("gms0l4l1")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#5f3423", "font-weight": "bold"}}>{t("gms0l5")}</span>
              <ul>
                <li>{t("gms0lcc")}{t("gms0l5l0")}<span className="yellow-marker-thin">{t("gms0l5hc")}</span></li>
              </ul>
            </li>
            <li>
              <span style={{color: "#68e874", "font-weight": "bold"}}>{t("gms0l6")}</span>
              <ul>
                <li>{t("gms0lcc")}{t("gms0l6l0")}<span className="yellow-marker-thin">{t("gms0l6hc")}</span></li>
                <li>{t("gms0excc")}{t("gms0l6l1")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#521d81", "font-weight": "bold"}}>{t("gms0l7")}</span>
              <ul>
                <li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l7hc")}</span>{t("gms0l7l0")}</li>
                <li>{t("gms0excc")}{t("gms0l7l1")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#526dc1", "font-weight": "bold"}}>{t("gms0l8")}</span>
              <ul>
                <li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l8hc")}</span></li>
                <li>{t("gms0excc")}{t("gms0l8l1")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#7f17dd", "font-weight": "bold"}}>{t("gms0l9")}</span>
              <ul>
                <li>{t("gms0l9lcc")}<span className="yellow-marker-thin">{t("gms0l9hc")}</span></li>
              </ul>
            </li>
            <li>
              <span style={{color: "#ad94b2", "font-weight": "bold"}}>{t("gms0l10")}</span>
              <ul>
                <li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l10hc")}</span>{t("gms0l10l0")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#560902", "font-weight": "bold"}}>{t("gms0l11")}</span>
              <ul>
                <li>{t("gms0lcc")}{t("gms0l11l0")}<span className="yellow-marker-thin">{t("gms0l11hc")}</span></li>
                <li>{t("gms0excc")}{t("gms0l11l1")}</li>
              </ul>
            </li>
            <li>
              <span style={{color: "#6cfbcf", "font-weight": "bold"}}>{t("gms0l12")}</span>
              <ul>
                <li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l12hc")}</span></li>
                <li>{t("gms0excc")}{t("gms0l12l1")}</li>
              </ul>
            </li>
          </ul>
          <h2 id={sections[1]}>
            <span>{t("gms1")}</span>
          </h2>
          <h2 id={sections[2]}>
            <span>{t("gms2")}</span>
          </h2>
        </article>
        <SideBar sections={sections} />
        <div className="gap"></div>
      </div>
    </div>
  );
}

export default GameScreen;