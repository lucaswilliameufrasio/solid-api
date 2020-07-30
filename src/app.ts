import express from 'express'
import * as dotenv from 'dotenv';
import * as paths from 'path';

dotenv.config({ path: paths.resolve(__dirname, '..', '.env') });

import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

export { app }
