/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/Ordum_Astar';
import type * as ReturnTypes from '../types-returns/Ordum_Astar';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from '../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/Ordum_Astar.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/Ordum_Astar.json';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* getIssuerProfile
	*
	* @returns { Result<Result<ReturnTypes.IssuerProfile, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getIssuerProfile" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.IssuerProfile, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getIssuerProfile", [], __options, (result) => { return handleReturnType(result, getTypeDescription(25, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getApplicantProfile
	*
	* @returns { Result<Result<ReturnTypes.ApplicantProfile, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getApplicantProfile" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.ApplicantProfile, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getApplicantProfile", [], __options, (result) => { return handleReturnType(result, getTypeDescription(28, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* createApplicantProfile
	*
	* @param { string } name,
	* @param { ArgumentTypes.AccountId | null } account,
	* @param { (number | string | BN) } teamSize,
	* @param { string } description,
	* @param { Array<ArgumentTypes.AccountId> | null } allowedAccounts,
	* @param { Array<ArgumentTypes.Categories> } categories,
	* @returns { void }
	*/
	"createApplicantProfile" (
		name: string,
		account: ArgumentTypes.AccountId | null,
		teamSize: (number | string | BN),
		description: string,
		allowedAccounts: Array<ArgumentTypes.AccountId> | null,
		categories: Array<ArgumentTypes.Categories>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProfile::createApplicantProfile", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [name, account, teamSize, description, allowedAccounts, categories], __options);
	}

	/**
	* createIssuerProfile
	*
	* @param { string } name,
	* @param { ArgumentTypes.Chains } chain,
	* @param { Array<ArgumentTypes.Categories> } categories,
	* @param { string } description,
	* @param { Array<ArgumentTypes.AccountId> } allowedAccounts,
	* @returns { void }
	*/
	"createIssuerProfile" (
		name: string,
		chain: ArgumentTypes.Chains,
		categories: Array<ArgumentTypes.Categories>,
		description: string,
		allowedAccounts: Array<ArgumentTypes.AccountId>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProfile::createIssuerProfile", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [name, chain, categories, description, allowedAccounts], __options);
	}

	/**
	* updateKeys
	*
	* @param { ArgumentTypes.AccountId } account,
	* @param { ArgumentTypes.KeyAction } action,
	* @returns { void }
	*/
	"updateKeys" (
		account: ArgumentTypes.AccountId,
		action: ArgumentTypes.KeyAction,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProfile::updateKeys", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [account, action], __options);
	}

	/**
	* updateIssuerProfile
	*
	* @param { string | null } description,
	* @param { Array<ArgumentTypes.Categories> | null } categories,
	* @param { ArgumentTypes.Chains | null } chain,
	* @param { boolean | null } status,
	* @returns { void }
	*/
	"updateIssuerProfile" (
		description: string | null,
		categories: Array<ArgumentTypes.Categories> | null,
		chain: ArgumentTypes.Chains | null,
		status: boolean | null,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProfile::updateIssuerProfile", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [description, categories, chain, status], __options);
	}

}