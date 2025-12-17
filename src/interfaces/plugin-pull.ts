export interface DockerPluginPullHeader {
  'X-Registry-Auth' : string;
}

export interface DockerPluginPullQuery {
  remote : string;
  name?  : string;
}

export interface DockerPluginPullBody {
  Name        : string;
  Description : string;
  Value       : string[];
}
