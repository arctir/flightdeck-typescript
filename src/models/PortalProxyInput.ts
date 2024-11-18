/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortalProxyHeader } from './PortalProxyHeader';
import type { PortalProxyPathRewrite } from './PortalProxyPathRewrite';

/**
 * Represents a Portal Proxy resource.
 */
export type PortalProxyInput = {
    /**
     * The name of the Portal Proxy.
     */
    name: string;
    /**
     * The endpoint of the Portal Proxy.
     */
    endpoint: string;
    /**
     * The HTTP target of the Portal Proxy.
     */
    target: string;
    /**
     * The list of Portal Proxy Header resources to be applied.
     */
    httpHeaders?: Array<PortalProxyHeader> | null;
    /**
     * The list of Portal Proxy Path Rewrite resources to be applied.
     */
    pathRewrite?: Array<PortalProxyPathRewrite> | null;
    /**
     * Indicates whether to change the origin of the Portal Proxy.
     */
    changeOrigin?: boolean;
    /**
     * The list of allowed HTTP methods.
     */
    allowedMethods?: Array<string> | null;
    /**
     * The list of allowed HTTP headers.
     */
    allowedHeaders?: Array<string> | null;
    /**
     * The credential configuration of the Portal Proxy.
     */
    credentials: PortalProxyInput.credentials;
};

export namespace PortalProxyInput {

    /**
     * The credential configuration of the Portal Proxy.
     */
    export enum credentials {
        REQUIRE = 'require',
        FORWARD = 'forward',
        DANGEROUSLY_ALLOW_UNAUTHENTICATED = 'dangerously-allow-unauthenticated',
    }


}

