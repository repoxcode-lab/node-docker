/**
 * Container top prop
 */

export interface DockerContainerTopProp {
  id     : string;
  query? : DockerContainersTopQuery;
}

/**
 * Container top query
 */

export interface DockerContainersTopQuery {
  ps_args? : string;
}

/**
 * Container top response
 */

export interface DockerContainerTopResponse {
  Titles?    : string[];
  Processes? : string[][];
}
