import { LogTypes } from '../models/enums/logTypes';

export interface Log {
  id: bigint;
  level: LogTypes;
  eventDate: Date;
  systemId: string;
  systemPid: number;
  userId: string;
  requestIp: string;
  requestDeviceName: string;
  requestOsName: string;
  requestOsVersion: string;
  message: string;
  details: string;
  stack: string;
  createDate: Date;
}
