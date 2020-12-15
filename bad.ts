import { DB } from './helpers';
class PersonsController {
  public Get2RandomPersons() {
    const manager = new Manager();
    const value = manager.GetRandomPersons(2);
    return value;
  }
}

class Manager {
  public GetRandomPersons(number: number) {
    const db = new DB();
    const persons = []
    for (let i = 0; i < number; i++) {
      const person = db.getPersonFromDb(Math.floor(Math.random() * 9));
      persons.push(person)
    }
    return persons
  }
}

const controller = new PersonsController();
console.log(controller.Get2RandomPersons());
