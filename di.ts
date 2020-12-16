import "reflect-metadata";
import {container, injectable} from "tsyringe";
import { DB } from './helpers';

@injectable()
class Manager {
  constructor(private db: DB){}
  public GetRandomPersons(number: number) {
    const persons = []
    for (let i = 0; i < number; i++) {
      const person = this.db.GetPersonFromDb(Math.floor(Math.random() * 9));
      persons.push(person)
    }
    return persons
  }
}

@injectable()
class PersonsController {
  constructor (private manager: Manager) {}
  public Get2RandomPersons() {
    const value = this.manager.GetRandomPersons(2);
    return value;
  }
}


container.register<DB>(DB, {useClass: DB})
container.register<Manager>(Manager, {useClass: Manager})
container.register<PersonsController>(PersonsController, {useClass: PersonsController})

const controller = container.resolve(PersonsController)
console.log(controller.Get2RandomPersons());
