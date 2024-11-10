/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginDefinitionFrontendExtension } from './PluginDefinitionFrontendExtension';
import type { PluginNameVersionSpec } from './PluginNameVersionSpec';

export type PluginDefinitionFrontendSpec = {
    plugins?: Array<PluginNameVersionSpec>;
    configSchema?: Record<string, any>;
    uiSchema?: Record<string, any>;
    extensions?: Array<PluginDefinitionFrontendExtension>;
};

