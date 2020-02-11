import { IsString, MaxLength, IsEnum, IsIP, IsEmpty, IsJSON, IsDateString, IsOptional } from 'class-validator';
import {LogTypes} from './enums/logTypes';

export class CreateLogModel {
  @IsEnum(LogTypes)
  level: LogTypes;

  @IsDateString()
  eventDate: Date;

  @IsString()
  @MaxLength(256)
  systemId: string;

  @IsOptional()
  systemPid: number;

  @IsOptional()
  @IsString()
  @MaxLength(256)
  userId: string;

  @IsOptional()
  @IsIP()
  requestIp: string;

  @IsOptional()
  @IsString()
  requestDeviceName: string;

  @IsOptional()
  @IsString()
  requestOsName: string;

  @IsOptional()
  @IsString()
  requestOsVersion: string;

  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  details: string;

  @IsOptional()
  @IsJSON()
  stack: string
}
