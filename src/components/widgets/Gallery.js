import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useTranslation } from 'react-i18next';

function Img({src, handler, index}) {
	return (
		<div className="wrap" onClick={() => handler(index)}>
			<LazyLoadImage src={src} className="photo" effect="blur" />
		</div>
	);
}

function ViewSource({src}) {
	const { t, i18n } = useTranslation();
	return (
		<a href={src} className="original" onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">
			{t("Original")}
		</a>
	);
}

function Description({date, info}) {
	return (
		<div className="photo_info" onClick={(e) => e.stopPropagation()}>
			<span>
				{date}
				<br />
				{info}
			</span>
		</div>
	);
}

export { Img, ViewSource, Description };