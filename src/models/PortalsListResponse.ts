/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageInfo } from './PageInfo';
import type { Portal } from './Portal';

/**
 * Represents a list of Portal resources.
 */
export type PortalsListResponse = {
    /**
     * The list of Portal resources.
     */
    items?: Array<Portal>;
    /**
     * The total number of Portal resources.
     */
    total: number;
    pageInfo: PageInfo;
};

