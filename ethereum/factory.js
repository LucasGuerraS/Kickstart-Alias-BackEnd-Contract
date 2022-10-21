import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2af716e82210dE6350Ffc00745b3c29ee35D2538"
);

export default instance;
