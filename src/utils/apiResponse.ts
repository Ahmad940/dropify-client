type successfulResponse = { success: true; data: object }
type unsuccessfulResponse = { success: false; error: Error }

type Response = { message: string } & (successfulResponse | unsuccessfulResponse)

export function apiResponse(response: Response) {
  return response
}
