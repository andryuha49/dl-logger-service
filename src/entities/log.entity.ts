import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {LogTypes} from '../models/enums/logTypes';
import { Log } from '../interfaces/log';

@Entity('logs')
export class LogEntity implements Log {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: bigint;

  @Column('text')
  level: LogTypes;

  @Column()
  eventDate: Date;

  @Column({nullable: true})
  systemId: string;

  @Column({nullable: true})
  systemPid: number;

  @Column({nullable: true})
  userId: string;

  @Column({nullable: true})
  requestIp: string;

  @Column({nullable: true})
  requestDeviceName: string;

  @Column({nullable: true})
  requestOsName: string;

  @Column({nullable: true})
  requestOsVersion: string;

  @Column({type: 'text'})
  message: string;

  @Column({type: 'text', nullable: true})
  details: string;

  @Column({type: 'jsonb', nullable: true})
  stack: string;

  @CreateDateColumn()
  createDate: Date;
}
