/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GithubIdentityProviderInput = {
    /**
     * The URI to redirect to after the user has authenticated.
     */
    redirectUri: string;
    /**
     * The client ID of the Github application.
     */
    clientId: string;
    /**
     * The client secret of the Github application.
     */
    clientSecret: string;
    /**
     * The base URL of the Github application.
     */
    baseUrl?: string;
    /**
     * The API URL of the Github application.
     */
    apiUrl?: string;
};

