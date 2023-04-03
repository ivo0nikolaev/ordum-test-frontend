import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export enum Categories {
	publicGood = 'PublicGood',
	infrastructure = 'Infrastructure',
	mediaArt = 'MediaArt'
}

export type IssuerProfile = {
	name: string,
	id: number,
	chain: Chains,
	isActive: boolean,
	registrationDate: number,
	categories: Array<Categories>,
	description: string,
	applications: Array<number> | null
}

export enum Chains {
	polkadot = 'Polkadot',
	offChain = 'OffChain'
}

export type AccountId = string | number[]

export type ApplicantProfile = {
	name: string,
	teamSize: number,
	accountId: AccountId,
	description: string,
	registeredTime: number,
	applications: number | null,
	categories: Array<Categories>
}

export type KeyManagement = {
	admin: AccountId,
	keyPointer: AccountId,
	allowedKeys: Array<AccountId>
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export enum Error {
	accountExists = 'AccountExists',
	notAuthorized = 'NotAuthorized',
	accountDontExists = 'AccountDontExists',
	profileDontExists = 'ProfileDontExists',
	maxKeysExceeded = 'MaxKeysExceeded',
	accountExistsOrMaxExceeded = 'AccountExistsOrMaxExceeded',
	unexpectedError = 'UnexpectedError'
}

export enum KeyAction {
	add = 'ADD',
	remove = 'REMOVE',
	changeAdmin = 'ChangeAdmin'
}

