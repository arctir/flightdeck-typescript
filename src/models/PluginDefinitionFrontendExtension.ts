/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a Plugin Definition Frontend Extension resource.
 */
export type PluginDefinitionFrontendExtension = {
    /**
     * The unique Entity Extension path.
     */
    path: string;
    /**
     * The type of the Entity Extension.
     */
    type: PluginDefinitionFrontendExtension.type;
    /**
     * The title of the Entity Extension.
     */
    title: string;
    /**
     * The description of the Entity Extension.
     */
    description: string;
    /**
     * The configuration schema of the Entity Extension.
     */
    configSchema?: Record<string, any>;
    /**
     * The UI schema of the Entity Extension.
     */
    uiSchema?: Record<string, any>;
};

export namespace PluginDefinitionFrontendExtension {

    /**
     * The type of the Entity Extension.
     */
    export enum type {
        CARD = 'Card',
        CONTENT = 'Content',
    }


}

