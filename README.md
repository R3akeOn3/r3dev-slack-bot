# R3Dev Slack Bot

A simple Slack bot with 4 built-in commands:
* `/r3dev-ping` - Check the bot's latency.
* `/r3dev-cat` - Get a random cat fact.
* `/r3dev-dog` - Get a random dog fact.
* `/r3dev-color` - Get a random color code.

## How to run it

1. Clone the repository and move into the project folder:
```bash
git clone [https://github.com/R3akeOn3/r3dev-slack-bot.git](https://github.com/R3akeOn3/r3dev-slack-bot.git)
cd r3dev-slack-bot

```

2. Install the required dependencies:

```bash
npm install

```

3. Configure your Slack credentials in a `.env` file, then start the bot:
```env
SLACK_BOT_TOKEN=slack_bot_token
SLACK_APP_TOKEN=slack_bot_app
```
4. Run the bot:
```bash
node index.js

```
