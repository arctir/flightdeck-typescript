/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageInfo } from './PageInfo';
import type { PortalVersion } from './PortalVersion';

export type PortalVersionsListResponse = {
    /**
     * A lidt of Flightdeck Portal Version resources.
     */
    items?: Array<PortalVersion>;
    /**
     * The total number of Flightdeck Portal Version resources.
     */
    total: number;
    pageInfo: PageInfo;
};

