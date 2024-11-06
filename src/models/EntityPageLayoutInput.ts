/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityPageCardSpec } from './EntityPageCardSpec';
import type { EntityPageContentSpec } from './EntityPageContentSpec';

export type EntityPageLayoutInput = {
    name: string;
    active?: boolean;
    contentOrder?: Array<EntityPageContentSpec> | null;
    cardOrder?: Array<EntityPageCardSpec> | null;
};

