/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GithubAuthProviderInput = {
    /**
     * The client ID for the Github OAuth2 provider.
     */
    clientId: string;
    /**
     * The client secret for the Github OAuth2 provider.
     */
    clientSecret: string;
    /**
     * The callback URL for the Github OAuth2 provider.
     */
    callbackUrl?: string | null;
    /**
     * The instance URL for the Github Enterprise instance.
     */
    enterpriseInstanceUrl?: string | null;
    /**
     * Any additional scopes necessary for the Github OAuth2 provider.
     */
    additionalScopes?: Array<string> | null;
};

