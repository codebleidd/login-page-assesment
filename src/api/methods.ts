interface ResponseData {
  errorMessage?: string
  token?: string
}

export async function post(
  url: string,
  body: object,
  options?: object
): Promise<ResponseData> {
  const response = await window.fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
    body: JSON.stringify(body),
  })

  // Format response
  const responseData = { ok: response.ok, body: {} }
  let data: ResponseData = {}
  try {
    data = await response.json()
  } catch (e) {}

  // Throw error with info when request fails
  if (!responseData.ok) {
    throw data
  }
  return data
}
