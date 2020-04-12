import { Resolver, Query } from "type-graphql";
import { IndicatorValues } from "../models/IndicatorValues";
import axios from 'axios';
import { InsertIndicator } from "../inputs/InsertIndicator";

@Resolver()
export class IndicatorResolver {
  
  @Query(() => [IndicatorValues])
  async getIndicatorValues() {
    let responseIndicator = await  getIndicator();

    let data = new InsertIndicator();
    let values;
    let indicator;
    
    data.key = responseIndicator.yen.key;
    data.name = responseIndicator.yen.name;
    data.value = responseIndicator.yen.value;
    data.unit = responseIndicator.yen.unit;
    data.date = new Date(responseIndicator.yen.date * 1000);
    
    indicator = await IndicatorValues.findOne({ where: { key:data.key } });
    if (!indicator){;
      values = IndicatorValues.create(data);
      await values.save();
    }else{
      Object.assign(indicator, data);
      await indicator.save();
    }
    data.key = responseIndicator.dolar.key;
    data.name = responseIndicator.dolar.name;
    data.value = responseIndicator.dolar.value;
    data.unit = responseIndicator.dolar.unit;
    data.date = new Date(responseIndicator.dolar.date * 1000);
    
    indicator = await IndicatorValues.findOne({ where: { key:data.key } });
    if (!indicator){;
      values = IndicatorValues.create(data);
      await values.save();
    }else{
      Object.assign(indicator, data);
      await indicator.save();
    }

    data.key = responseIndicator.plata.key;
    data.name = responseIndicator.plata.name;
    data.value = responseIndicator.plata.value;
    data.unit = responseIndicator.plata.unit;
    data.date = new Date(responseIndicator.plata.date * 1000);
    
    indicator = await IndicatorValues.findOne({ where: { key:data.key } });
    if (!indicator){;
      values = IndicatorValues.create(data);
      await values.save();
    }else{
      Object.assign(indicator, data);
      await indicator.save();
    }

    data.key = responseIndicator.oro.key;
    data.name = responseIndicator.oro.name;
    data.value = responseIndicator.oro.value;
    data.unit = responseIndicator.oro.unit;
    data.date = new Date(responseIndicator.oro.date * 1000);
    
    indicator = await IndicatorValues.findOne({ where: { key:data.key } });
    if (!indicator){;
      values = IndicatorValues.create(data);
      await values.save();
    }else{
      Object.assign(indicator, data);
      await indicator.save();
    }

    data.key = responseIndicator.ipc.key;
    data.name = responseIndicator.ipc.name;
    data.value = responseIndicator.ipc.value;
    data.unit = responseIndicator.ipc.unit;
    data.date = new Date(responseIndicator.ipc.date * 1000);
    
    indicator = await IndicatorValues.findOne({ where: { key:data.key } });
    if (!indicator){;
      values = IndicatorValues.create(data);
      await values.save();
    }else{
      Object.assign(indicator, data);
      await indicator.save();
    }

    data.key = responseIndicator.euro.key;
    data.name = responseIndicator.euro.name;
    data.value = responseIndicator.euro.value;
    data.unit = responseIndicator.euro.unit;
    data.date = new Date(responseIndicator.euro.date * 1000);
    
    indicator = await IndicatorValues.findOne({ where: { key:data.key } });
    if (!indicator){;
      values = IndicatorValues.create(data);
      await values.save();
    }else{
      Object.assign(indicator, data);
      await indicator.save();
    }

    data.key = responseIndicator.cobre.key;
    data.name = responseIndicator.cobre.name;
    data.value = responseIndicator.cobre.value;
    data.unit = responseIndicator.cobre.unit;
    data.date = new Date(responseIndicator.cobre.date * 1000);
    
    console.log(data.date);
    indicator = await IndicatorValues.findOne({ where: { key:data.key } });
    if (!indicator){;
      values = IndicatorValues.create(data);
      await values.save();
    }else{
      Object.assign(indicator, data);
      await indicator.save();
    }
    
    console.log("llegue al resolver");
    return IndicatorValues.find();
  }

}
async function getIndeconApi(){
  try {
    return await axios.get('http://www.indecon.online/last')
  } catch (error) {
    console.error(error)
  }
}
async function getIndicator(){
  let last = await getIndeconApi();
  return last?.data;
}