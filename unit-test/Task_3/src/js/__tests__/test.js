import fetchData from '../http';
import getLevel from '../getLevel';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing getLevel with "ok" status', () => {
  const id = 1;
  const response = {
    status: 'ok',
    level: id,
  };
  fetchData.mockReturnValue(response);
  const result = getLevel(id);
  expect(fetchData).toBeCalledWith(`https://server/user/${id}`);
  expect(result).toBe(`Ваш текущий уровень: ${id}`);
});

test('testing getLevel with "Bad Request" response', () => {
  const id = 2;
  const response = {
    status: 'Bad Request',
  };
  fetchData.mockReturnValue(response);
  const result = getLevel(id);
  expect(fetchData).toBeCalledWith(`https://server/user/${id}`);
  expect(result).toBe('Информация об уровне временно недоступна');
});
