import style from '../assets/index.css';
import SideBar from './SideBar'

function InfoScreen({route, navigation}) {
  // const { itemId, otherParam } = route.params;
  // const totop = require("../assets/page-top.webp");
  return (
    <div>
      <div id="content" className="wrapper doc">
        <article>
          <h1>About Remisiki</h1>
          <p>
            Remisiki is a junior student major in ECE (Electrical & Computing Engineering), knowing programming for around 10 years. 
          </p>
          <h2>
            <span>Languages</span>
          </h2>
          <ul>
            <li>
              English
            </li>
            <ul>
              <li>
                British
              </li>
              <li>
                American
              </li>
            </ul>
            <li>
              Chinese
            </li>
            <ul>
              <li>
                Mandarin
              </li>
              <li>
                Shanghainese
              </li>
              <li>
                Cantonese
              </li>
            </ul>
            <li>
              Japanese
            </li>
            <li>
              German
            </li>
          </ul>
          <h2>
            <span>Programming</span>
          </h2>
          <ul>
            <li>
              C
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
            <span className="yellow-marker-thin">My regular gears and favorite softwares for programming:</span>
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
          <h2>
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
        
        {/*<SideBar />*/}
        <div className="gap"></div>
      </div>
    </div>
  );
}

export default InfoScreen;