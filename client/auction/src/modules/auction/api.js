import { users, auctionService } from '../index';

export async function findAuctions(params) {
  try{
    const response = await auctionService.find(params);
    return {
      error: false,
      response,
    };
  } catch (err){
    return{
      error: true,
      response: err,
    };
  }
}
