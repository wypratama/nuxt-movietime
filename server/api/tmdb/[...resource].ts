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
      Authorization: `${config.authType} ${config.authKey}`,
    },
    query,
  })

  return response
})
