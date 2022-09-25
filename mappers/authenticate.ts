import dayjs from "dayjs";
import { IFormRegister, INewUserRequest } from "../models/authenticate";

export const mapToNewUserRequest = (
	dataRow: IFormRegister
): INewUserRequest => {
	const {
		password,
		dayOfBirth,
		email,
		firstName,
		phoneNumber,
		lastName,
		isSubscription,
	} = dataRow;
	const dateFormat = dayjs(dayOfBirth.$).format("YYYY-MM-DD");

	return {
		dayOfBirth: dateFormat,
		rePassword: password,
		email,
		firstName,
		lastName,
		password,
		phoneNumber,
		isSubscription,
	};
};
