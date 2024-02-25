// Client-side code
import { useEffect } from "react";
import Pusher from "pusher-js";

function MyComponent() {
  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", (data) => {
      console.log("Received data:", data);
    });

    return () => {
      pusher.unsubscribe("my-channel");
      pusher.disconnect();
    };
  }, []);

  return <div>Connecting to Pusher...</div>;
}

export default MyComponent;
