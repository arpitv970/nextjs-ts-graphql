import { createYoga } from "graphql-yoga";
import { NextRequest, NextResponse } from "next/server";
import { schema } from "@/graphql/schema";

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: {
    Request: NextRequest,
    Response: NextResponse,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export { handleRequest as GET, handleRequest as POST };
