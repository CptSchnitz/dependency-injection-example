const humans = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Rodrigo',
      last: 'Ortiz',
    },
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Hans-Helmut',
      last: 'Bittner',
    },
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Raquel',
      last: 'Fernandez',
    },
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'مرسانا',
      last: 'نكو نظر',
    },
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Sebastian',
      last: 'Walker',
    },
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Keira',
      last: 'Zhang',
    },
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Oliver',
      last: 'Pedersen',
    },
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Tormod',
      last: 'Kapstad',
    },
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Levi',
      last: 'Lawrence',
    },
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'مهدیس',
      last: 'رضاییان',
    },
  },
];

export class DB {
  getPersonFromDb(id: number) {
    if (id >= humans.length) {
      throw new Error('bad id');
    }
    return humans[id];
  }
}