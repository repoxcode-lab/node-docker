export interface DockerContainerWaitQuery {
  condition? : 'not-running' | 'next-exit' | 'removed';
}

export interface DockerContainerWaitResponse {
  StatusCode : number;
  Error: {
    Message : string;
  };
}
