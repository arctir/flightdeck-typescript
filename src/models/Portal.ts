/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { PortalInput } from './PortalInput';
import type { PortalStatus } from './PortalStatus';
import type { PortalVersion } from './PortalVersion';

/**
 * Represents a Portal resource.
 */
export type Portal = (BaseResourceType & PortalInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The primary URL of the Portal.
     */
    url: string;
    /**
     * The hostname of the Portal.
     */
    hostname: string;
    /**
     * The identifier of the Portal.
     */
    identifier: string;
    /**
     * The current reconciliation status of the Portal.
     */
    status?: PortalStatus;
    /**
     * The current version of the Portal.
     */
    version?: PortalVersion;
});

