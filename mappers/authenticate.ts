import dayjs from "dayjs";
import { IFormRegister, INewUserRequest } from "../models/authenticate";

export const mapToNewUserRequest = (
	dataRow: IFormRegister
): INewUserRequest => {
	const { password, dayOfBirth } = dataRow;
	const dateFormat = dayjs(dayOfBirth.$).format("YYYY-MM-DD");
	return { ...dataRow, dayOfBirth: dateFormat, rePassword: password };
};
