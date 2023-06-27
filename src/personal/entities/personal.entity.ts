import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class PersonalData {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
  
    @Column({ type: 'varchar', length: 30 })
    firstName: string;

    @Column({ type: 'varchar', length: 30 })
    lastName: string;

    @Column({ type: 'varchar', length: 50 })
    phone: string;

    @Column()
    birthDate: Date;

    @CreateDateColumn()
    createdDate?: Date;
  
    @UpdateDateColumn()
    updatedDate?: Date;
  }
  