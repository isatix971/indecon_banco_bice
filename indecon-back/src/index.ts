import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { IndicatorResolver } from "./resolvers/IndicatorResolver";
import axios from 'axios';

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [IndicatorResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Servidor Iniciado Back Type-graphql apolloServer");
  
  let data = await getIndicadores();

}

async function getIndeconApi(){
  try {
    return await axios.get('http://www.indecon.online/last')
  } catch (error) {
    console.error(error)
  }
}


async function getIndicadores( ){
  const last = await getIndeconApi();
  console.log(last?.data);

  return last?.data;
}



main();
