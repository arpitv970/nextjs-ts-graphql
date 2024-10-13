import "./types/Link";
import "./types/User";
import { builder } from "@/graphql/builder";

export const schema = builder.toSchema();
