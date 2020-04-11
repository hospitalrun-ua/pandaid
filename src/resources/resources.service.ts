import { Injectable } from '@nestjs/common'
import { Resource } from './resources.dto'
import * as mockData from './resources.mock.json'

@Injectable()
export class ResourcesService {
  private readonly resources: Resource[]

  constructor() {
    this.resources = []
    this.addResources(mockData)
  }

  public addResources(resources: Resource[]): void {
    this.resources.push(...resources)
  }

  public addResource(resource: Resource): void {
    this.resources.push(resource)
  }

  public getResources(): Resource[] {
    return this.resources
  }

  public getResource(id: number): Resource {
    return this.resources.find(r => r.id === id)
  }
}
