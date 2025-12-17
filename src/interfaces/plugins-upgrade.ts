export interface DockerPluginUpgradeHeader {
  'X-Registry-Auth' : string;
}

export interface DockerPluginUpgradeQuery {
  remote : string;
}

export interface DockerPluginUpgradeBody {
  Name        : string;
  Description : string;
  Value       : string[];
}
