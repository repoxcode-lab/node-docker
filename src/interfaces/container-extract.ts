/**
 * Docker Container Extract Query
 */

export interface DockerContainerExtractQuery {
  path                  : string;
  noOverwriteDirNonDir? : string;
  copyUIDGID?           : string;
}
