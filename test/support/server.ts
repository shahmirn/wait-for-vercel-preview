import { setupServer } from 'msw/node';
import { http, HttpResponse, type JsonBodyType } from 'msw';

// This configures a request mocking server with the given request handlers.
export const server = setupServer();

export { http, HttpResponse, type JsonBodyType };

