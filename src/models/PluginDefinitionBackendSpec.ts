/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginNameVersionSpec } from './PluginNameVersionSpec';

/**
 * Represents a Plugin Definition Backend resource.
 */
export type PluginDefinitionBackendSpec = {
    /**
     * The list of Plugin Name Version resources.
     */
    plugins?: Array<PluginNameVersionSpec>;
    /**
     * The configuration schema of the Plugin.
     */
    configSchema?: Record<string, any>;
    uiSchema?: Record<string, any>;
};

