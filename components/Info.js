import style from '../assets/index.css';
import SideBar from './SideBar';
import ReactCountryFlag from "react-country-flag"
import { scrollWith } from './scroll';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

function Flag({code}) {
  return (
    <ReactCountryFlag countryCode={code} svg 
      style={{
        marginLeft: '5px',
      }}
    />
  );
}

function unfold(id) {
  $(`#${id}`).toggle();
}

function InfoScreen({route, navigation}) {
  // const { itemId, otherParam } = route.params;
  // const totop = require("../assets/page-top.webp");
  $('a[href^=http]').attr("target", "_blank");
  const { t, i18n } = useTranslation();
  const sections = ["Languages", "Programming", "Interests"];
  scrollWith(sections);
  return (
    <div>
      <div id="content" className="wrapper doc">
        <article>
          <h1>About Remisiki</h1>
          <p>
            Remisiki is a junior student major in ECE (Electrical & Computing Engineering), who likes programming and single-player games. 
          </p>
          <h2 id={sections[0]}>
            <span>Languages</span>
          </h2>
          <ul>
            <li>
              English
              <Flag code="GB" />
              <Flag code="US" />
              <p>
                Can read most English without difficulties, but writing and speaking is not very good... If you find some words improper here or in other my pages, please let me know!
              </p>
              <p>
                I have been taking all my undergraduate courses in English, so I think there is no problem with my professional English. But when actually travelling to English-speaking countries, I found native speakers all talking so fast that I could not understand them...
              </p>
              <p>
                Personally speaking, I like British accents since they always sound quite "gentlemen" (?).
              </p>
            </li>
            <li>
              Chinese
              <Flag code="CN" />
              <Flag code="TW" />
              <Flag code="HK" />
            </li>
            <ul>
              <li>
                Mandarin
              </li>
              <p>
                Both Peking Mandarin and Taiwan Mandarin are OK with me. For writing, I prefer traditional Chinese (they are nicer). In fact, modern Chinese pronunciation (Mandarin) is too simple and I do not like it very much... If possible, I will talk in Shanghainese instead.
              </p>
              <li>
                Shanghainese
                <p>
                  Native language, spoken from my earliest childhood. I like it, but few people know about Shanghainese nowadays :(
                </p>
              </li>
              <li>
                Cantonese
                <p>
                  Not so familiar with, but know many about it. Maybe better at listening than speaking? Since there is no chance for me to practice speaking Cantonese (at least now).
                </p>
                <p>
                  Pronunciations are very interesting, and many similar points can be found between Cantonese and Japanese Kanji. 
                </p>
              </li>
            </ul>
            <li>
              Japanese
              <Flag code="JP" />
              <p>
                Quite familiar with, yet still far from mastering. Listening and reading are OK, but writing Japanese needs google translate sometimes... My words written in Japanese may seem a bit strange and please let me know if so.
              </p>
            </li>
            <li>
              German
              <Flag code="DE" />
              <p>
                Knows very limited about it. I have just started learning German, so conversations are not possible at present...
              </p>
            </li>
          </ul>
          <h2 id={sections[1]}>
            <span>Programming</span>
          </h2>
          <ul>
            <li>
              <a onClick={() => unfold("c")} className="fold">C</a>
              <div className="fold-block" id="c">
                <p className="brown-text">
                  {t("futuu")}
                </p>
                <p>
                  {t("c")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("pascal")} className="fold">Pascal</a>
              <div className="fold-block" id="pascal">
                <p className="green-text">
                  {t("gut")}
                </p>
                <p className="red-text">
                  {t("forget")}
                </p>
                <p>
                  {t("pascal")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("cpp")} className="fold">C++</a>
              <div className="fold-block" id="cpp">
                <p className="green-text">
                  {t("gut")}
                </p>
                <p className="red-text">
                  {t("forget")}
                </p>
                <p>
                  {t("cpp")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("java")} className="fold">Java</a>
              <div className="fold-block" id="java">
                <p className="brown-text">
                  {t("futuu")}
                </p>
                <p>
                  {t("java")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("scala")} className="fold">Scala</a>
              <div className="fold-block" id="scala">
                <p className="red-text">
                  {t("bad")}
                </p>
                <p>
                  {t("scala")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("python")} className="fold">Python</a>
              <div className="fold-block" id="python">
                <p className="green-text">
                  {t("gut")}
                </p>
                <p>
                  {t("python")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("riscv")} className="fold">RISC-V Assembly</a>
              <div className="fold-block" id="riscv">
                <p className="red-text">
                  {t("bad")}
                </p>
                <p>
                  {t("riscv")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("verilog")} className="fold">Verilog</a>
              <div className="fold-block" id="verilog">
                <p className="green-text">
                  {t("gut")}
                </p>
                <p>
                  {t("verilog")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("vb")} className="fold">Visual Basic</a>
              <div className="fold-block" id="vb">
                <p className="brown-text">
                  {t("futuu")}
                </p>
                <p>
                  {t("vb")}
                </p>
              </div>
            </li>
            <li>
              <a onClick={() => unfold("javascript")} className="fold">JavaScript</a>
              <div className="fold-block" id="javascript">
                <p className="brown-text">
                  {t("futuu")}
                </p>
                <p>
                  {t("javascript")}
                </p>
              </div>
            </li>
          </ul>
          <p>
            <span className="yellow-marker-thin">My regular gears and favorite text editors for programming:</span>
          </p>
          <ul>
            <li>
              Desktop PC (Windows 10 with WSL Ubuntu)
            </li>
            <li>
              Notebook PC (Windows 11 & Manjaro Linux)
            </li>
            <li>
              Sublime Text
            </li>
          </ul>
          <h2 id={sections[2]}>
            <span>Interests</span>
          </h2>
          <ul>
            <li>
              STG
            <ul>
              <li>
                Touhou
              </li>
              <li>
                CAVE
              </li>
            </ul>
            </li>
            <li>
              Metroroidvania
            <ul>
              <li>
                Hollow Knight
              </li>
              <li>
                Ender Lilies
              </li>
              <li>
                Ori
              </li>
            </ul>
            </li>
            <li>
              Other games
            <ul>
              <li>
                Steins;Gate
              </li>
              <li>
                Steins;Gate 0
              </li>
              <li>
                htoL#NiQ
              </li>
            </ul>
            </li>
            <li>
              Anime
            <ul>
              <li>
                Steins;Gate
              </li>
              <li>
                Psychopass
              </li>
              <li>
                Monogatari
              </li>
            </ul>
            </li>
          </ul>
        </article>
        
        <SideBar sections={sections} />
        <div className="gap"></div>
      </div>
    </div>
  );
}

export default InfoScreen;