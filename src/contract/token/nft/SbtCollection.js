const {NftCollection} = require("./NftCollection.js");
const {Cell} = require("../../../boc");

class SbtCollection extends NftCollection {
    /**
     * params   {{itemIndex: BN|number, amount: BN, itemOwnerAddress: Address, authorityAddress :Address, itemContentUri: string, queryId?: number}}
     * @return {Cell}
     */
    createMintBody(params) {
        let body = super.createMintBody(params);

        const sbtItemAuthorityAddress = new Cell();
        sbtItemAuthorityAddress.bits.writeAddress(params.authorityAddress);

        body.refs[0] = sbtItemAuthorityAddress;

        return body;
    }
}

module.exports = {SbtCollection};
