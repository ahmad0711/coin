// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      // `6aaa0600-f259-480a-802a-9b3e3f8a760a`
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=6aaa0600-f259-480a-802a-9b3e3f8a760a`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      },
    )

    const data = await response.json()

    res.status(200).json({ data })
  }

  getData()
}
