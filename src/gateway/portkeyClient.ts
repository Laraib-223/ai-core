import Portkey from "portkey-ai";

export const portkey = new Portkey({
  apiKey: process.env.PORTKEY_API_KEY as string,
});