/**
 * Docker Volume Update Query
 */

export interface DockerVolumeUpdateQuery {
  version : number;
}

/**
 * Docker Volume Update Body
 */

export interface DockerVolumeUpdateBody {
  Spec: {
    Group      : string;
    AccessMode: {
      Scope       : string;
      Sharing     : string;
      MountVolume : object;
      Secrets: {
        Key    : string;
        Secret : string;
      }[];
      AccessibilityRequirements: {
        Requisite : { [key: string] : string }[];
        Preferred : { [key: string] : string }[];
      };
      CapacityRange: {
        RequiredBytes : number;
        LimitBytes    : number;
      };
      Availability : string;
    };
  };
}
