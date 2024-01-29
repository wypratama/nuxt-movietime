<script setup lang="ts">
const { review } = defineProps<{
  review: Entity.Review
}>()
</script>

<template>
  <div class="review-card">
    <div class="review-card__header">
      <div class="review-card__author">
        <div class="review-card__profile">
          <nuxt-img
            v-if="review.author_details.avatar_path"
            :src="review.author_details.avatar_path"
            provider="tmdb"
            width="32"
            height="32"
            class="review-card__avatar"
          />
        </div>
        <div class="review-card__author-details">
          <span class="review-card__username">{{ review.author_details.username }}</span>
          <span class="review-card__created-at">{{ review.created_at }}</span>
        </div>
      </div>

      <div class="review-card__rating">
        <nuxt-img
          src="/img/star.svg"
          provider="local"
          width="17"
          height="17"
          class="review-card__rating-icon"
        />
        <span class="review-card__rating-value">{{ review.author_details.rating.toFixed(1) }}</span>
      </div>
    </div>

    <p class="review-card__content">
      {{ review.content }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.review-card {
  border-radius: 14px;
  background: #F9F9F9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  padding: 24px;
}

.review-card__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.review-card__author {
  display: flex;
  flex-direction: row;
}

.review-card__rating {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 6px;

  border-radius: 7px;
  background: rgba(196, 196, 196, 0.28);
  padding: 11px 6px;
  padding-right: 15px;
}

.review-card__rating-value {
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.review-card__content {
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 13px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
}
</style>
