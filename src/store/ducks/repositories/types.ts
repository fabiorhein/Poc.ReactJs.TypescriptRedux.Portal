/**
 * Action types
 */
export enum RepositoriesTypes {
    LOAD_REQUEST = '@reporitories/LOAD_REQUEST',
    LOAD_SUCCESS = '@reporitories/LOAD_SUCCESS',
    LOAD_FAILURE = '@reporitories/LOAD_FAILURE'
}

/**
 * Data types
 */

export interface Repository {
    id: number
    name: string
}

/**
 * State type
 */

export interface RepositoriesState {
    readonly data: Repository[]
    readonly loading: boolean
    readonly error: boolean
}