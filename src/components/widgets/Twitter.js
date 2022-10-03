import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterTimeLine({name, theme}) {
	return (
		<div className="twitter-tl float no-scroll-bar">
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName={name}
				options={{
					width: 300,
				}}
				theme={theme}
				transparent="true"
				noScrollbar="true"
				lang="ja"
			/>
		</div>
	);
}

export default TwitterTimeLine;