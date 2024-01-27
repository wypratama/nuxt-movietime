export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  if (!event.context.params) {
    throw createError({
      statusCode: 400,
      statusMessage: 'resource not found',
    })
  }

  const resource = event.context.params.resource
  const query = getQuery(event)

  const response = await $fetch(`${config.baseApi}/${resource}`, {
    method: event.method,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGVjMmI1ZWYzNDk3M2E1OTFjNTk4M2E3NWRiOGQwZiIsInN1YiI6IjU4MDRlMmNiOTI1MTQxNDgyODAwMDAxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zVLsZCGQ_5qZg-Dg9QN80lRGB4fCfkndecmpg8b5PkU',
    },
    query,
  })

  return response
})
