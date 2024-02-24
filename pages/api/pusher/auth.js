const Pusher = require("pusher");
const pusher = require("../../../lib/pusher");

async function handler(req, res) {
  const { socket_id, channel_name, username } = req.body;
  const randomString = Math.random().toString(36).slice(2);

  const presenceData = {
    user_id: randomString,
    user_info: {
      username: "@" + username,
    },
  };

  try {
    const auth = pusher.authenticate(socket_id, channel_name, presenceData);
    res.send(auth);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
