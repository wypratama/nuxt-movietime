export interface CollectionResponse<T> {
  page: number
  results: T
  total_pages: number
  total_results: number
}

export interface ReviewCollectionResponse<T> extends CollectionResponse<T> {
  id: number
}

export type SortPreference = 'popularity.asc' | 'popularity.desc' | 'primary_release_date.asc' | 'primary_release_date.desc' | 'vote_average.asc' | 'vote_average.desc'
