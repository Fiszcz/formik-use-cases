// @ts-nocheck
import {createServer, Model} from 'miragejs';

let id = 3;

export const backendCreateServer = () =>
    createServer({
        models: {
            employee: Model,
        },

        seeds(server) {
            server.create('employee', {
                id: 1,
                firstName: 'Filip',
                lastName: 'Szcześniak',
                jobTitle: 'Frontend Developer',
            });
            server.create('employee', {id: 2, firstName: 'Jan', lastName: 'Kowalski', jobTitle: 'Backend Developer'});
            server.create('employee', {id: 3, firstName: 'Anna', lastName: 'Nowak', jobTitle: 'Database Specialist'});
        },

        routes() {
            this.namespace = 'api';
            this.timing = 0;

            this.get('/employees');

            this.get('/employees/:id');

            this.post('/employees', (schema, request) => {
                console.log(schema);
                console.log(request);
                const attrs = JSON.parse(request.requestBody);

                return schema.employees.create({...attrs, id: ++id});
            });
        },
    });
