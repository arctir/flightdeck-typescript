/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscriptionInfo } from './SubscriptionInfo';

export type OrganizationInput = {
    /**
     * The name of the Flightdeck Organization.
     */
    name: string;
    /**
     * The ID of the Flightdeck Cluster that manages this Organization.
     */
    clusterId: string;
    subscription?: SubscriptionInfo;
};

