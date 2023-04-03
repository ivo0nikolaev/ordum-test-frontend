/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/Ordum_Astar';
import type * as ReturnTypes from '../types-returns/Ordum_Astar';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/Ordum_Astar.json';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __apiPromise: ApiPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		nativeApi : ApiPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
		this.__apiPromise = nativeApi;
	}

	/**
	* getIssuerProfile
	*
	* @returns { Result<Result<ReturnTypes.IssuerProfile, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getIssuerProfile" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.IssuerProfile, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getIssuerProfile", [], __options , (result) => { return handleReturnType(result, getTypeDescription(25, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getApplicantProfile
	*
	* @returns { Result<Result<ReturnTypes.ApplicantProfile, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"getApplicantProfile" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.ApplicantProfile, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getApplicantProfile", [], __options , (result) => { return handleReturnType(result, getTypeDescription(28, DATA_TYPE_DESCRIPTIONS)); });
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
	* @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"createApplicantProfile" (
		name: string,
		account: ArgumentTypes.AccountId | null,
		teamSize: (number | string | BN),
		description: string,
		allowedAccounts: Array<ArgumentTypes.AccountId> | null,
		categories: Array<ArgumentTypes.Categories>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createProfile::createApplicantProfile", [name, account, teamSize, description, allowedAccounts, categories], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* createIssuerProfile
	*
	* @param { string } name,
	* @param { ArgumentTypes.Chains } chain,
	* @param { Array<ArgumentTypes.Categories> } categories,
	* @param { string } description,
	* @param { Array<ArgumentTypes.AccountId> } allowedAccounts,
	* @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"createIssuerProfile" (
		name: string,
		chain: ArgumentTypes.Chains,
		categories: Array<ArgumentTypes.Categories>,
		description: string,
		allowedAccounts: Array<ArgumentTypes.AccountId>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createProfile::createIssuerProfile", [name, chain, categories, description, allowedAccounts], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* updateKeys
	*
	* @param { ArgumentTypes.AccountId } account,
	* @param { ArgumentTypes.KeyAction } action,
	* @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"updateKeys" (
		account: ArgumentTypes.AccountId,
		action: ArgumentTypes.KeyAction,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createProfile::updateKeys", [account, action], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* updateIssuerProfile
	*
	* @param { string | null } description,
	* @param { Array<ArgumentTypes.Categories> | null } categories,
	* @param { ArgumentTypes.Chains | null } chain,
	* @param { boolean | null } status,
	* @returns { Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> }
	*/
	"updateIssuerProfile" (
		description: string | null,
		categories: Array<ArgumentTypes.Categories> | null,
		chain: ArgumentTypes.Chains | null,
		status: boolean | null,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createProfile::updateIssuerProfile", [description, categories, chain, status], __options , (result) => { return handleReturnType(result, getTypeDescription(32, DATA_TYPE_DESCRIPTIONS)); });
	}

}