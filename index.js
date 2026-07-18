require("dotenv").config();
const axios = require("axios");
const { App } = require("@slack/bolt");
const path = require("path");
const { randomColor, createColorPng } = require("./utils");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

app.command("/r3dev-help", async ({ ack, respond }) => {
    await ack();
    await respond({
        text: `
            Available Commands:
            \`/r3dev-ping\` - Check bot latency!
            \`/r3dev-cat\` - Get a cat fact!
            \`/r3dev-dog\` - Get a dog fact!
            \`/r3dev-color\` - Get a random color!
        `
    });
});

app.command("/r3dev-ping", async ({ command, ack, respond }) => {
    const start = Date.now();
    await ack();
    const latency = Date.now() - start;
    await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/r3dev-cat", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get("https://catfact.ninja/fact");
        console.log('Getting cat fact...');
        await respond({ text: `Cat Fact:\n${response.data.fact}` });
    } catch (err) {
        await respond({ text: "Failed to fetch a cat fact." });
    }
});

app.command("/r3dev-dog", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get("https://dogapi.dog/api/v2/facts");
        console.log('Getting dog fact...');
        await respond({ text: `Dog Fact:\n${response.data.data[0].attributes.body}` });
    } catch (err) {
        await respond({ text: "Failed to fetch a dog fact." });
    }
});

app.command("/r3dev-color", async ({ command, ack, respond, client }) => {
    await ack();

    const color = randomColor();
    await respond({ text: `Your color is: ${color}` });
});

(async () => {
    await app.start();
    console.log("bot is running!");
})();