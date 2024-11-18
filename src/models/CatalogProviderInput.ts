/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubCatalogProvider } from './GithubCatalogProvider';
import type { GitlabCatalogProvider } from './GitlabCatalogProvider';
import type { LocationCatalogProvider } from './LocationCatalogProvider';

export type CatalogProviderInput = {
    /**
     * The name of the Catalog Provider resource.
     */
    name: string;
    /**
     * The configuration for the Flightdeck Catalog Provider.
     */
    providerConfig: (GithubCatalogProvider | GitlabCatalogProvider | LocationCatalogProvider);
};

