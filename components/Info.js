import style from '../assets/index.css';
import SideBar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import ReactCountryFlag from "react-country-flag"
import { scrollWith } from './scroll';
import $ from 'jquery';

function Flag({code}) {
  return (
    <ReactCountryFlag countryCode={code} svg 
      style={{
        paddingLeft: '5px',
        paddingBottom: '5px',
      }}
    />
  );
}

function InfoScreen({route, navigation}) {
  // const { itemId, otherParam } = route.params;
  // const totop = require("../assets/page-top.webp");
  $('a[href^=http]').attr("target", "_blank");
  const sections = ["Accounts", "Languages", "Programming", "Interests"];
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
            <span>Social Accounts</span>
          </h2>
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
          <h2 id={sections[1]}>
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
          <h2 id={sections[2]}>
            <span>Programming</span>
          </h2>
          <ul>
            <li>
              C
            </li>
            <li>
              Pascal
            </li>
            <li>
              C++
            </li>
            <li>
              Java
            </li>
            <li>
              Scala
            </li>
            <li>
              Python
            </li>
            <li>
              RISC-V Assembly
            </li>
            <li>
              Verilog
            </li>
            <li>
              Elm
            </li>
            <li>
              JavaScript
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
          <h2 id={sections[3]}>
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