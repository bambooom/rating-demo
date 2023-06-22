import {H3Event} from "h3";

export default async function defineEventHandler(event: H3Event): Promise<unknown> {
  return 'hello, ' + event.node.req.url;
}

// Implicit event handler conversion is deprecated. Use eventHandler() or fromNodeMiddleware() to define event handlers.

// -> curl http://localhost:3000/api/hello
// -> hello, /api/hello
