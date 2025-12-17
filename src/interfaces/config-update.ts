export interface DockerConfigUpdateQuery {
  version : string;
}

export interface DockerConfigUpdateBody {
  Name       : string;
  Labels     : { [key: string] : string };
  Data       : string;
  Templating : {
    Name    : string;
    Options : { [key: string] : string };
  };
}
