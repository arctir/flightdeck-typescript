/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubIdentityProvider } from './GithubIdentityProvider';
import type { GitlabIdentityProvider } from './GitlabIdentityProvider';
import type { GoogleIdentityProvider } from './GoogleIdentityProvider';

export type IdentityProviderInput = {
    /**
     * The name of the Flightdeck Identity Provider resource.
     */
    name: string;
    /**
     * The configuration of the Identity Provider.
     */
    providerConfig: (GithubIdentityProvider | GitlabIdentityProvider | GoogleIdentityProvider);
};

