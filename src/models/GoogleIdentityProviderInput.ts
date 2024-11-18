/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GoogleIdentityProviderInput = {
    /**
     * The URI to redirect to after the user has authenticated.
     */
    redirectUri?: string;
    /**
     * The client ID of the Google application.
     */
    clientId?: string;
    /**
     * The client secret of the Google application.
     */
    clientSecret?: string;
    /**
     * The hosted domain of the Google application.
     */
    hostedDomain?: string;
    /**
     * The user IP of the Google application.
     */
    userIp?: boolean;
    /**
     * Whether to refresh the token of the Google application.
     */
    refreshToken?: boolean;
};

