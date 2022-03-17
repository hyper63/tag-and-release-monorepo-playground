import { json, useLoaderData } from 'remix'

export async function loader() {
  const res = await fetch(`${process.env.GRAPH_HOST}/graphql`, {
    method: "POST",
    body: JSON.stringify({
      query: `
        query {
          hello
        }
      `,
      variables: {}
    })
  })

  return json(await res.json())
}

export default function Index() {
  const { data } = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      {data.hello}
    </div>
  );
}
