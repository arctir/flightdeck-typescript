/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginConfigurationFrontendEntitiesConfig } from './PluginConfigurationFrontendEntitiesConfig';

export type PluginConfigurationInput = {
    enabled: boolean;
    frontendEntityConfig?: PluginConfigurationFrontendEntitiesConfig;
    configValue?: Record<string, any>;
    definition: {
        name: string;
        version: number;
    };
};

