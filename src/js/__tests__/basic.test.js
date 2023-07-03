/* eslint-disable object-curly-newline */
import showStats from '../basic';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

test('Get special', () => {
  const result = showStats(character);
  const testRes = [
    { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
    { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно' },
  ];

  expect(result).toEqual(testRes);
});
