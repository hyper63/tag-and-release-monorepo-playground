import { serve } from "std/http/server.ts";
import { graphql } from "./api.js";

/**
 * @param {Request} req
 * @returns {Response}
 */
serve(async (req) => {
  const { pathname } = new URL(req.url)

  console.log(pathname)

  return pathname === '/graphql'
    ? graphql(req)
    : new Response('Not Found', { status: 404 })
}, { port: 8000 });
