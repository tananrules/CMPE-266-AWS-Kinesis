const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const PubNub = require('pubnub');
const pubnub = new PubNub({
    subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
});

pubnub.subscribe({
    channels: ['pubnub-twitter']
});

const striptags = require('striptags');
const fireHose = new AWS.Firehose();


const supportedLanguages = {
    ar: "Arabic",
    zh: "Chinese",
    cs: "Czech",
    da: "Danish",
    nl: "Dutch",
    en: "English",
    fi: "Finnish",
    fr: "French",
    de: "German",
    he: "Hebrew",
    id: "Indonesian",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    pt: "Portuguese",
    pl: "Polish",
    ru: "Russian",
    es: "Spanish",
    sv: "Swedish",
    tr: "Turkish"
};

pubnub.addListener({
    message: function (response) {
        
        if(typeof supportedLanguages[response.message.lang] !== "undefined") {
            let tweet = {
                id: response.message.id,
                lang: response.lang,
                text: response.message.text,
                source: striptags(response.message.source),
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

            fireHose.putRecord(params, (err, tweet) => {
                console.log(err, tweet);
            });
        }
    }
});

