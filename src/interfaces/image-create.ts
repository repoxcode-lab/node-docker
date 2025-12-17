/**
 * Docker Image Create Query
 */

export interface DockerImageCreateQuery {
  fromImage? : string;
  fromSrc?   : string;
  repo?      : string;
  tag?       : string;
  message?   : string;
  changes?   : string[];
  platform?  : string;
}

/**
 * Docker Image Create Header
 */

export interface DockerImageCreateHeader {
  'X-Registry-Auth'? : string;
}
