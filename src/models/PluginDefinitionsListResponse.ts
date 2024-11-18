/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageInfo } from './PageInfo';
import type { PluginDefinition } from './PluginDefinition';

/**
 * Represents a list of Plugin Definition resources.
 */
export type PluginDefinitionsListResponse = {
    /**
     * The list of Plugin Definition resources.
     */
    items?: Array<PluginDefinition>;
    /**
     * The total number of Plugin Definition resources.
     */
    total: number;
    pageInfo: PageInfo;
};

