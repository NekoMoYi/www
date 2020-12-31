<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#ff5252c0" dark style="backdrop-filter: blur(10px);">
          <v-card-title>
            <div class="fill-width">
              <div class="text-uppercase font-italic font-weight-light subtitle-1">ERROR 404</div>
              <div class="text-right display-1 font-weight-thin">Page Not Found</div>
            </div>
          </v-card-title>
          <v-card-action>
            <v-btn color="error" block to="/">点击返回主页</v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'error404'
}
</script>
