
export type IFormRegister = {
    email           : string;
    password        : string;
    firstName       : string;
    lastName        : string;
    phoneNumber     : string;
    dayOfBirth      : any;
    isSubscription? : boolean;
	recaptcha		: string;
};

export type INewUserRequest = Omit<IFormRegister, 'recaptcha'> & {
    rePassword      : string;
};
