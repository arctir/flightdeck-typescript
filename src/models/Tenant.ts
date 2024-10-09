/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { TenantInput } from './TenantInput';

export type Tenant = (BaseResourceType & TenantInput & {
    organizationId: string;
    identifier: string;
    issuerUrl: string;
});

