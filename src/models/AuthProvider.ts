/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthProviderInput } from './AuthProviderInput';
import type { BaseResourceType } from './BaseResourceType';

/**
 * Represents a Flightdeck Auth Provider resource.
 */
export type AuthProvider = (BaseResourceType & AuthProviderInput & {
    organizationId: string;
    portalName: string;
});

