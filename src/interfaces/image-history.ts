/**
 * Docker Image History Response
 */

export interface DockerImageHistoryResponse {
  Id        : string;
  Created   : number;
  CreatedBy : string;
  Tags      : string[];
  Size      : number;
  Comment   : string;
}
