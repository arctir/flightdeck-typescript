/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { IdentityProviderInput } from './IdentityProviderInput';

export type IdentityProvider = (BaseResourceType & IdentityProviderInput & {
    organizationId: string;
    tenantName: string;
});

