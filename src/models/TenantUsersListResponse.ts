/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageInfo } from './PageInfo';
import type { TenantUser } from './TenantUser';

/**
 * Represents a list of Tenant User resources.
 */
export type TenantUsersListResponse = {
    /**
     * The list of Tenant User resources.
     */
    items?: Array<TenantUser>;
    /**
     * The total number of Tenant User resources.
     */
    total: number;
    pageInfo: PageInfo;
};

