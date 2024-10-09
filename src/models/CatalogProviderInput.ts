/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubCatalogProvider } from './GithubCatalogProvider';
import type { GitlabCatalogProvider } from './GitlabCatalogProvider';
import type { LocationCatalogProvider } from './LocationCatalogProvider';

export type CatalogProviderInput = {
    name: string;
    providerConfig: (GithubCatalogProvider | GitlabCatalogProvider | LocationCatalogProvider);
};

