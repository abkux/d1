# @abku/d1

A simple package that allows you to connect with Cloudflare D1 and run queries.

### Usage
```js
import { d1 } from "@abku/d1";

const d1 = new d1(account_id, token, database_id);

async main(){
    const response = await d1.listDatabase();
    console.log(response)
}

main()
```

### Methods
```js
d1.query('SQL QUERY HERE');
```

```js
d1.createDatabase('database-name');
```

```js
d1.deleteDatabase('database-id');
```

```js
d1.getDatabase('database-id');
```

```js
d1.listDatabase();
```

Please make sure you setup token. **[docs](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)**.

Need Help? Join **[discord server](https://to.abku.dev/discord)**.