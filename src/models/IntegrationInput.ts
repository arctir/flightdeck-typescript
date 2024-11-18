/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubIntegration } from './GithubIntegration';
import type { GitlabIntegration } from './GitlabIntegration';

/**
 * Represents an Integration resource.
 */
export type IntegrationInput = {
    /**
     * The name of the Integration.
     */
    name: string;
    /**
     * The configuration of the Integration.
     */
    integrationConfig: (GithubIntegration | GitlabIntegration);
};

