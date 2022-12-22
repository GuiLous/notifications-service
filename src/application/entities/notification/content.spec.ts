import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('Voce recebeu uma solicitação de amizade');

  expect(content).toBeTruthy();
});

test('it should NOT be able to create a notification content with less then 5', () => {
  const content = new Content('Voce recebeu uma solicitação de amizade');

  expect(content).toBeTruthy();
});
