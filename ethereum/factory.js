import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6232acdEa22AbB0ba7E80747c74a9dFcdb650187"
);

export default instance;
