import requestData from "../fixtures/requestData.json"
describe('validate CRUD operation', () => {
    // Load fixture data before the tests run


    // GET request
    it('GET request', function () {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('baseUrl')}/users/2`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.id).to.eq(requestData.getUser.id);
            expect(response.body.data.email).to.eq(requestData.getUser.email);
            expect(response.body.data.first_name).to.eq(requestData.getUser.first_name);
            expect(response.body.data.last_name).to.eq(requestData.getUser.last_name);
        });
    })


    // POST request
    it('POST request', function () {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('baseUrl')}/users`,
            body: requestData.postUser
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq(requestData.postUser.name);
            expect(response.statusText).to.eq('Created');
        });
    });

    // PUT request
    it('PUT request', function () {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env('baseUrl')}/users/2`,
            body: requestData.putUser
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(requestData.putUser.name);
        });
    });

    // PATCH request
    it('PATCH request', function () {
        cy.request({
            method: 'PATCH',
            url: `${Cypress.env('baseUrl')}/users/2`,
            body: requestData.patchUser
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(requestData.patchUser.name);
        });
    });

    // DELETE request
    it('DELETE request', () => {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('baseUrl')}/users/2`
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});
