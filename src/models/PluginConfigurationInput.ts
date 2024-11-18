/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginConfigurationDefinitionSpec } from './PluginConfigurationDefinitionSpec';

/**
 * Represents a Plugin Configuration resource.
 */
export type PluginConfigurationInput = {
    /**
     * Indicates whether the Plugin Configuration is enabled.
     */
    enabled: boolean;
    /**
     * The configuration of the Plugin on the frontend.
     */
    frontendConfig?: Record<string, any>;
    /**
     * The configuration of the Plugin on the backend.
     */
    backendConfig?: Record<string, any>;
    definition: PluginConfigurationDefinitionSpec;
};

