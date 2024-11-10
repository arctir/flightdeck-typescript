/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginDefinitionBackendSpec } from './PluginDefinitionBackendSpec';
import type { PluginDefinitionFrontendSpec } from './PluginDefinitionFrontendSpec';

export type PluginDefinitionInput = {
    name: string;
    displayName: string;
    description: string;
    iconName: string;
    frontend?: PluginDefinitionFrontendSpec;
    backend?: PluginDefinitionBackendSpec;
};

