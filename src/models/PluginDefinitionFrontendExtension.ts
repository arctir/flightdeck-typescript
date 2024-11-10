/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PluginDefinitionFrontendExtension = {
    path: string;
    type: PluginDefinitionFrontendExtension.type;
    title: string;
    description: string;
    configSchema?: Record<string, any>;
    uiSchema?: Record<string, any>;
};

export namespace PluginDefinitionFrontendExtension {

    export enum type {
        CARD = 'Card',
        CONTENT = 'Content',
    }


}

