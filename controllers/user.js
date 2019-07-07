require("dotenv").config();
import { WebClient } from "@slack/web-api";

const web = new WebClient(process.env.SLACK_TOKEN);
const getChannels = async (req, res, next) => {
  try {
    const authData = await web.auth.test();
    console.log(web);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

export default { getChannels };
