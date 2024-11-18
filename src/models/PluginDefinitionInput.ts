/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginDefinitionBackendSpec } from './PluginDefinitionBackendSpec';
import type { PluginDefinitionFrontendSpec } from './PluginDefinitionFrontendSpec';

/**
 * Represents a Plugin Definition resource.
 */
export type PluginDefinitionInput = {
    /**
     * The name of the Plugin Definition.
     */
    name: string;
    /**
     * The display name of the Plugin Definition.
     */
    displayName: string;
    /**
     * The description of the Plugin Definition.
     */
    description: string;
    /**
     * The icon name of the Plugin Definition.
     */
    iconName: string;
    frontend?: PluginDefinitionFrontendSpec;
    backend?: PluginDefinitionBackendSpec;
};

