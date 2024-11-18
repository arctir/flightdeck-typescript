/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { PortalProxyInput } from './PortalProxyInput';

/**
 * Represents a Portal Proxy resource.
 */
export type PortalProxy = (BaseResourceType & PortalProxyInput & {
    organizationId: string;
    portalName: string;
});

