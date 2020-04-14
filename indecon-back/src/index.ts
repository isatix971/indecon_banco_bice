import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { IndicatorResolver } from "./resolvers/IndicatorResolver";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [IndicatorResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Servidor Back apolloServer  iniciado en: http://localhost:4000/");
  
}
main();
