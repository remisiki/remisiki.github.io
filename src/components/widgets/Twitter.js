import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterTimeLine({name, theme}) {
	return (
		<TwitterTimelineEmbed
			sourceType="profile"
			screenName={name}
			// key={key}
			options={{
				height: 'calc(100vh - 245px)',
				width: '300px',
			}}
			theme={theme}
			transparent="true"
			noScrollbar="true"
			lang="ja"
		/>
	);
}

export default TwitterTimeLine;