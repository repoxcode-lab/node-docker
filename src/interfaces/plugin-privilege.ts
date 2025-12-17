export interface DockerPluginPrivilegeQuery {
  remote : string;
}

export interface DockerPluginPrivilegeResponse {
  Name        : string;
  Description : string;
  Value       : string[];
}
