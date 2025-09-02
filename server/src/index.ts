import { Hono } from 'hono'
import { cors } from 'hono/cors'
const app = new Hono()
app.use(
  '*',
  cors({
    origin: '*',
  })
)

app.get('/', async c => {
  return c.json(
    {
      content: `\n\n hi! \n\n`,
    },
    200
  )
})

export default app
