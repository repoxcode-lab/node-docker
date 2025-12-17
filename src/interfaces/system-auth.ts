/**
 * Auth config body
 */

export interface DockerSystemAuthBody {
  username      : string;
  password      : string;
  email         : string;
  serveraddress : string;
}

/**
 * Auth config response
 */

export interface DockerSystemAuthResponse {
  Status        : string;
  IdentityToken : string;
}
