export const prerender = false

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    if (!request.body) {
        return new Response('Request body is missing', { status: 400 });
    }
    try {
        const body = request.body;
        return new Response(body);
    } catch (error) {
        const message = `An error occurred: ${error}`;
        return new Response(message);
    }
}