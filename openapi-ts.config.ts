import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'https://api.themeparks.wiki/docs/v1.yaml', // sign up at app.heyapi.dev
    output: 'src/theme-park-api-client',
    plugins: [
        "@hey-api/typescript",
    ]
});
