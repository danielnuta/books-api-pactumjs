const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
//const { request } = require('');

const baseUrl = 'http://localhost:3000';

describe('Books API Tests', () => {
  let bookId;
  let token;

  before(async () => {
		request.setDefaultTimeout(10000);
	});

  it('POST /auth/login - should login successfully', async () => {
    const loginRes = await spec()
      .post(`${baseUrl}/auth/login`)
      .withJson({
        email: 'rv@tai.com',
        password: 'learnwithrv',
      })
      .expectStatus(200);

    token = loginRes.body.token;
  });

  it('POST /books - create book with faker author', async () => {
    const response = await spec()
      .post(`${baseUrl}/books`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .withJson({
        title: 'Learn Automation Testing',
        author: faker.person.fullName(),
      })
      .expectStatus(201);

    bookId = response.body.id;
  });

  it('GET /books - get all books', async () => {
    await spec()
      .get(`${baseUrl}/books`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200);
  });

  it('GET /books/:id - get book by id', async () => {
    await spec()
      .get(`${baseUrl}/books/${bookId}`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200)
      .expectJsonLike({
        id: bookId,
      });
  });

  it('PUT /books/:id - update book', async () => {
    await spec()
      .put(`${baseUrl}/books/${bookId}`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .withJson({
        title: 'Updated Title',
        author: 'Updated Author',
      })
      .expectStatus(200)
      .expectJsonLike({
        id: bookId,
        title: 'Updated Title',
      });
  });

  it('DELETE /books/:id - delete book', async () => {
    await spec()
      .delete(`${baseUrl}/books/${bookId}`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200);
  });
});
