export interface DockerExecStartBody {
  Detach?      : boolean;
  Tty?         : boolean;
  ConsoleSize? : number[];
}
