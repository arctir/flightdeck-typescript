/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityProvider } from './IdentityProvider';
import type { PageInfo } from './PageInfo';

export type IdentityProvidersListResponse = {
    /**
     * The list of Flightdeck Identity Provider resources.
     */
    items?: Array<IdentityProvider>;
    /**
     * The total number of Flightdeck Identity Provider resources.
     */
    total: number;
    pageInfo: PageInfo;
};

