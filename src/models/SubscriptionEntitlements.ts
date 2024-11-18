/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a Flightdeck Organization's Entitlements status.
 */
export type SubscriptionEntitlements = {
    /**
     * The number of Flightdeck Portals that this Organization is entitled to.
     */
    portals: number;
    /**
     * The number of Flightdeck Tenants that this Organization is entitled to
     */
    tenants: number;
    /**
     * The number of Flightdeck Tenant Users that this Organization is entitled to
     */
    tenantUsers: number;
    /**
     * The number of Flightdeck Connections that this Organization is entitled to
     */
    connections: number;
};

