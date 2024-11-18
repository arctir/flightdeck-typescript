/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { OrganizationInput } from './OrganizationInput';

/**
 * Represents a Flightdeck Organization.
 */
export type Organization = (BaseResourceType & OrganizationInput & {
    /**
     * The Flightdeck User ID of the Organization's owner.
     */
    owner: string;
    /**
     * The designated Flightdeck subdomain for this Organization.
     */
    subdomain: string;
});

