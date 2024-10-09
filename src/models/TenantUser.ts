/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { TenantUserInput } from './TenantUserInput';

export type TenantUser = (BaseResourceType & TenantUserInput & {
    organizationId: string;
    tenantName: string;
});

