import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6232acdEa22AbB0ba7E80747c74a9dFcdb650187"
);

export default instance;


//TODO Updated Version

// import web3 from "./web3";
// import CampaignFactory from "./build/CampaignFactory.json";
 
// const instance = new web3.eth.Contract(
//   CampaignFactory.abi,
//   "0x74d6c5f4426DfCE08e4C5019B832C7c4f13c45bE"
// );
 
// export default instance;