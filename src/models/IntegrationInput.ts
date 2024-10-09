/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubIntegration } from './GithubIntegration';
import type { GitlabIntegration } from './GitlabIntegration';

export type IntegrationInput = {
    name: string;
    integrationConfig: (GithubIntegration | GitlabIntegration);
};

