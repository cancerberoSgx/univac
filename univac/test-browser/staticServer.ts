import { createReadStream } from "fs";
import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { join } from "path";
export async function staticServer(basePath: string, port = 999): Promise<Server> {
  return await createServer((req: IncomingMessage, res: ServerResponse) => {
    var stream = createReadStream(join(basePath, req.url||''));
    stream.on('error', function () {
      res.writeHead(404);
      res.end();
    });
    stream.pipe(res);
  }).listen(9999);
}
