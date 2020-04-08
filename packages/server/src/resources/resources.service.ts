import {Injectable} from "@nestjs/common";
import { Resource } from "./resources.dto";
import * as mockData from "./resources.mock.json";

@Injectable()
export class ResourcesService {
    private readonly resources : Resource[];

    constructor(){
        this.resources = [];
        this.addResources(mockData);
    }

    public async createResources(): Promise<void> {
        return;
    }

    public addResources(resources: Resource[]) : void {
        this.resources.push(...resources);
    }

    public getResources() : Resource[] {
        return this.resources;
    }
    
}
