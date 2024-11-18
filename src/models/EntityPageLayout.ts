/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { EntityPageLayoutInput } from './EntityPageLayoutInput';

/**
 * Represents a Flightdeck Entity Page Layout resource.
 */
export type EntityPageLayout = (BaseResourceType & EntityPageLayoutInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The name of the Flightdeck Portal.
     */
    portalName: string;
});

