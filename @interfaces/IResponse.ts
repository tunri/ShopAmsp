export type IDatumResponse<T = any> = {
    count       : number;
    next        : string | null;
    previous    : string | null;
    results     : T;
};


export type IAxiosResponse<T = any > = {
    data?       : T;
    status?     : number;
    statusText? : string;
    headers?    : any;
    config?     : any;
    request?    : any;
}