import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function TwitterTimeLine() {
	return (
		 <TwitterTimelineEmbed
			sourceType="profile"
			screenName="remisiki"
			options={{
				height: '70vh',
				width: '300px',
			}}
			// theme="dark"
			transparent="true"
			noScrollbar="true"
			lang="ja"
		/>
	);
}

export default TwitterTimeLine;