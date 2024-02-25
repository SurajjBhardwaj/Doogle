// pages/api/websocket.js

import Pusher from "pusher";

export default function handler(req, res) {
  if (req.method === "POST") {
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_KEY,
      secret: process.env.PUSHER_SECRET,
      cluster: process.env.PUSHER_CLUSTER,
      useTLS: true,
    });

    pusher.trigger("my-channel", "my-event", {
      message: "hello world",
    });

    res.status(200).json({ message: "Pusher message sent" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
