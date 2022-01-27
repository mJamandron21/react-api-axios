import { rest } from "msw"
import { setupServer } from "msw/node"
import { getCoinList } from './getCoinList';

const server = setupServer(
    rest.get(`https://api.coingecko.com/api/v3/coins/markets`, (req,res,ctx) =>{
        return res(ctx.status(200),
        ctx.json({ symbol: 'btc' })
        )
    }
),
    rest.get('*', (req,res,ctx) => {
        console.error(`Please add request handler for ${req.url.toString()}`)
        return res(
            ctx.status(500),
            ctx.json({ error : 'Please add request handler' })
        )
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('API fetch for coin list', () => {
    test('Fetch coin list', async () => {
        const response = await getCoinList()
        expect (response).toEqual({ symbol: 'btc' })

    })
})


