export declare class ApiError extends Error {
    type: string;
    status: number;
    time: string;
    constructor(message: string, type: string, status: number);
}
