export interface DockerContainerPruneQuery {
  filters?: {
    until? : string;
    label? : string[];
  };
}

export interface DockerContainerPruneResponse {
  ContainersDeleted : string[];
  SpaceReclaimed    : number;
}
