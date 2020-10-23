export const getRequest = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  return data
}

export const postRequest = async (url, rawJson) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.parse(rawJson),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  const data = res.json()

  return data
}
