/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { IdentityProviderInput } from './IdentityProviderInput';

/**
 * Represents a Flightdeck Identity Provider resource.
 */
export type IdentityProvider = (BaseResourceType & IdentityProviderInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The name of the Flightdeck Tenant.
     */
    tenantName: string;
});

