const {NftCollection} = require("./NftCollection.js");
const {Cell} = require("../../../boc");

class SbtCollection extends NftCollection {
    /**
     * params   {{itemIndex: BN|number, amount: BN, itemOwnerAddress: Address, authorityAddress :Address, itemContentUri: string, queryId?: number}}
     * @return {Cell}
     */
   createMintBody(params) {
       let body = super.createMintBody(params);

       body.bits.writeAddress(params.authorityAddress);

       return body;
   }
}

module.exports = {SbtCollection};
