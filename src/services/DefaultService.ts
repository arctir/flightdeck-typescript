/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthProvider } from '../models/AuthProvider';
import type { AuthProviderInput } from '../models/AuthProviderInput';
import type { AuthProvidersListResponse } from '../models/AuthProvidersListResponse';
import type { CatalogProvider } from '../models/CatalogProvider';
import type { CatalogProviderInput } from '../models/CatalogProviderInput';
import type { CatalogProvidersListResponse } from '../models/CatalogProvidersListResponse';
import type { Cluster } from '../models/Cluster';
import type { ClustersListResponse } from '../models/ClustersListResponse';
import type { Connection } from '../models/Connection';
import type { ConnectionInput } from '../models/ConnectionInput';
import type { ConnectionsListResponse } from '../models/ConnectionsListResponse';
import type { EntityPageLayout } from '../models/EntityPageLayout';
import type { EntityPageLayoutInput } from '../models/EntityPageLayoutInput';
import type { EntityPageLayoutsListResponse } from '../models/EntityPageLayoutsListResponse';
import type { IdentityProvider } from '../models/IdentityProvider';
import type { IdentityProviderInput } from '../models/IdentityProviderInput';
import type { IdentityProvidersListResponse } from '../models/IdentityProvidersListResponse';
import type { Integration } from '../models/Integration';
import type { IntegrationInput } from '../models/IntegrationInput';
import type { IntegrationsListResponse } from '../models/IntegrationsListResponse';
import type { Organization } from '../models/Organization';
import type { OrganizationInput } from '../models/OrganizationInput';
import type { OrganizationsListResponse } from '../models/OrganizationsListResponse';
import type { PluginConfiguration } from '../models/PluginConfiguration';
import type { PluginConfigurationInput } from '../models/PluginConfigurationInput';
import type { PluginConfigurationsListResponse } from '../models/PluginConfigurationsListResponse';
import type { PluginDefinition } from '../models/PluginDefinition';
import type { PluginDefinitionsListResponse } from '../models/PluginDefinitionsListResponse';
import type { Portal } from '../models/Portal';
import type { PortalInput } from '../models/PortalInput';
import type { PortalProxiesListResponse } from '../models/PortalProxiesListResponse';
import type { PortalProxy } from '../models/PortalProxy';
import type { PortalProxyInput } from '../models/PortalProxyInput';
import type { PortalsListResponse } from '../models/PortalsListResponse';
import type { PortalStatus } from '../models/PortalStatus';
import type { PortalVersion } from '../models/PortalVersion';
import type { PortalVersionsListResponse } from '../models/PortalVersionsListResponse';
import type { Tenant } from '../models/Tenant';
import type { TenantInput } from '../models/TenantInput';
import type { TenantsListResponse } from '../models/TenantsListResponse';
import type { TenantUser } from '../models/TenantUser';
import type { TenantUserInput } from '../models/TenantUserInput';
import type { TenantUsersListResponse } from '../models/TenantUsersListResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve a list of Clusters
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @param name Search for a Cluster by name
     * @returns ClustersListResponse A list of Clusters
     * @throws ApiError
     */
    public getClusters(
        limit?: number,
        prev?: string,
        next?: string,
        name?: string,
    ): CancelablePromise<ClustersListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/clusters',
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
                'name': name,
            },
        });
    }

    /**
     * Retrieve a Cluster
     * @param clusterId
     * @returns Cluster The Cluster
     * @throws ApiError
     */
    public getClusterById(
        clusterId: string,
    ): CancelablePromise<Cluster> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/clusters/{clusterId}',
            path: {
                'clusterId': clusterId,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Retrieve a list of Organizations for this user
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @param name Search for an Organization by name
     * @returns OrganizationsListResponse A list of Organizations
     * @throws ApiError
     */
    public getOrganizations(
        limit?: number,
        prev?: string,
        next?: string,
        name?: string,
    ): CancelablePromise<OrganizationsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs',
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
                'name': name,
            },
        });
    }

    /**
     * Create a new Organization
     * @param requestBody
     * @returns Organization The newly created Organization
     * @throws ApiError
     */
    public createOrganization(
        requestBody: OrganizationInput,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve Organization by ID
     * @param orgId The name of the Organization to update or retrieve
     * @returns Organization The requested Organization
     * @throws ApiError
     */
    public getOrganizationById(
        orgId: string,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}',
            path: {
                'orgId': orgId,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update Organization by ID
     * @param orgId The name of the Organization to update or retrieve
     * @param requestBody
     * @returns Organization The updated organization
     * @throws ApiError
     */
    public updateOrganizationById(
        orgId: string,
        requestBody: OrganizationInput,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}',
            path: {
                'orgId': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete Organization by ID
     * @param orgId The name of the Organization to update or retrieve
     * @returns void
     * @throws ApiError
     */
    public deleteOrganizationById(
        orgId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}',
            path: {
                'orgId': orgId,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Retrieve a list of Connections
     * @param orgId The ID of the Organization
     * @param portalName The name pf the Portal
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns ConnectionsListResponse A list of Connections
     * @throws ApiError
     */
    public getConnections(
        orgId: string,
        portalName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<ConnectionsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/connections',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
        });
    }

    /**
     * Create a new Connection
     * @param orgId The ID of the Organization
     * @param portalName The name pf the Portal
     * @param requestBody
     * @returns Connection The newly created Connection
     * @throws ApiError
     */
    public createConnection(
        orgId: string,
        portalName: string,
        requestBody: ConnectionInput,
    ): CancelablePromise<Connection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/portals/{portalName}/connections',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a Connection
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param name The name of the Connection
     * @returns Connection The Connection
     * @throws ApiError
     */
    public getConnection(
        orgId: string,
        portalName: string,
        name: string,
    ): CancelablePromise<Connection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/connections/{name}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'name': name,
            },
        });
    }

    /**
     * Update Connection
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param name The name of the Connection
     * @param requestBody
     * @returns Connection The updated Connection
     * @throws ApiError
     */
    public updateConnection(
        orgId: string,
        portalName: string,
        name: string,
        requestBody: ConnectionInput,
    ): CancelablePromise<Connection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/portals/{portalName}/connections/{name}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete Connection
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param name The name of the Connection
     * @returns void
     * @throws ApiError
     */
    public deleteConnection(
        orgId: string,
        portalName: string,
        name: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/portals/{portalName}/connections/{name}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'name': name,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Retrieve a list of PortalVersions
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @param versionName Search for a Version by name
     * @returns PortalVersionsListResponse A list of PortalVersions
     * @throws ApiError
     */
    public getPortalVersions(
        limit?: number,
        prev?: string,
        next?: string,
        versionName?: string,
    ): CancelablePromise<PortalVersionsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/versions',
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
                'versionName': versionName,
            },
        });
    }

    /**
     * Retrieve a PortalVersion
     * @param versionId The version of the PortalVersion
     * @returns PortalVersion The PortalVersion
     * @throws ApiError
     */
    public getPortalVersion(
        versionId: string,
    ): CancelablePromise<PortalVersion> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/versions/{versionId}',
            path: {
                'versionId': versionId,
            },
        });
    }

    /**
     * Retrieve a list of Plugin Definitions for a PortalVersion
     * @param versionId The version of the PortalVersion
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns PluginDefinitionsListResponse A list of PortalVersion Plugin Definitions
     * @throws ApiError
     */
    public getPortalVersionPluginDefinitions(
        versionId: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<PluginDefinitionsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/versions/{versionId}/plugindefinitions',
            path: {
                'versionId': versionId,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
        });
    }

    /**
     * Retrieve a Plugin Definition
     * @param versionId The version of the PortalVersion
     * @param name The name of the Plugin Definition
     * @returns PluginDefinition The PortalVersion Plugin Definition
     * @throws ApiError
     */
    public getPortalVersionPluginDefinition(
        versionId: string,
        name: string,
    ): CancelablePromise<PluginDefinition> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/versions/{versionId}/plugindefinitions/{name}',
            path: {
                'versionId': versionId,
                'name': name,
            },
        });
    }

    /**
     * Retrieve a list of tenants
     * @param orgId The ID of the Organizzation
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns TenantsListResponse A list of tenants
     * @throws ApiError
     */
    public getTenants(
        orgId: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<TenantsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/tenants',
            path: {
                'orgId': orgId,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
        });
    }

    /**
     * Create a new tenant
     * @param orgId The ID of the Organizzation
     * @param requestBody
     * @returns Tenant The newly created tenant
     * @throws ApiError
     */
    public createTenant(
        orgId: string,
        requestBody: TenantInput,
    ): CancelablePromise<Tenant> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/tenants',
            path: {
                'orgId': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a tenant by name
     * @param orgId The ID of the org
     * @param tenantName The name of the tenant to retrieve or update
     * @returns Tenant The requested tenant
     * @throws ApiError
     */
    public getTenant(
        orgId: string,
        tenantName: string,
    ): CancelablePromise<Tenant> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/tenants/{tenantName}',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update a tenant by name
     * @param orgId The ID of the org
     * @param tenantName The name of the tenant to retrieve or update
     * @param requestBody
     * @returns Tenant The updated tenant
     * @throws ApiError
     */
    public updateTenant(
        orgId: string,
        tenantName: string,
        requestBody: TenantInput,
    ): CancelablePromise<Tenant> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/tenants/{tenantName}',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete a tenant by name
     * @param orgId The ID of the org
     * @param tenantName The name of the tenant to retrieve or update
     * @returns void
     * @throws ApiError
     */
    public deleteTenant(
        orgId: string,
        tenantName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/tenants/{tenantName}',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a list of Tenant Users
     * @param orgId The ID of the org
     * @param tenantName The name of the tenant
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns TenantUsersListResponse The Tenant Users
     * @throws ApiError
     */
    public getTenantUsers(
        orgId: string,
        tenantName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<TenantUsersListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/tenants/{tenantName}/users',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Create a TenantUser resource
     * @param orgId The ID of the org
     * @param tenantName The name of the tenant
     * @param requestBody
     * @returns TenantUser The newly created TenantUser
     * @throws ApiError
     */
    public createTenantUser(
        orgId: string,
        tenantName: string,
        requestBody: TenantUserInput,
    ): CancelablePromise<TenantUser> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/tenants/{tenantName}/users',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a Tenant User
     * @param orgId The ID of the org
     * @param tenantName The name of the tenant
     * @param username The username of the user
     * @returns TenantUser The Tenant User
     * @throws ApiError
     */
    public getTenantUser(
        orgId: string,
        tenantName: string,
        username: string,
    ): CancelablePromise<TenantUser> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/tenants/{tenantName}/users/{username}',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
                'username': username,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete a Tenant User
     * @param orgId The ID of the org
     * @param tenantName The name of the tenant
     * @param username The username of the user
     * @returns void
     * @throws ApiError
     */
    public deleteTenantUser(
        orgId: string,
        tenantName: string,
        username: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/tenants/{tenantName}/users/{username}',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
                'username': username,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Retrieve a list of portals
     * @param orgId The ID of the Organizzation
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns PortalsListResponse A list of portals
     * @throws ApiError
     */
    public getPortals(
        orgId: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<PortalsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals',
            path: {
                'orgId': orgId,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
        });
    }

    /**
     * Create a new portal
     * @param orgId The ID of the Organizzation
     * @param requestBody
     * @returns Portal The newly created portal
     * @throws ApiError
     */
    public createPortal(
        orgId: string,
        requestBody: PortalInput,
    ): CancelablePromise<Portal> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/portals',
            path: {
                'orgId': orgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a portal by name
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @returns Portal The requested portal
     * @throws ApiError
     */
    public getPortal(
        orgId: string,
        portalName: string,
    ): CancelablePromise<Portal> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update a portal by name
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param requestBody
     * @returns Portal The updated portal
     * @throws ApiError
     */
    public updatePortal(
        orgId: string,
        portalName: string,
        requestBody: PortalInput,
    ): CancelablePromise<Portal> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/portals/{portalName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete a portal by name
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @returns void
     * @throws ApiError
     */
    public deletePortal(
        orgId: string,
        portalName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/portals/{portalName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get Portal status
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @returns PortalStatus Current Portal Status
     * @throws ApiError
     */
    public getPortalStatus(
        orgId: string,
        portalName: string,
    ): CancelablePromise<PortalStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/status',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a list of Catalog Providers
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns CatalogProvidersListResponse List of Catalog Providers
     * @throws ApiError
     */
    public getCatalogProviders(
        orgId: string,
        portalName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<CatalogProvidersListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/catalogproviders',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Create a Catalog Provider
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param requestBody
     * @returns CatalogProvider The Catalog Provider was created
     * @throws ApiError
     */
    public createCatalogProvider(
        orgId: string,
        portalName: string,
        requestBody: CatalogProviderInput,
    ): CancelablePromise<CatalogProvider> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/portals/{portalName}/catalogproviders',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a Catalog Provider
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param providerName The name of the Catalog Provider
     * @returns CatalogProvider The Catalog Provider
     * @throws ApiError
     */
    public getCatalogProvider(
        orgId: string,
        portalName: string,
        providerName: string,
    ): CancelablePromise<CatalogProvider> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/catalogproviders/{providerName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'providerName': providerName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update a Catalog Provider
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param providerName The name of the Catalog Provider
     * @param requestBody
     * @returns CatalogProvider The Catalog Provider was updated
     * @throws ApiError
     */
    public updateCatalogProvider(
        orgId: string,
        portalName: string,
        providerName: string,
        requestBody: CatalogProviderInput,
    ): CancelablePromise<CatalogProvider> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/portals/{portalName}/catalogproviders/{providerName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'providerName': providerName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete a Catalog Provider
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param providerName The name of the Catalog Provider
     * @returns void
     * @throws ApiError
     */
    public deleteCatalogProvider(
        orgId: string,
        portalName: string,
        providerName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/portals/{portalName}/catalogproviders/{providerName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'providerName': providerName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a list of Integrations
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns IntegrationsListResponse List of Integrations
     * @throws ApiError
     */
    public getIntegrations(
        orgId: string,
        portalName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<IntegrationsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/integrations',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Create an Integration
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param requestBody
     * @returns Integration The Integration was created
     * @throws ApiError
     */
    public createIntegration(
        orgId: string,
        portalName: string,
        requestBody: IntegrationInput,
    ): CancelablePromise<Integration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/portals/{portalName}/integrations',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get an Integration
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param integrationName The name of the Integration
     * @returns Integration The Integration
     * @throws ApiError
     */
    public getIntegration(
        orgId: string,
        portalName: string,
        integrationName: string,
    ): CancelablePromise<Integration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/integrations/{integrationName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'integrationName': integrationName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update an Integration
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param integrationName The name of the Integration
     * @param requestBody
     * @returns Integration The Integration was updated
     * @throws ApiError
     */
    public updateIntegration(
        orgId: string,
        portalName: string,
        integrationName: string,
        requestBody: IntegrationInput,
    ): CancelablePromise<Integration> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/portals/{portalName}/integrations/{integrationName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'integrationName': integrationName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete an Integration
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param integrationName The name of the Integration
     * @returns void
     * @throws ApiError
     */
    public deleteIntegration(
        orgId: string,
        portalName: string,
        integrationName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/portals/{portalName}/integrations/{integrationName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'integrationName': integrationName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a list of Identity Providers
     * @param orgId The ID of the Organization
     * @param tenantName The name of the Tenant
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns IdentityProvidersListResponse List of Identity Providers
     * @throws ApiError
     */
    public getIdentityProviders(
        orgId: string,
        tenantName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<IdentityProvidersListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/tenants/{tenantName}/identityproviders',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Create an Identity Provider
     * @param orgId The ID of the Organization
     * @param tenantName The name of the Tenant
     * @param requestBody
     * @returns IdentityProvider The Identity Provider was created
     * @throws ApiError
     */
    public createIdentityProvider(
        orgId: string,
        tenantName: string,
        requestBody: IdentityProviderInput,
    ): CancelablePromise<IdentityProvider> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/tenants/{tenantName}/identityproviders',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get an Identity Provider
     * @param orgId The ID of the org
     * @param tenantName The name of the portal
     * @param providerName The name of the Identity Provider
     * @returns IdentityProvider The Identity Provider
     * @throws ApiError
     */
    public getIdentityProvider(
        orgId: string,
        tenantName: string,
        providerName: string,
    ): CancelablePromise<IdentityProvider> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/tenants/{tenantName}/identityproviders/{providerName}',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
                'providerName': providerName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update an Identity Provider
     * @param orgId The ID of the org
     * @param tenantName The name of the portal
     * @param providerName The name of the Identity Provider
     * @param requestBody
     * @returns IdentityProvider The Identity Provider was updated
     * @throws ApiError
     */
    public updateIdentityProvider(
        orgId: string,
        tenantName: string,
        providerName: string,
        requestBody: IdentityProviderInput,
    ): CancelablePromise<IdentityProvider> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/tenants/{tenantName}/identityproviders/{providerName}',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
                'providerName': providerName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete an Identity Provider
     * @param orgId The ID of the org
     * @param tenantName The name of the portal
     * @param providerName The name of the Identity Provider
     * @returns void
     * @throws ApiError
     */
    public deleteIdentityProvider(
        orgId: string,
        tenantName: string,
        providerName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/tenants/{tenantName}/identityproviders/{providerName}',
            path: {
                'orgId': orgId,
                'tenantName': tenantName,
                'providerName': providerName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a list of Proxies
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns PortalProxiesListResponse List of Portal Proxies
     * @throws ApiError
     */
    public getPortalProxies(
        orgId: string,
        portalName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<PortalProxiesListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/proxies',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Create a Portal Proxy
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param requestBody
     * @returns PortalProxy The Portal Proxy was created
     * @throws ApiError
     */
    public createPortalProxy(
        orgId: string,
        portalName: string,
        requestBody: PortalProxyInput,
    ): CancelablePromise<PortalProxy> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/portals/{portalName}/proxies',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a Portal Proxy
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param proxyName The name of the Portal proxy
     * @returns PortalProxy The Portal Proxy
     * @throws ApiError
     */
    public getPortalProxy(
        orgId: string,
        portalName: string,
        proxyName: string,
    ): CancelablePromise<PortalProxy> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/proxies/{proxyName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'proxyName': proxyName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update a Portal Proxy
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param proxyName The name of the Portal proxy
     * @param requestBody
     * @returns PortalProxy The Portal Proxy was updated
     * @throws ApiError
     */
    public updatePortalProxy(
        orgId: string,
        portalName: string,
        proxyName: string,
        requestBody: PortalProxyInput,
    ): CancelablePromise<PortalProxy> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/portals/{portalName}/proxies/{proxyName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'proxyName': proxyName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete a Portal Proxy
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param proxyName The name of the Portal proxy
     * @returns void
     * @throws ApiError
     */
    public deletePortalProxy(
        orgId: string,
        portalName: string,
        proxyName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/portals/{portalName}/proxies/{proxyName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'proxyName': proxyName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Retrieve a list of Plugin Configurations
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns PluginConfigurationsListResponse A list of Plugin Configurations
     * @throws ApiError
     */
    public getPluginConfigurations(
        orgId: string,
        portalName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<PluginConfigurationsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/pluginconfigurations',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
        });
    }

    /**
     * Create a new Plugin Configuration
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param requestBody
     * @returns PluginConfiguration The newly created Plugin Configuration
     * @throws ApiError
     */
    public createPluginConfiguration(
        orgId: string,
        portalName: string,
        requestBody: PluginConfigurationInput,
    ): CancelablePromise<PluginConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/portals/{portalName}/pluginconfigurations',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a Plugin Configurations
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param pluginName The name of the Plugin
     * @returns PluginConfiguration A Plugin Configurations
     * @throws ApiError
     */
    public getPluginConfiguration(
        orgId: string,
        portalName: string,
        pluginName: string,
    ): CancelablePromise<PluginConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/pluginconfigurations/{pluginName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'pluginName': pluginName,
            },
        });
    }

    /**
     * Update a Plugin Configuration
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param pluginName The name of the Plugin
     * @param requestBody
     * @returns PluginConfiguration The Plugin Configuation was updated
     * @throws ApiError
     */
    public updatePluginConfiguration(
        orgId: string,
        portalName: string,
        pluginName: string,
        requestBody: PluginConfigurationInput,
    ): CancelablePromise<PluginConfiguration> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/portals/{portalName}/pluginconfigurations/{pluginName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'pluginName': pluginName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete a Plugin Configuration
     * @param orgId The ID of the Organization
     * @param portalName The name of the Portal
     * @param pluginName The name of the Plugin
     * @returns void
     * @throws ApiError
     */
    public deletePluginConfiguration(
        orgId: string,
        portalName: string,
        pluginName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/portals/{portalName}/pluginconfigurations/{pluginName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'pluginName': pluginName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a list of Auth Providers
     * @param orgId The ID of the Organization
     * @param portalName The name of the portal
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns AuthProvidersListResponse List of Auth Providers
     * @throws ApiError
     */
    public getAuthProviders(
        orgId: string,
        portalName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<AuthProvidersListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/authproviders',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Create an Auth Provider
     * @param orgId The ID of the Organization
     * @param portalName The name of the portal
     * @param requestBody
     * @returns AuthProvider The Auth Provider was created
     * @throws ApiError
     */
    public createAuthProvider(
        orgId: string,
        portalName: string,
        requestBody: AuthProviderInput,
    ): CancelablePromise<AuthProvider> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/portals/{portalName}/authproviders',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get an Auth Provider
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param providerName The name of the Auth Provider
     * @returns AuthProvider The Auth Provider
     * @throws ApiError
     */
    public getAuthProvider(
        orgId: string,
        portalName: string,
        providerName: string,
    ): CancelablePromise<AuthProvider> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/authproviders/{providerName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'providerName': providerName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update an Auth Provider
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param providerName The name of the Auth Provider
     * @param requestBody
     * @returns AuthProvider The Auth Provider was updated
     * @throws ApiError
     */
    public updateAuthProvider(
        orgId: string,
        portalName: string,
        providerName: string,
        requestBody: AuthProviderInput,
    ): CancelablePromise<AuthProvider> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/portals/{portalName}/authproviders/{providerName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'providerName': providerName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete an Auth Provider
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param providerName The name of the Auth Provider
     * @returns void
     * @throws ApiError
     */
    public deleteAuthProvider(
        orgId: string,
        portalName: string,
        providerName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/portals/{portalName}/authproviders/{providerName}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'providerName': providerName,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get a list of Entity Page Layouts
     * @param orgId The ID of the Organization
     * @param portalName The name of the portal
     * @param limit Limit number of items
     * @param prev The previous cursor
     * @param next The next cursor
     * @returns EntityPageLayoutsListResponse List of Entity Page Layouts
     * @throws ApiError
     */
    public getEntityPageLayouts(
        orgId: string,
        portalName: string,
        limit?: number,
        prev?: string,
        next?: string,
    ): CancelablePromise<EntityPageLayoutsListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/entitypagelayouts',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            query: {
                'limit': limit,
                'prev': prev,
                'next': next,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Create an Entity Page Layout
     * @param orgId The ID of the Organization
     * @param portalName The name of the portal
     * @param requestBody
     * @returns EntityPageLayout The Entity Page Layout was created
     * @throws ApiError
     */
    public createEntityPageLayout(
        orgId: string,
        portalName: string,
        requestBody: EntityPageLayoutInput,
    ): CancelablePromise<EntityPageLayout> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/orgs/{orgId}/portals/{portalName}/entitypagelayouts',
            path: {
                'orgId': orgId,
                'portalName': portalName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Get an Entity Page Layout
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param name The name of the EntityPageLayout
     * @returns EntityPageLayout The Entity Page Layout
     * @throws ApiError
     */
    public getEntityPageLayout(
        orgId: string,
        portalName: string,
        name: string,
    ): CancelablePromise<EntityPageLayout> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/orgs/{orgId}/portals/{portalName}/entitypagelayouts/{name}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'name': name,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Update an Entity Page Layout
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param name The name of the EntityPageLayout
     * @param requestBody
     * @returns EntityPageLayout The Entity Page Layout was updated
     * @throws ApiError
     */
    public updateEntityPageLayout(
        orgId: string,
        portalName: string,
        name: string,
        requestBody: EntityPageLayoutInput,
    ): CancelablePromise<EntityPageLayout> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/orgs/{orgId}/portals/{portalName}/entitypagelayouts/{name}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `The resource was not found`,
            },
        });
    }

    /**
     * Delete an Entity Page Layout
     * @param orgId The ID of the org
     * @param portalName The name of the portal
     * @param name The name of the EntityPageLayout
     * @returns void
     * @throws ApiError
     */
    public deleteEntityPageLayout(
        orgId: string,
        portalName: string,
        name: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/orgs/{orgId}/portals/{portalName}/entitypagelayouts/{name}',
            path: {
                'orgId': orgId,
                'portalName': portalName,
                'name': name,
            },
            errors: {
                404: `The resource was not found`,
            },
        });
    }

}
