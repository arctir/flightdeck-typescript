/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubAppIntegration } from './GithubAppIntegration';

export type GithubIntegrationInput = {
    /**
     * The base url for the GitHub API, for example https://api.github.com
     */
    apiBaseUrl?: string;
    /**
     * GitHub Apps configuration
     */
    apps?: Array<GithubAppIntegration>;
    /**
     * The hostname of the given GitHub instance
     */
    host: string;
    /**
     * The base url for GitHub raw resources, for example https://raw.githubusercontent.com
     */
    rawBaseUrl?: string;
    /**
     * Token used to authenticate requests.
     */
    token?: string;
};

