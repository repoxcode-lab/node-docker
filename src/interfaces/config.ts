export interface DockerConfigQuery {
  filters?: {
    id?    : string[];
    label? : string[];
    name?  : string[];
    names? : string[];
  };
}

export interface DockerConfigResponse {
  ID        : string;
  Version   : { Index : number };
  CreatedAt : string;
  UpdatedAt : string;
  Spec: {
    Name       : string;
    Labels     : { [key: string] : string };
    Data       : string;
    Templating : {
      Name     : string;
      Options? : { [key: string] : string };
    };
  };
}
