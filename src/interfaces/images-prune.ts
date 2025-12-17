/**
 * Docker Image Prune Query
 */

export interface DockerImagesPruneQuery {
  filters? : string;
}

/**
 * Docker Image Prune Response
 */

export interface DockerImagesPruneResponse {
  ImagesDeleted: {
    Untagged : string;
    Deleted  : string;
  }[];
  SpaceReclaimed : number;
}
