
const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js')
const client = new Client({

  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const token = 'TOKEN'; // exchange for your Bot token

function sendScheduledMessage(channel) {

// Change the programmed message to the desired one

  const ScheduledMessage = "ScheduledMessage";
  channel.send(ScheduledMessage);
}

client.on('ready', () => {
  console.log(`Bot connected as ${client.user.tag}`);

  const intervalMorning = setInterval(() => {
    const now = new Date();
    if (now.getHours() === 10) // set the shipping hour to the desired one
    if (now.getMinutes() === 0) // set the minutes of the desired time
    {
      const channel2ID = 'channelID'; // change to the ID of the channel on which you want to send the scheduled message
      const channel2 = client.channels.cache.get(channel2ID);
      if (channel2) {
        sendScheduledMessage(channel2);
      }
    }
  }, 60000);

  const intervalNight = setInterval(() => {
    const now = new Date();
    if (now.getHours() === 22) //set the shipping hour to the desired one
    if (now.getMinutes() === 0) //set the minutes of the desired time
    {
      const channel2ID = 'channelID'; // change to the ID of the channel on which you want to send the scheduled message
      const channel2 = client.channels.cache.get(channel2ID);
      if (channel2) {
        sendScheduledMessage(channel2);
      }
    }
  }, 60000); 

  // You can adjust the interval as needed

});

client.on('guildMemberAdd', async (member) => {
  const WelcomeChannelID = 'channelID'; // Change to the ID of the channel where the welcome message will be sent
  const WelcomeChannel = member.guild.channels.cache.get(WelcomeChannelID);

  const channel1ID = 'channelID'; // change if you want
  const channel1 = member.guild.channels.cache.get(channel1ID);

  const channel2ID = 'channelID'; // change if you want
  const channel2 = member.guild.channels.cache.get(channel2ID);

  const channel3ID = 'channelID'; // change if you want
  const channel3 = member.guild.channels.cache.get(channel3ID);

  if (WelcomeChannel)
  if (channel1)
  if (channel2)
  if (channel3) 
  {

    const gifUrl = 'your gif'; // Change to the link of the gif you want to use

    // change to the welcome message you want

    const WelcomeChannel = `welcome <@${member.user.id}>!`;

    WelcomeChannel.send({ content: WelcomeChannel, files: [gifUrl] });
  }
});

client.login(token);
