const {NftCollection} = require("./NftCollection.js");
const {Cell} = require("../../../boc");
const {serializeUri} = require("./NftUtils");

class SbtCollection extends NftCollection {
    /**
     * params   {{itemIndex: BN|number, amount: BN, itemOwnerAddress: Address, authorityAddress :Address, itemContentUri: string, queryId?: number}}
     * @return {Cell}
     */
    createMintBody(params) {
        const body = new Cell();
        body.bits.writeUint(1, 32); // OP deploy new nft
        body.bits.writeUint(params.queryId || 0, 64); // query_id
        body.bits.writeUint(params.itemIndex, 64);
        body.bits.writeCoins(params.amount);

        const nftItemContent = new Cell();
        nftItemContent.bits.writeAddress(params.itemOwnerAddress);

        const uriContent = new Cell();
        uriContent.bits.writeBytes(serializeUri(params.itemContentUri));
        nftItemContent.refs[0] = uriContent;

        const sbtItemAuthorityAddress = new Cell();
        sbtItemAuthorityAddress.bits.writeAddress(params.authorityAddress);

        body.refs[0] = nftItemContent;
        body.refs[1] = sbtItemAuthorityAddress;

        return body;
    }
}

module.exports = {SbtCollection};
