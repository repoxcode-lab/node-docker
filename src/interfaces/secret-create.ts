export interface DockerSecretCreateBody {
  Name   : string;
  Labels : { [key: string] : string };
  Data   : string;
  Driver : {
    Name     : string;
    Options? : { [key: string] : string };
  };
  Templating: {
    Name     : string;
    Options? : { [key: string] : string };
  };
}

export interface DockerSecretCreateResponse {
  Id : string;
}
