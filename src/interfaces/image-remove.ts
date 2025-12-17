/**
 * Docker Image Remove Query
 */

export interface DockerImageRemoveQuery {
  force?   : boolean;
  noprune? : boolean;
}

/**
 * Docker Image Remove Response
 */

export interface DockerImageRemoveResponse {
  Untagged? : string[];
  Deleted?  : string[];
}
