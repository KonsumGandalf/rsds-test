/**
 * Describes the shape of the environment object.
 *
 * Use type-merging to extend this interface with your properties.
 *
 *
 * @example
 * ```ts
 * declare module '@bma/shared/angular-environment' {
 *
 *     interface IEnvironment {
 *         production: boolean;
 *         apiUrl: string;
 *     }
 * }
 * ```
 */
export interface IEnvironment {
    apiUrl: string;
}
