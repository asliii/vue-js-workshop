<template>
    <div class="container">
      <h1>{{ movie.Title }}</h1>
      <div class="row">
        <div class="col-md-3">
            <img class="card-image" :src="movie.Poster ? movie.Poster: '/images/gorsel-hazirlaniyor.jpg'" :alt="movie.Title">
        </div>
        <div class="col-md-9">
            <h5>{{ movie.Title }}</h5>
            <p>{{ movie.Year }}</p>
            <p>{{ movie.Runtime }}</p>
        </div>
      </div>
      <br>
      <select class="form-control" @change="selectTime()" v-model="selectedTime">
        <option v-for="(time, i) in times" :key="i">{{ time }}</option>
      </select>
      <br>
      <div class="row">
        <div class="col-md-2" v-for="(seat, i) in seats" :key="i">
          <img :src="'/images/' + seat.status + '.png'" :disabled="seat.status == 'negative'" @click="toggleSeat(seat.index)">
          <p class="h6">{{ seat.index }}</p>
        </div>
      </div>
      <br>
      <div class="row">
        <button class="btn btn-sm btn-success" @click="saveSeats">Satın Al</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Movie',
  data() {
    return {
        movie: {},
        selectedTime: "",
        seats: [],
        times: []
    }
  },
  mounted() {
      this.movie = this.$store.getters.movie_detail(this.$route.params.id)
      if (this.movie) {
        this.times = Object.keys(this.movie.Times)
      } else {
        location.href = "/"
      }
  },
  methods: {
    toggleSeat(index) {
      let s = this.seats.find(x => x.index == index)
      s.status = s.status == "notr" ? "positive" : "notr"
    },
    selectTime () {
      this.seats = this.movie.Times[this.selectedTime]
    },
    saveSeats() {
      this.seats.forEach((value) => {
        if (value.status == "positive")
          value.status = "negative"
      })
      this.$store.dispatch('change_movie', this.movie)
    }
  }
}
</script>

<style scoped>
  .image {
    height: 200px;
    width: 150px;
  }
</style>