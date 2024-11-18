/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { CatalogProviderInput } from './CatalogProviderInput';

/**
 * Represents a Flightdeck Catalog Provider.
 */
export type CatalogProvider = (BaseResourceType & CatalogProviderInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The name of the Flightdeck Portal.
     */
    portalName: string;
});

