/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubCatalogProviderFilters } from './GithubCatalogProviderFilters';
import type { TaskScheduleDefinitionConfig } from './TaskScheduleDefinitionConfig';

export type GithubCatalogProviderInput = {
    /**
     * The host for the Github catalog provider.
     */
    host?: string;
    /**
     * The organization to use for the catalog.
     */
    organization: string;
    /**
     * The path to the catalog file.
     */
    catalogPath?: string;
    filters?: GithubCatalogProviderFilters;
    schedule?: TaskScheduleDefinitionConfig;
};

