/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';

/**
 * Represents a Flightdeck Cluster resource.
 */
export type Cluster = (BaseResourceType & {
    /**
     * The name of the Cluster resource.
     */
    name: string;
    /**
     * The common name of the Cluster resource.
     */
    displayName: string;
    /**
     * The region where the Cluster is located.
     */
    region: string;
});

