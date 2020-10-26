export const getRequest = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  return data
}

export const postRequest = async (url, stringyJson) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.parse(stringyJson),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  const data = res.json()

  return data
}

export const putRequest = async (url, stringyJson) => {
  const res = await fetch(url, {
    method: "PUT",
    body: JSON.parse(stringyJson),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  const data = res.json()

  return data
}

export const deleteRequest = async (url) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  const data = res.json()

  return data
}
