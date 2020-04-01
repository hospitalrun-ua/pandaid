
import {model, property} from '@loopback/repository';

@model()
export default class PingResponse {
    @property()
    greeting: string;

    @property()
    date: Date;

    @property()
    url: string;

    @property()
    headers: object;
}
