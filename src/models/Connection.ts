/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { ConnectionInput } from './ConnectionInput';

/**
 * Represents a Flightdeck Connection resource.
 */
export type Connection = (BaseResourceType & ConnectionInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The name of the Flightdeck Portal.
     */
    portalName: string;
});

