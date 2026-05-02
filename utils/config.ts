declare const process: {
    env: {
        LOGIN_URL?: string;
        LOGIN_USERNAME?: string;
        LOGIN_PASSWORD?: string;
    };
};

export const loginUrl = process.env.LOGIN_URL!;
export const credentials = {
    username: process.env.LOGIN_USERNAME!,
    password: process.env.LOGIN_PASSWORD!,
};