/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { PluginConfigurationInput } from './PluginConfigurationInput';

/**
 * Represents a Plugin Configuration resource.
 */
export type PluginConfiguration = (BaseResourceType & PluginConfigurationInput & {
    /**
     * The ID of the Flightdeck Organization.
     */
    organizationId: string;
    /**
     * The name of the Flightdeck Portal.
     */
    portalName: string;
});

