const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const fireHose = new AWS.Firehose();

// const data = {
//     message: 'This is my data. Hello world.'
// }

// const params = {
//     DeliveryStreamName: 'pubnub-twitter',
//     Record: { Data: new Buffer(JSON.stringify(tweet)) }
// }

// fireHose.putRecord(params, (err, data) => {
//     console.log(err, data);
// });

////////////////////////////////////////////////////////////Z

const PubNub = require('pubnub');

const pubnub = new PubNub({
    subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
});

pubnub.subscribe({
    channels: ['pubnub-twitter']
});

pubnub.addListener({
    message: function (message) {
        let tweet = message.message;
        // console.log(tweet);

        const params = {
            DeliveryStreamName: 'pubnub-stream',
            Record: { Data: new Buffer(JSON.stringify(tweet)) }
        }

        fireHose.putRecord(params, (err, tweet) => {
            console.log(err, tweet);
        });

    }
});

