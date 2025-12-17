/**
 * Docker Image Push Query
 */

export interface DockerImagePushQuery {
  tag?      : string;
  platform? : string;
}

/**
 * Docker Image Push Header
 */

export interface DockerImagePushHeader {
  'X-Registry-Auth' : string;
}
