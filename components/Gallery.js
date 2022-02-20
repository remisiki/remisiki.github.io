import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import photo_wall from './photo_wall.json';
import { scrollWith } from './scroll';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

function Img({src, handler, index}) {
  return (
    <div className="wrap" onClick={() => handler(index)}>
      <LazyLoadImage src={src} className="photo" effect="blur" />
    </div>
  );
}

function ViewSource({src}) {
  return (
    <a href={src} className="original" onClick={(e) => e.stopPropagation()} target="_blank">
     オリジナル
    </a>
  );
}

function Description({info}) {
  const { t, i18n } = useTranslation();
  return (
    <div className="photo_info" onClick={(e) => e.stopPropagation()}>
      <span>
        {t(info)}
      </span>
    </div>
  );
}

function GalleryScreen({route, navigation}) {
  $('a[href^=http]').attr("target", "_blank");
  const [state, setState] = useState('out');
  const stateHandler = (state) => {
    setState(state);
  }
  scrollWith([]);
  const google_prefix = "https://drive.google.com/uc?export=view&id=";
  const google_thumb_prefix = "https://lh3.googleusercontent.com/fife/";
  let photos = [];
  let cnt = 0;
  for (const google_object of photo_wall.google) {
    const src = (google_thumb_prefix + google_object.thumb);
    photos.push(<Img src={src} key={`photo${cnt}`} handler={stateHandler} index={cnt} />);
    cnt ++;
  }
  return (
    <div>
      <div className="photo_container">
        {photos}
      </div>
      {state !== 'out' && 
        <div onClick={() => setState('out')} className="photo_zoom_container">
          <LazyLoadImage src={google_thumb_prefix + photo_wall.google[state].thumb} className="photo_zoom" effect="blur" />
          <ViewSource src={google_prefix + photo_wall.google[state].id} />
          <Description info={photo_wall.google[state].info} />
        </div>
      }
    </div>
  );
}

export default GalleryScreen;