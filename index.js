const { App } = require("@slack/bolt");

// Hardcode tokens directly here to completely bypass the broken terminal tool
const app = new App({
  token: "xoxb-2210535565-11349879002679-Z1jjIrg4FZ2O2FtyvmEi8QfZ",
  appToken: "xapp-1-A0BAR948E2E-11393595889968-2e6f00d1a56ae4f24deef8e0cbc1c1e2ff3907d2542891e2b83b070f24789d58",
  socketMode: true
});

// Register the slash command exactly as required by your assignment instructions
app.command("/annoying-cat-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  
  // Acknowledge the command within 3 seconds so Slack knows it received it
  await ack(); 
  
  const latency = Date.now() - start;
  
  // Send the latency message back to the user
  await respond({ 
    text: `Pong!\nLatency: ${latency}ms` 
  });
});

// Boot up the server connection
(async () => {
  try {
    await app.start();
    console.log("bot is running!");
  } catch (error) {
    console.error("Failed to start the bot:", error);
  }
})();
