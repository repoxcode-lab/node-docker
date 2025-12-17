/**
 * Docker Network Prune Query
 */

export interface DockerNetworkPruneQuery {
  filters?: {
    until? : string;
    label? : string[];
  };
}

/**
 * Docker Network Prune Response
 */

export interface DockerNetworkPruneResponse {
  NetworksDeleted : string[];
}
