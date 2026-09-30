// auth.config.ts
import Google from '@auth/core/providers/google';
import { defineConfig } from 'auth-astro';

export default defineConfig({
    // Permet de faire confiance aux en-têtes du proxy Apache (évite l'erreur 403 Cross-site)
    trustHost: true,

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