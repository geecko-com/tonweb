import {Cell} from '../../../boc/cell';
import {HttpProvider} from '../../../providers/http-provider';
import {
    CreateGetStaticDataBodyParams,
    CreateTransferBodyParams,
    NftItem,
    NftItemData,
    NftItemOptions
} from './nft-item';

/**
 * NFT Release Candidate - may still change slightly.
 */
export declare class SbtItem extends NftItem {
    static codeHex: string;

    constructor(provider: HttpProvider, options: NftItemOptions);

    getData(): Promise<NftItemData>;

    createTransferBody(params: CreateTransferBodyParams): Promise<Cell>;

    createGetStaticDataBody(params: CreateGetStaticDataBodyParams): Cell;

    /**
     * Returns cell that contains NFT data.
     */
    protected createDataCell(): Cell;
}
