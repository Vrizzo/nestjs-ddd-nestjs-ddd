import { AggregateRoot } from '@nestjs/cqrs';

export class Camper extends AggregateRoot{
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  get allergies(): string[] {
    return [...this._allergies];
  }
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _age: number,
    private readonly _allergies: string[],
  ) {
    super();
  }
}