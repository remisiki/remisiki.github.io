import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function TwitterTimeLine({name, theme}) {
	return (
		 <TwitterTimelineEmbed
			sourceType="profile"
			screenName={name}
			// key={key}
			options={{
				height: '70vh',
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