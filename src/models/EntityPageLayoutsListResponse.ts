/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityPageLayout } from './EntityPageLayout';
import type { PageInfo } from './PageInfo';

export type EntityPageLayoutsListResponse = {
    /**
     * A list of Flightdeck Entity Page Layout resources.
     */
    items?: Array<EntityPageLayout>;
    /**
     * The total number of Flightdeck Entity Page Layout resources.
     */
    total: number;
    pageInfo: PageInfo;
};

