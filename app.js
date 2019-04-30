const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const fireHose = new AWS.Firehose();

const PubNub = require('pubnub');

const pubnub = new PubNub({
    subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
});

pubnub.subscribe({
    channels: ['pubnub-twitter']
});

pubnub.addListener({
    message: function (response) {
        let tweet = {
            id: response.message.id,
            text: response.message.text,
            source: response.message.source,
            user_screen_name: response.message.user.screen_name,
            place: response.message.place ? response.message.place.full_name : null,
            hashtags: response.message.entities.hashtags,
            coordinates: response.message.coordinates,
        };

        // console.log(tweet);

        const params = {
            DeliveryStreamName: 'pubnub-twitter-stream',
            Record: { Data: new Buffer(JSON.stringify(tweet)) }
        }

        fireHose.putRecord(params);

    }
});

