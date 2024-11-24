import { EnvironmentPlugin } from 'webpack';
import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
    output: {
        crossOriginLoading: 'anonymous'
    },
    plugins: [
        new EnvironmentPlugin([
            'KEYCLOAK_URL',
            'KEYCLOAK_REALM',
            'KEYCLOAK_CLIENT_ID'
        ])
    ]
}