/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginDefinitionFrontendExtension } from './PluginDefinitionFrontendExtension';
import type { PluginNameVersionSpec } from './PluginNameVersionSpec';

/**
 * Represents a Plugin Definition Frontend resource.
 */
export type PluginDefinitionFrontendSpec = {
    /**
     * The list of Plugin Name Version resources.
     */
    plugins?: Array<PluginNameVersionSpec>;
    /**
     * The configuration schema of the Plugin.
     */
    configSchema?: Record<string, any>;
    /**
     * The UI schema of the Plugin.
     */
    uiSchema?: Record<string, any>;
    /**
     * The list of Plugin Definition Frontend Extension resources.
     */
    extensions?: Array<PluginDefinitionFrontendExtension>;
};

