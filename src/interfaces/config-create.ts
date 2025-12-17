/**
 * Docker Config Action Interface
 * ------------------------------
 * Interface for the create config action
 * - properties interface
 * - response interface
 *
 * @see https://docs.docker.com/reference/api/engine/version/v1.52
 *
 */

export interface DockerConfigCreateProp {
  body : {
    Name       : string;
    Labels     : { [key: string] : string };
    Data       : string;
    Templating : {
      Name    : string;
      Options : { [key: string] : string };
    };
  };
}

export interface DockerConfigCreateResponse {
  Id : string;
}
