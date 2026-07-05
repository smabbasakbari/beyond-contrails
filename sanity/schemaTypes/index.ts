import { type SchemaTypeDefinition } from "sanity";
import { flightReport } from "./flightreport";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [flightReport],
};