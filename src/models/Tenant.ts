/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { TenantInput } from './TenantInput';

/**
 * Represents a Tenant resource.
 */
export type Tenant = (BaseResourceType & TenantInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The internal identifier of the Tenant.
     */
    identifier: string;
    /**
     * The URL of the Tenant's OIDC Issuer.
     */
    issuerUrl: string;
});

