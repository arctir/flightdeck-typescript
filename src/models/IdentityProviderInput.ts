/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubIdentityProvider } from './GithubIdentityProvider';
import type { GitlabIdentityProvider } from './GitlabIdentityProvider';
import type { GoogleIdentityProvider } from './GoogleIdentityProvider';

export type IdentityProviderInput = {
    name: string;
    providerConfig: (GithubIdentityProvider | GitlabIdentityProvider | GoogleIdentityProvider);
};

