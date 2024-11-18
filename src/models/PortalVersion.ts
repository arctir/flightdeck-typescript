/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResourceType } from './BaseResourceType';

/**
 * Represents a Flightdeck Portal Version resource.
 */
export type PortalVersion = (BaseResourceType & {
    /**
     * The human-readable semver version of the Flightdeck Portal.
     */
    version: string;
    /**
     * The version's major release number.
     */
    major: number;
    /**
     * The version's minor release number.
     */
    minor: number;
    /**
     * The version's patch release number.
     */
    patch: number;
    /**
     * The version's revision release number.
     */
    rev: number;
});

