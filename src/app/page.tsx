export default async function Home() {
  const auth = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');

  const response = await fetch('https://oauth.battle.net/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  const { access_token } = await response.json();
  // https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=Garrosh&orderby=id&_page=1&access_token=EUJDCEEVgteiuVbg3nb6aR01ndSHqSM2qd

  const itemResponse = await fetch(`https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=Garrosh&orderby=id&_page=1&access_token=${access_token}`)
  const item = await itemResponse.json()
console.log(item)
  return (
    <div>
      {JSON.stringify(item)}
    </div>
  );
}
