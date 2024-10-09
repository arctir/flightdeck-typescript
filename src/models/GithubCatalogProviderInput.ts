/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubCatalogProviderFilters } from './GithubCatalogProviderFilters';
import type { TaskScheduleDefinitionConfig } from './TaskScheduleDefinitionConfig';

export type GithubCatalogProviderInput = {
    host?: string;
    organization: string;
    catalogPath?: string;
    filters?: GithubCatalogProviderFilters;
    schedule?: TaskScheduleDefinitionConfig;
};

