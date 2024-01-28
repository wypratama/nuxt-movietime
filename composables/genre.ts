export function useGenre() {
  const { data, execute, refresh } = useLazyFetch<{ genres: Entity.Genre[] }>('/api/tmdb/genre/movie/list?language=en', {
    immediate: false,
  })

  const list = computed(() => {
    const map = new Map<number, Entity.Genre>()

    if (!data.value)
      return map

    for (const item of data.value.genres)
      map.set(item.id, item)

    return map
  })

  return {
    data,
    list,
    execute,
    refresh,
  }
}
