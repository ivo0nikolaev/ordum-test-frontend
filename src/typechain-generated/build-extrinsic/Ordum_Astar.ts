/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/Ordum_Astar';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	private __nativeContract : ContractPromise;
	private __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
	}
	/**
	 * getIssuerProfile
	 *
	*/
	"getIssuerProfile" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getIssuerProfile", [], __options);
	}

	/**
	 * getApplicantProfile
	 *
	*/
	"getApplicantProfile" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getApplicantProfile", [], __options);
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
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProfile::createApplicantProfile", [name, account, teamSize, description, allowedAccounts, categories], __options);
	}

	/**
	 * createIssuerProfile
	 *
	 * @param { string } name,
	 * @param { ArgumentTypes.Chains } chain,
	 * @param { Array<ArgumentTypes.Categories> } categories,
	 * @param { string } description,
	 * @param { Array<ArgumentTypes.AccountId> } allowedAccounts,
	*/
	"createIssuerProfile" (
		name: string,
		chain: ArgumentTypes.Chains,
		categories: Array<ArgumentTypes.Categories>,
		description: string,
		allowedAccounts: Array<ArgumentTypes.AccountId>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProfile::createIssuerProfile", [name, chain, categories, description, allowedAccounts], __options);
	}

	/**
	 * updateKeys
	 *
	 * @param { ArgumentTypes.AccountId } account,
	 * @param { ArgumentTypes.KeyAction } action,
	*/
	"updateKeys" (
		account: ArgumentTypes.AccountId,
		action: ArgumentTypes.KeyAction,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProfile::updateKeys", [account, action], __options);
	}

	/**
	 * updateIssuerProfile
	 *
	 * @param { string | null } description,
	 * @param { Array<ArgumentTypes.Categories> | null } categories,
	 * @param { ArgumentTypes.Chains | null } chain,
	 * @param { boolean | null } status,
	*/
	"updateIssuerProfile" (
		description: string | null,
		categories: Array<ArgumentTypes.Categories> | null,
		chain: ArgumentTypes.Chains | null,
		status: boolean | null,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProfile::updateIssuerProfile", [description, categories, chain, status], __options);
	}

}