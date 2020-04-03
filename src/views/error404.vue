<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex>
        <v-row align="center" justify="center" v-resize="onResize">
          <v-card flat>
            <p class="display-4 font-weight-thin text-xs-center">404</p>
          </v-card>
            <v-btn color="error" block to="/">点击返回主页</v-btn>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    winy: 0
  }),

  mounted () {
    this.onResize()
  },

  methods: {
    onResize () {
      this.winy = window.innerHeight / 2
    }
  }
}
</script>
