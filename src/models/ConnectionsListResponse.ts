/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Connection } from './Connection';
import type { PageInfo } from './PageInfo';

export type ConnectionsListResponse = {
    /**
     * A list of Flightdeck Connections.
     */
    items?: Array<Connection>;
    /**
     * The total number of Flightdeck Connections.
     */
    total: number;
    pageInfo: PageInfo;
};

