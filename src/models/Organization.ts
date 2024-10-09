/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';
import type { OrganizationInput } from './OrganizationInput';

export type Organization = (BaseResourceType & OrganizationInput & {
    owner: string;
    subdomain: string;
});

