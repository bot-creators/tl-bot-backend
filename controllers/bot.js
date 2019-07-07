require("dotenv").config();
import { WebClient } from "@slack/web-api";

const web = new WebClient(process.env.SLACK_TOKEN);
const postMessage = async (req, res, next) => {
  try {
    const authData = await web.auth.test();
    const data = await web.chat.postMessage({
      channel: authData.user_id,
      ...req.body
    });
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

export default { postMessage };
