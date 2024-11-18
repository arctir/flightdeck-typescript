/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageInfo } from './PageInfo';
import type { Tenant } from './Tenant';

/**
 * Represents a list of Tenant resources.
 */
export type TenantsListResponse = {
    /**
     * The list of Tenant resources.
     */
    items?: Array<Tenant>;
    /**
     * The total number of Tenant resources.
     */
    total: number;
    pageInfo: PageInfo;
};

