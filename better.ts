import { DB } from './helpers';
class PersonsController {
  constructor (private manager: Manager) {}
  public Get2RandomPersons() {
    const value = this.manager.GetRandomPersons(2);
    return value;
  }
}

class Manager {
  constructor(private db: DB){}
  public GetRandomPersons(number: number) {
    const persons = []
    for (let i = 0; i < number; i++) {
      const person = this.db.getPersonFromDb(Math.floor(Math.random() * 9));
      persons.push(person)
    }
    return persons
  }
}

const controller = new PersonsController(new Manager(new DB()));
console.log(controller.Get2RandomPersons());
