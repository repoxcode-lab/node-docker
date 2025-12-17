/**
 * Docker container log prop
 */

export interface DockerContainerLogProp {
  id     : string;
  query? : DockerContainerLogQuery;
}

/**
 * Docker container log query
 */

export interface DockerContainerLogQuery {
  follow?     : boolean;
  stdout?     : boolean;
  stderr?     : boolean;
  since?      : number;
  until?      : number;
  timestamps? : boolean;
  tail?       : string;
}
