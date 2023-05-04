const { db, client } = await database.connect();
await client.close();
