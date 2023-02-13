import BN from 'bn.js';
import { Cell } from '../../../boc/cell';
import { HttpProvider } from '../../../providers/http-provider';
import { Address } from '../../../utils/address';
import { Contract, ContractMethods, ContractOptions } from '../../contract';
import { NftItem } from './nft-item';
import {
    CollectionData,
    CreateChangeOwnerBodyParams,
    CreateGetRoyaltyParamsBodyParams,
    NftCollectionMethods,
    NftCollectionOptions, NftItemContent, RoyaltyParams
} from "./nft-collection";

export interface SbtMintBodyParams {
    itemIndex: number;
    amount: BN;
    authorityAddress: Address;
    itemOwnerAddress: Address;
    itemContentUri: string;
    queryId?: number;
}
/**
 * NFT Release Candidate - may still change slightly.
 */
export declare class SbtCollection extends Contract<NftCollectionOptions, NftCollectionMethods> {
    private readonly royaltyBase;
    private readonly royaltyFactor;
    constructor(provider: HttpProvider, options: NftCollectionOptions);
    createMintBody(params: SbtMintBodyParams): Cell;
    createGetRoyaltyParamsBody(params: CreateGetRoyaltyParamsBodyParams): Cell;
    createChangeOwnerBody(params: CreateChangeOwnerBodyParams): Cell;
    getCollectionData(): Promise<CollectionData>;
    getNftItemContent(nftItem: NftItem): Promise<NftItemContent>;
    getNftItemAddressByIndex(index: number): Promise<Address>;
    getRoyaltyParams(): Promise<RoyaltyParams>;
    /**
     * Returns cell that contains NFT collection data.
     */
    protected createDataCell(): Cell;
}
