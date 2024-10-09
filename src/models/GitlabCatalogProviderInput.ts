/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskScheduleDefinitionConfig } from './TaskScheduleDefinitionConfig';

export type GitlabCatalogProviderInput = {
    host: string;
    group?: string;
    branch?: string;
    entityFilename?: string;
    projectPattern?: string;
    userPattern?: string;
    groupPattern?: string;
    skipForkedRepos?: boolean;
    schedule?: TaskScheduleDefinitionConfig;
};

