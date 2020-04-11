import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class IndicatorValues extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  key: string;

  @Field(() => String)
  @Column()
  unit: string;

  @Field(()=>Date)
  @Column()
  date: Date;

  @Field(() => Number)
  @Column()
  value: number;

}