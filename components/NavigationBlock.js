import { useNavigation } from '@react-navigation/native';
import $ from 'jquery'

function navigate(path) {
  const navigation = useNavigation();
  return (() => {
    navigation.navigate(path, {});
  }
  );
}

function switchLang(lang) {
  return (() => {
    // $('[lang="en"]').hide();
    // $('[lang="ja"]').hide();
    // $('[lang="zh"]').hide();
    $('[lang="' + lang + '"]').show();
  }
  );
}

function NavigationBlock({name}) {
  // const avatar = require("./assets/icon.png");
  return (
    /*<Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />*/
    <div className="wrapper">
      <div className="title-left">
        {name}
      </div>
      <div className="guide-container">
        <div className="title-center" onClick={navigate("Home")}>
          Home
        </div>
        <div className="title-center" onClick={navigate("Info")}>
          Info
        </div>
        <div className="title-center" onClick={navigate("Repos")}>
          Repos
        </div>
        <div className="title-center" onClick={navigate("Game")}>
          Game
        </div>
        <div className="title-center" onClick={switchLang("ja")}>
          Lang
        </div>
      </div>
    </div>
  );
}

export default NavigationBlock;