/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { TenantUserInput } from './TenantUserInput';

/**
 * Represents a Tenant User resource.
 */
export type TenantUser = (BaseResourceType & TenantUserInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The name of the Flightdeck Tenant.
     */
    tenantName: string;
});

