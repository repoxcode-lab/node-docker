export interface DockerVolumePruneQuery {
  filters?: {
    label? : string[];
    all?   : boolean;
  };
}

export interface DockerVolumePruneResponse {
  VolumesDeleted : string[];
  SpaceReclaimed : number;
}
