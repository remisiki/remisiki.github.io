import style from '../assets/index.css';
import SideBar from './SideBar'

function InfoScreen({route, navigation}) {
  const { itemId, otherParam } = route.params;
  return (
    <div>
      <div id="content" className="wrapper doc">
        <article>
          <h1>About Remisiki</h1>
          <p>
            Remisiki is a junior student major in ECE (Electrical & Computing Engineering), knowing programming for around 10 years. 
          </p>
          <h2>
            Language Skills
          </h2>
          <ul>
            <li>
              English
            </li>
            <li>
              Chinese
            </li>
            <li>
              Japanese
            </li>
          </ul>
          <h2>
            Programming Skills
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
            <li>
              React.js
            </li>
          </ul>
        </article>
        <SideBar />
      </div>
    </div>
  );
}

export default InfoScreen;