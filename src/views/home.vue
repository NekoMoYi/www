<template>
  <v-container fluid grid-list-md>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#1976D2c0" dark style="backdrop-filter: blur(10px);">
          <v-card-title>
            <div class="fill-width">
              <div class="text-uppercase font-italic font-weight-light subtitle-1">WELCOME</div>
              <div class="text-right display-1 font-weight-thin">NekoMoYi.COM</div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#FFFFFFc0" style="backdrop-filter: blur(10px);">
          <v-card-title>SITES</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item href="https://blog.nekomoyi.com/" target="_blank">
              <v-list-item-avatar tile>
                <v-img :src="require('@/assets/blog.png')" contain/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>BLOG</v-list-item-title>
                <v-list-item-subtitle>
                  build with Typecho
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    host: 'nekomoyi.'
  })
}

</script>
