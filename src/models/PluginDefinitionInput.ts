/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginDefinitionFrontendEntities } from './PluginDefinitionFrontendEntities';

export type PluginDefinitionInput = {
    name: string;
    version: number;
    displayName: string;
    description: string;
    iconName: string;
    frontend: boolean;
    backend: boolean;
    configSchema?: Record<string, any>;
    uiSchema?: Record<string, any>;
    configTemplate?: string;
    frontendEntities?: PluginDefinitionFrontendEntities;
};

