const request = require('supertest');
const app = require('../index.js');
 
describe('Testes da rota /calculadora', () => {
  it('Deve realizar uma soma corretamente', async () => {
    const response = await request(app)
      .get('/calculadora')
      .query({ numero1: 5, numero2: 3, operacao: 'soma' });
 
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ resultado: 8 });
  });
  it('Deve realizar uma subtra corretamente', async () => {
    const response = await request(app)
      .get('/calculadora')
      .query({ numero1: 5, numero2: 3, operacao: 'subtracao' });
 
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ resultado: 2 });

});
it('Deve realizar uma multiplicacao corretamente', async () => {
  const response = await request(app)
    .get('/calculadora')
    .query({ numero1: 5, numero2: 3, operacao: 'multiplicacao' });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ resultado: 15 });
});
it('Divisão por zero não é permitida', async () => {
  const response = await request(app)
    .get('/calculadora')
    .query({ numero1: 5, numero2: 0, operacao: 'divisao' });

 expect(response.status).toBe(400)
  expect(response.body).toEqual({ erro: 'Divisão por zero não é permitida' });

})
it('Deve realizar uma divisao corretamente', async () => {
  const response = await request(app)
    .get('/calculadora')
    .query({ numero1: 10, numero2: 2, operacao: 'divisao' });

    expect(response.status).toBe(200);
  expect(response.body).toEqual({ resultado: 5 });
});
it('deve retornar "Hello Word" para a rota raiz', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello Word');
});
it('deve retornar "Hello Word" para a rota raiz', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello Word');
})
});
