import { Injectable } from '@nestjs/common'
import { Resource, ResourceStates } from './resources.dto'
import * as mockData from './resources.mock.json'

@Injectable()
export class ResourcesService {
  // TODO working just for 1 org
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

  public updateResourceById(id: number, resource: Resource): void {
    let original: Resource = this.resources.find(r => r.id === id)

    if (original) {
      original = { ...original, ...resource }
    } else {
      this.addResource({
        id: id,
        quantityCovered: 0,
        name: resource.name,
        quantity: resource.quantity,
        price: resource.price,
        state: resource.state,
        beneficiary: resource.beneficiary,
        contactPerson: resource.contactPerson,
        deadline: resource.deadline
      })
    }
  }

  public changeState(id: number, state: ResourceStates): Resource {
    const resource = this.resources.find(r => r.id === id)
    resource.state = state
    return resource
  }
}
