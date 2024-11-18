/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubCatalogProviderFiltersTopic } from './GithubCatalogProviderFiltersTopic';

export type GithubCatalogProviderFilters = {
    /**
     * The branch to use for the catalog.
     */
    branch?: string;
    /**
     * The repository to use for the catalog.
     */
    repository?: string;
    /**
     * Whether to include forks in the catalog.
     */
    allowForks?: boolean;
    topic?: GithubCatalogProviderFiltersTopic;
    /**
     * The visibility of the repositories to include in the catalog.
     */
    visibility?: Array<'private' | 'internal' | 'public'>;
};

