import { EnvironmentPlugin } from 'webpack';
import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
    output: {
        crossOriginLoading: 'anonymous'
    },
    plugins: [
        new EnvironmentPlugin([
            'API_URL'
        ])
    ]
}