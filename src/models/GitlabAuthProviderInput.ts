/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GitlabAuthProviderInput = {
    /**
     * The client ID for the Gitlab OAuth2 provider.
     */
    clientId: string;
    /**
     * The client secret for the Gitlab OAuth2 provider.
     */
    clientSecret: string;
    /**
     * The audience for the Gitlab OAuth2 provider.
     */
    audience?: string;
    /**
     * The callback URL for the Gitlab OAuth2 provider.
     */
    callbackUrl?: string;
    /**
     * Any additional scopes necessary for the Gitlab OAuth2 provider.
     */
    additionalScopes?: Array<string>;
};

