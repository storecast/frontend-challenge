// fun with type guards. Maybe worth a library if it does not exists.

export interface Ok<T> {
  value: T
  ok: boolean
}
export interface Ko {
  error: Error
  ok: boolean
}

export async function safely<T>(p: Promise<T>): Promise<Ok<T> | Ko> {
  try {
    const okResult = await p
    return {
      ok: true,
      value: okResult
    }
  } catch (err) {
    return {
      ok: false,
      error: err
    }
  }
}

export function isOk<T>(p: Ok<T> | Ko): p is Ok<T> {
  return p.ok
}