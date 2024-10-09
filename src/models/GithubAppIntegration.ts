/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GithubAppIntegration = {
    /**
     * List of installation owners allowed to be used by this GitHub app. The GitHub UI does not provide a way to list the installations.
     * However you can list the installations with the GitHub API. You can find the list of installations here:
     * https://api.github.com/app/installations
     * The relevant documentation for this is here.
     * https://docs.github.com/en/rest/reference/apps#list-installations-for-the-authenticated-app--code-samples
     */
    allowedInstallationOwners?: Array<string>;
    /**
     * The numeric GitHub App ID, string for environment variables
     */
    appId: string;
    /**
     * The client ID to use
     */
    clientId: string;
    /**
     * The client secret to use
     */
    clientSecret: string;
    /**
     * The private key to use for auth against the app
     */
    privateKey: string;
    /**
     * The secret used for webhooks
     */
    webhookSecret: string;
};

