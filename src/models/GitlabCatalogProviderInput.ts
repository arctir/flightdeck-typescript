/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskScheduleDefinitionConfig } from './TaskScheduleDefinitionConfig';

export type GitlabCatalogProviderInput = {
    /**
     * The host for the Gitlab catalog provider.
     */
    host: string;
    /**
     * The group to use for the catalog.
     */
    group?: string;
    /**
     * The branch to use for the catalog.
     */
    branch?: string;
    /**
     * The filename to use for the entity.
     */
    entityFilename?: string;
    /**
     * The project pattern to use for the catalog.
     */
    projectPattern?: string;
    /**
     * The user pattern to use for the catalog.
     */
    userPattern?: string;
    /**
     * The group pattern to use for the catalog.
     */
    groupPattern?: string;
    /**
     * Whether to skip forked repositories in the catalog.
     */
    skipForkedRepos?: boolean;
    schedule?: TaskScheduleDefinitionConfig;
};

