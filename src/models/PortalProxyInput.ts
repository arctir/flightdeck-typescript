/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortalProxyHeader } from './PortalProxyHeader';
import type { PortalProxyPathRewrite } from './PortalProxyPathRewrite';

export type PortalProxyInput = {
    name: string;
    endpoint?: string;
    target: string;
    httpHeaders?: Array<PortalProxyHeader>;
    pathRewrite?: Array<PortalProxyPathRewrite>;
    changeOrigin?: boolean;
    allowedMethods?: Array<string>;
    allowedHeaders?: Array<string>;
    credentials?: PortalProxyInput.credentials;
};

export namespace PortalProxyInput {

    export enum credentials {
        REQUIRE = 'require',
        FORWARD = 'forward',
        DANGEROUSLY_ALLOW_UNAUTHENTICATED = 'dangerously-allow-unauthenticated',
    }


}

