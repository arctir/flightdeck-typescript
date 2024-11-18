/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a Portal resource.
 */
export type PortalInput = {
    /**
     * The name of the Portal.
     */
    name: string;
    /**
     * The HTML title of the Portal.
     */
    title: string;
    /**
     * The name of the Organization operating this Portal.
     */
    organizationName: string;
    /**
     * The primary domain of the Portal.
     */
    domain: string;
    /**
     * The ID of the Portal Version.
     */
    versionId: string;
    /**
     * The name of the Tenant providing user idenity to this Portal.
     */
    tenantName: string;
    /**
     * A list of alternate domains for the Portal.
     */
    alternateDomains: Array<string>;
};

