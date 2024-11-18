/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GithubAuthProvider } from './GithubAuthProvider';
import type { GitlabAuthProvider } from './GitlabAuthProvider';
import type { GoogleAuthProvider } from './GoogleAuthProvider';

export type AuthProviderInput = {
    /**
     * The name of the Auth Provider resource.
     */
    name: string;
    providerConfig: (GithubAuthProvider | GitlabAuthProvider | GoogleAuthProvider);
};

