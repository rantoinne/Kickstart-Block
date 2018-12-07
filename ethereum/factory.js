import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(
	CampaignFactory.interface),
	'0x82d74F86Fd262614d5B8e97aCeEd823a59d127DC'
);

export default instance;