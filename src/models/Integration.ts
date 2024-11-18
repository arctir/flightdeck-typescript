/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { IntegrationInput } from './IntegrationInput';

/**
 * Represents an Integration resource.
 */
export type Integration = (BaseResourceType & IntegrationInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The name of the Flightdeck Portal.
     */
    portalName: string;
});

