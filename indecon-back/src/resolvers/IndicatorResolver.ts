import { Resolver, Query } from "type-graphql";
import { IndicatorValues } from "../models/IndicatorValues";
import { InsertIndicator } from "../inputs/InsertIndicator";
import { GetIndeconApi } from "../gateway/GetIndeconApi";

@Resolver()
export class IndicatorResolver {
  
  @Query(() => [IndicatorValues])
  async getIndicatorValues() {

    let api = new GetIndeconApi();
    let responseIndicator = await  api.getIndicator();
    let data = new InsertIndicator();
    let values;
    let indicator;

    for (let i in responseIndicator) {
      data.key = responseIndicator[i].key;
      data.name = responseIndicator[i].name;
      data.value = responseIndicator[i].value;
      data.unit = responseIndicator[i].unit;
      data.date = new Date(responseIndicator[i].date * 1000);

      indicator = await IndicatorValues.findOne({ where: { key:data.key } });
      if (!indicator){;
        values = IndicatorValues.create(data);
        await values.save();
      }else{
        Object.assign(indicator, data);
        await indicator.save();
      }
    } 
    console.log("Almacenando valor de Indecon http://www.indecon.online/last ");
    return IndicatorValues.find();
  }

  

}
