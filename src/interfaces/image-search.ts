/**
 * Docker Image Search Query
 */
export interface DockerImageSearchQuery {
  term     : string;
  limit?   : number;
  filters? : number;
}

/**
 * Docker Image Search Response
 */

export interface DockerImageSearchResponse {
  description  : string;
  is_official  : boolean;
  is_automated : boolean;
  name         : string;
  star_count   : number;
}
