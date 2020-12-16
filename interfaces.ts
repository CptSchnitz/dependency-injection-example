import 'reflect-metadata';
import { container, inject, injectable } from 'tsyringe';
import { DB, IDB } from './helpers';

interface IManager {
  GetRandomPersons(number: number);
}

interface IPersonsController {
  Get2RandomPersons();
}

@injectable()
class Manager implements IManager {
  constructor(@inject('IDB') private db: IDB) {}
  public GetRandomPersons( number: number) {
    const persons = [];
    for (let i = 0; i < number; i++) {
      const person = this.db.GetPersonFromDb(Math.floor(Math.random() * 9));
      persons.push(person);
    }
    return persons;
  }
}

@injectable()
class PersonsController implements IPersonsController {
  constructor(@inject('IManager') private manager: IManager) {}
  public Get2RandomPersons() {
    const value = this.manager.GetRandomPersons(2);
    return value;
  }
}

container.register<IDB>('DB', { useClass: DB });
container.register<IManager>('Manager', { useClass: Manager });
container.register<IPersonsController>('IPersonsController', {
  useClass: PersonsController,
});

const controller = container.resolve<IPersonsController>('IPersonsController');
console.log(controller.Get2RandomPersons());
