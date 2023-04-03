import type * as EventTypes from '../event-types/Ordum_Astar';
import type {ContractPromise} from "@polkadot/api-contract";
import type {ApiPromise} from "@polkadot/api";
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/Ordum_Astar.json';
import {getEventTypeDescription} from "../shared/utils";
import {handleEventReturn} from "@727-ventures/typechain-types";

export default class EventsClass {
	private __nativeContract : ContractPromise;
	private __api : ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		api : ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__api = api;
	}

	public subscribeOnIssuerAccountCreatedEvent(callback : (event : EventTypes.IssuerAccountCreated) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('IssuerAccountCreated', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.IssuerAccountCreated);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'IssuerAccountCreated');
	}

	public subscribeOnApplicantAccountCreatedEvent(callback : (event : EventTypes.ApplicantAccountCreated) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ApplicantAccountCreated', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ApplicantAccountCreated);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ApplicantAccountCreated');
	}

	public subscribeOnIssuerUpdatedEvent(callback : (event : EventTypes.IssuerUpdated) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('IssuerUpdated', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.IssuerUpdated);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'IssuerUpdated');
	}

	public subscribeOnApplicantUpdatedEvent(callback : (event : EventTypes.ApplicantUpdated) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ApplicantUpdated', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ApplicantUpdated);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ApplicantUpdated');
	}


	private __subscribeOnEvent(
		callback : (args: any[], event: any) => void,
		filter : (eventName: string) => boolean = () => true
	) {
		// @ts-ignore
		return this.__api.query.system.events((events) => {
			events.forEach((record: any) => {
				const { event } = record;

				if (event.method == 'ContractEmitted') {
					const [address, data] = record.event.data;

					if (address.toString() === this.__nativeContract.address.toString()) {
						const {args, event} = this.__nativeContract.abi.decodeEvent(data);

						if (filter(event.identifier.toString()))
							callback(args, event);
					}
				}
			});
		});
	}

}