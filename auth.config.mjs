// auth.config.ts
import Google from '@auth/core/providers/google';
import { defineConfig } from 'auth-astro';

export default defineConfig({
    trustHost: true,
    baseURL: 'https://appscolarite.rahmaproject.fr', // <--- Force l'URL exacte reconnue par Auth.js

    providers: [
        Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,

            authorization: {
                params: {
                    prompt: 'select_account',
                },
            },
        }),
    ],

    callbacks: {
        async redirect({ url, baseUrl }) {
            return `${baseUrl}/`;
        },
    },
});