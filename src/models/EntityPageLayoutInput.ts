/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityPageCardSpec } from './EntityPageCardSpec';
import type { EntityPageContentSpec } from './EntityPageContentSpec';

export type EntityPageLayoutInput = {
    /**
     * The name of the Flightdeck Entity Page Layout resource.
     */
    name: string;
    /**
     * Indicates whether the Flightdeck Page Layout is the activated.
     */
    active?: boolean;
    /**
     * The order in which to display Entity Content pages.
     */
    contentOrder?: Array<EntityPageContentSpec> | null;
    /**
     * The order in which to display Entity Card components.
     */
    cardOrder?: Array<EntityPageCardSpec> | null;
};

