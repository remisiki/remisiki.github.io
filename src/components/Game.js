import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';
import { Img, ViewSource, Description } from './widgets/Gallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import photos from './config/photo_wall.json';
import { KeyMapper } from './control/keyboard';
import {
	TwitterTimeLine,
	SideBar,
	Footer,
	LeftRightSet,
} from './widgets';
import { getTheme } from './control/dark';
import { selectNavi } from './widgets/NavigationBlock';

function GameScreen() {
	const { t, i18n } = useTranslation();
	const sections = ["Touhou", "CAVE", "Hollow-Knight"];
	const length = photos.length;
	let [state, setState] = useState('out');
	let [photo_index, setPhotoIndex] = useState(0);
	const stateHandler = (state) => {
		setState(state);
	}
	const leftClickHandler = () => {
		setPhotoIndex((photo_index - 1 + length) % length);
	}
	const rightClickHandler = () => {
		setPhotoIndex((photo_index + 1) % length);
	}
	const wheelHandler = (e) => {
		// TODO
		// e.preventDefault();
		if (e.deltaY > 0) {
			rightClickHandler();
		}
		else if (e.deltaY < 0) {
			leftClickHandler();
		}
	}
	useEffect(() => {
		selectNavi('game');
	}, []);
	return (
		<div>
			<TwitterTimeLine name="remisiki_stg" theme={getTheme} />

			<div id="content" className="wrapper doc">
				<article className="float">
					<h1>{t("gmh")}</h1>
					<h2 id={sections[0]}>
						<span>{t("gms0")}</span>
					</h2>
					<p>"<span className="yellow-marker-thin">&emsp;</span>"{t("gms0p0")}</p>
					<ul>
						<li>
							<span style={{color: "#b0282a", "fontWeight": "bold"}}>{t("gms0l0")}</span>
							<ul>
								<li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l0hc")}</span></li>
								<li>{t("gms0excc")}{t("gms0l0l1")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#c028b9", "fontWeight": "bold"}}>{t("gms0l1")}</span>
							<ul>
								<li>{t("gms0lcc")}{t("gms0l1l0p0")}<span className="yellow-marker-thin">{t("gms0l1hc")}</span>{t("gms0l1l0p1")}</li>
								<li>{t("gms0excc")}{t("gms0l1l1")}</li>
								<li>{t("gms0nbcc")}{t("gms0l1l2")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#9a7a01", "fontWeight": "bold"}}>{t("gms0l2")}</span>
							<ul>
								<li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l2hc")}</span>{t("gms0l2l0")}</li>
								<li>{t("gms0excc")}{t("gms0l2l1")}</li>
								<li>{t("gms0nbcc")}{t("gms0l2l2")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#758f00", "fontWeight": "bold"}}>{t("gms0l3")}</span>
							<ul>
								<li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l3hc")}</span></li>
							</ul>
						</li>
						<li>
							<span style={{color: "#539816", "fontWeight": "bold"}}>{t("gms0l4")}</span>
							<ul>
								<li>{t("gms0lcc")}{t("gms0l4l0")}<span className="yellow-marker-thin">{t("gms0l4hc")}</span></li>
								<li>{t("gms0excc")}{t("gms0l4l1")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#5f3423", "fontWeight": "bold"}}>{t("gms0l5")}</span>
							<ul>
								<li>{t("gms0lcc")}{t("gms0l5l0")}<span className="yellow-marker-thin">{t("gms0l5hc")}</span></li>
							</ul>
						</li>
						<li>
							<span style={{color: "#68e874", "fontWeight": "bold"}}>{t("gms0l6")}</span>
							<ul>
								<li>{t("gms0lcc")}{t("gms0l6l0")}<span className="yellow-marker-thin">{t("gms0l6hc")}</span></li>
								<li>{t("gms0excc")}{t("gms0l6l1")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#521d81", "fontWeight": "bold"}}>{t("gms0l7")}</span>
							<ul>
								<li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l7hc")}</span>{t("gms0l7l0")}</li>
								<li>{t("gms0excc")}{t("gms0l7l1")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#526dc1", "fontWeight": "bold"}}>{t("gms0l8")}</span>
							<ul>
								<li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l8hc")}</span></li>
								<li>{t("gms0excc")}{t("gms0l8l1")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#7f17dd", "fontWeight": "bold"}}>{t("gms0l9")}</span>
							<ul>
								<li>{t("gms0l9lcc")}<span className="yellow-marker-thin">{t("gms0l9hc")}</span></li>
							</ul>
						</li>
						<li>
							<span style={{color: "#ad94b2", "fontWeight": "bold"}}>{t("gms0l10")}</span>
							<ul>
								<li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l10hc")}</span>{t("gms0l10l0")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#560902", "fontWeight": "bold"}}>{t("gms0l11")}</span>
							<ul>
								<li>{t("gms0lcc")}{t("gms0l11l0")}<span className="yellow-marker-thin">{t("gms0l11hc")}</span></li>
								<li>{t("gms0excc")}{t("gms0l11l1")}</li>
							</ul>
						</li>
						<li>
							<span style={{color: "#6cfbcf", "fontWeight": "bold"}}>{t("gms0l12")}</span>
							<ul>
								<li>{t("gms0lcc")}<span className="yellow-marker-thin">{t("gms0l12hc")}</span></li>
								<li>{t("gms0excc")}{t("gms0l12l1")}</li>
							</ul>
						</li>
					</ul>
					<h2 id={sections[1]}>
						<span>{t("gms1")}</span>
					</h2>
					<ul>
						<li>
							<span style={{"fontWeight": "bold"}}>{t("gms1l0")}</span>
							<ul>
								<li>{t("gms11cc")}{t("gms1l0l0")}</li>
							</ul>
						</li>
						<li>
							<span style={{"fontWeight": "bold"}}>{t("gms1l1")}</span>
							<ul>
								<li>{t("gms11cc")}{t("gms1l1l0")}</li>
							</ul>
						</li>
						<li>
							<span style={{"fontWeight": "bold"}}>{t("gms1l2")}</span>
							<ul>
								<li>{t("gms11cc")}{t("gms1l2l0")}</li>
							</ul>
						</li>
						<li>
							<span style={{"fontWeight": "bold"}}>{t("gms1l3")}</span>
							<ul>
								<li>{t("gms1mncc")}{t("gms1l3l0")}</li>
							</ul>
						</li>
						<li>
							<span style={{"fontWeight": "bold"}}>{t("gms1l4")}</span>
							<ul>
								<li>{t("gms1dscc")}{t("gms1l4l0")}</li>
							</ul>
						</li>
						<li>
							<span style={{"fontWeight": "bold"}}>{t("gms1l5")}</span>
							<ul>
								<li>{t("gms15o")}</li>
							</ul>
						</li>
						<li>
							<span style={{"fontWeight": "bold"}}>{t("gms1l6")}</span>
							<ul>
								<li>{t("gms15o")}</li>
							</ul>
						</li>
					</ul>
					<h2 id={sections[2]}>
						<span>{t("gms2")}</span>
					</h2>
					<ul>
						<li>
							<span style={{"fontWeight": "bold"}}>{t("gms2l0")}</span>
							<p>{t("gms2l0p0")}</p>
						</li>
					</ul>
					<YouTube
						videoId={"bYVrQCh1wQI"}
						opts={{
							height: (window.innerWidth <= 800) ? 200 : 450,
							width: '100%'
						}}
					/>
				</article>
				<SideBar sections={sections} path="game" />
				<div className="gap"></div>
			</div>
			<div className="photo_container">
				<LeftRightSet 
					style={{
						"marginBottom": 10, 
						"textAlign": "center",
						"color": "#eee",
						"fontWeight": "bold",
						"fontSize": 20
					}}
					leftPosition={10}
					rightPosition={10}
					leftClickHandler={() => leftClickHandler()}
					rightClickHandler={() => rightClickHandler()}
					text={t("Gallery")}
				/>
				<Img 
					src={require(`../assets/${photos.at(photo_index).thumb}.webp`)} 
					key={`photo${photo_index}`} 
					handler={stateHandler} 
					index={photo_index} 
				/>
				<div 
					style={{
						"textAlign": "center",
						"color": "#eee",
						"fontSize": 18
					}}>
					{photo_index + 1}/{length}
				</div>
			</div>
			{state !== 'out' && 
				<div onClick={() => setState('out')} className="photo_zoom_container" onWheel={(e) => wheelHandler(e)}>
					<LazyLoadImage 
						src={require(`../assets/${photos.at(photo_index).thumb}.webp`)} 
						className="photo_zoom" 
						effect="blur" 
					/>
					<ViewSource src={photos.at(photo_index).src} />
					<Description info={t(`des${photo_index}`)} date={photos.at(photo_index).date} />
					<KeyMapper 
						leftClickHandler={() => leftClickHandler()} 
						rightClickHandler={() => rightClickHandler()}
						escapeHandler={() => setState('out')}
					/>
					<LeftRightSet 
						style={{
							"position": "absolute",
							"bottom": 40, 
							"height": 40,
							"width": "100vw"
						}}
						leftPosition="30vw"
						rightPosition="30vw"
						leftClickHandler={() => leftClickHandler()}
						rightClickHandler={() => rightClickHandler()}
					/>
				</div>
			}
			<Footer />
		</div>
	);
}

export default GameScreen;
