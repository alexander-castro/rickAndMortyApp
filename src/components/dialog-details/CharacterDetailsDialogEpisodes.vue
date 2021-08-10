<template>
  <q-card-section class="row justify-start">
    <div class="label">Episodios</div>
  </q-card-section>
  <q-card-section class="row justify-between q-gutter-md">
    <div class="col-md-auto" v-for="episode in episodesList" :key="episode.id">
      <character-details-dialog-card-details :item="{ icon: false, name: episode.name,
       value: episode.episode, details: episode.air_date }" />
    </div>
    <div class="col-md-auto" v-if="episodesList.length % 2 === 0"></div>
    <div class="col-md-3" v-if="episodesList.length % 2 === 0"></div>
  </q-card-section>
</template>

<script>
import CharacterDetailsDialogCardDetails from '@/components/dialog-details/CharacterDetailsDialogCardDetails.vue'

export default {
  name: 'CharacterDetailsDialogEpisodes',
  components: {
    CharacterDetailsDialogCardDetails
  },
  props: {
    episodesList: Object
  }
}
</script>
