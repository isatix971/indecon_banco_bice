import { InputType, Field } from "type-graphql";

@InputType()
export class InsertIndicator {

    @Field()
    name: string;

    @Field()
    key: string;

    @Field()
    unit: string;

    @Field()
    date: Date;

    @Field()
    value: number;
}