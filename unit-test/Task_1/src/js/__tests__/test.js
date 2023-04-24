import checkHealthBar from '../healthBar';

/* Тест работает, и если содержимым массива dataList будут только объекты
и работает, если каждый объект обернуть в массив.
Как лучше в этом случае сделать? */

test.each(
  [
    { name: 'Маг', health: 90, expected: 'healthy' },
    { name: 'Маг', health: 50, expected: 'wounded' },
    { name: 'Маг', health: 10, expected: 'wounded' },
  ],
)('testing character $name, with $health health', ({ name, health, expected }) => {
  const result = checkHealthBar({ name, health });
  expect(result).toBe(expected);
});
