/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a Gitlab Integration resource.
 */
export type GitlabIntegrationInput = {
    /**
     * The hostname of the Gitlab instance.
     */
    host: string;
    /**
     * Token used to authenticate requests.
     */
    token: string;
    /**
     * The base URL of the Gitlab instance.
     */
    baseUrl?: string;
    /**
     * The base URL of the Gitlab API.
     */
    apiBaseUrl?: string;
};

