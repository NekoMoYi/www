<template>
  <v-container fluid grid-list-md>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#1976D2c0" dark>
          <v-card-title>
            <div class="fill-width">
              <div class="text-uppercase font-italic font-weight-light subtitle-1">WELCOME</div>
              <div class="text-right display-1 font-weight-thin">MoYi.ML</div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    host: 'moyi.ml'
  })
}

</script>
