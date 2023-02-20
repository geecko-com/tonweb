const {NftCollection} = require("./NftCollection.js");
const {Cell} = require("../../../boc");
const {serializeUri} = require("./NftUtils");

class SbtCollection extends NftCollection {
    /**
     * params   {{itemIndex: BN|number, amount: BN, itemOwnerAddress: Address, authorityAddress :Address, itemContentUri: string, queryId?: number}}
     * @return {Cell}
     */
    createMintBody(params) {
        const body = super.createMintBody(params);

        const sbtItemAuthorityAddress = new Cell();
        sbtItemAuthorityAddress.bits.writeAddress(params.authorityAddress);

        body.refs[1] = sbtItemAuthorityAddress;

        return body;
    }
}

module.exports = {SbtCollection};
