/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubCatalogProviderFiltersTopic } from './GithubCatalogProviderFiltersTopic';

export type GithubCatalogProviderFilters = {
    branch?: string;
    repository?: string;
    allowForks?: boolean;
    topic?: GithubCatalogProviderFiltersTopic;
    visibility?: Array<'private' | 'internal' | 'public'>;
};

