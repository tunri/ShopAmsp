export type IFormRegister = {
    email           : string;
    password        : string;
    firstName       : string;
    lastName        : string;
    phoneNumber     : string;
    dayOfBirth      : any;
    isSubscription? : boolean;
};

export type INewUserRequest = IFormRegister & {
    rePassword      : string;
};
