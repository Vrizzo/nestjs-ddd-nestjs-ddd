export class CreateCamperEvent{
  constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly allergies: string[],
  ){}
}