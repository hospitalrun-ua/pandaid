import {Request, RestBindings, get, ResponseObject, getModelSchemaRef} from '@loopback/rest';
import {inject} from '@loopback/context';
import PingResponse from "../models/PingResponse.model";

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/ping', {
    responses: {
      '200': {
        description: 'PingResponse',
        content: {
          'application/json': {
            schema:  getModelSchemaRef(PingResponse),
          },
        },
      },
    },  })
  ping(): PingResponse {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }
}
