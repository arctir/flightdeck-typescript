/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogProvider } from './CatalogProvider';
import type { PageInfo } from './PageInfo';

export type CatalogProvidersListResponse = {
    /**
     * A list of Flightdeck Catalog Provider resources.
     */
    items?: Array<CatalogProvider>;
    /**
     * The total number of Flightdeck Catalog Provider resources.
     */
    total: number;
    pageInfo: PageInfo;
};

