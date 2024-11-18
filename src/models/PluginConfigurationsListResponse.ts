/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageInfo } from './PageInfo';
import type { PluginConfiguration } from './PluginConfiguration';

export type PluginConfigurationsListResponse = {
    /**
     * The list of Plugin Configuration resources.
     */
    items?: Array<PluginConfiguration>;
    /**
     * The total number of Plugin Configuration resources.
     */
    total: number;
    pageInfo: PageInfo;
};

