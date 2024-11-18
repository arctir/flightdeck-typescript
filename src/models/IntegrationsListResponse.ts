/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integration } from './Integration';
import type { PageInfo } from './PageInfo';

/**
 * Represents a list of Integration resources.
 */
export type IntegrationsListResponse = {
    /**
     * The list of Integration resources.
     */
    items?: Array<Integration>;
    /**
     * The total number of Integration resources.
     */
    total: number;
    pageInfo: PageInfo;
};

