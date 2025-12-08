import { defineConfig } from 'prisma/config'

export default defineConfig({
    schema: "./prisma",
    datasource: {
        url: 'env("DATABASE_URL")'
    }
})