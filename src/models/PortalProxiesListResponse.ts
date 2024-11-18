/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageInfo } from './PageInfo';
import type { PortalProxy } from './PortalProxy';

/**
 * Represents a list of Portal Proxy resources.
 */
export type PortalProxiesListResponse = {
    /**
     * The list of Portal Proxy resources.
     */
    items?: Array<PortalProxy>;
    /**
     * The total number of Portal Proxy resources.
     */
    total: number;
    pageInfo: PageInfo;
};

