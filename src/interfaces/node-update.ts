export interface DockerNodeUpdateQuery {
  version : number;
}

export interface DockerNodeUpdateBody {
  Availability : string;
  Name         : string;
  Role         : string;
  Labels       : { [key: string] : string };
}
