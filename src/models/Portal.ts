/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { PortalInput } from './PortalInput';
import type { PortalStatus } from './PortalStatus';

export type Portal = (BaseResourceType & PortalInput & {
    organizationId: string;
    url: string;
    hostname: string;
    identifier: string;
    status?: PortalStatus;
});

