import fetch from "node-fetch";

export default function graphqlCall(query, variables = {}) {
  return fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: variables,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    });
}
