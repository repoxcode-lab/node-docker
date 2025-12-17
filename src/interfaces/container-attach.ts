/**
 * Docker Container Attach Query
 */

export interface DockerContainerAttachQuery {
  detachKeys? : string;
  logs?       : boolean;
  stream?     : boolean;
  stdin?      : boolean;
  stdout?     : boolean;
  stderr?     : boolean;
}
