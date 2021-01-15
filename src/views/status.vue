<template>
  <v-container fluid grid-list-md>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card color="#FFFFFFc0" style="backdrop-filter: blur(10px);">
          <v-card-title>CI STATUS</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item href="https://nekomoyi.com">
              <v-list-item-content>
                <v-list-item-title>WWW</v-list-item-title>
                <v-list-item-subtitle>nekomoyi.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <!--<a href="https://moyiljx.coding.net/p/www/ci/job"><img src="https://moyiljx.coding.net/badges/www/job/222261/build.svg"></a>-->
              </v-list-item-action>
            </v-list-item>
            <!--<v-list-item href="https://netlify.moyi.ml">
              <v-list-item-content>
                <v-list-item-title>WWW</v-list-item-title>
                <v-list-item-subtitle>netlify.moyi.ml</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <a href="https://app.netlify.com/sites/moyiljx/deploys"><img src="https://api.netlify.com/api/v1/badges/a25886a3-95a2-40da-b1a9-1f7cdaeee7ed/deploy-status"></a>
              </v-list-item-action>
            </v-list-item>-->
            <v-list-item href="https://blog.nekomoyi.com">
              <v-list-item-content>
                <v-list-item-title>BLOG</v-list-item-title>
                <v-list-item-subtitle>blog.nekomoyi.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <!--<a href="https://moyiljx.coding.net/p/blog/ci/job"><img src="https://moyiljx.coding.net/badges/blog/job/222443/build.svg"></a>-->
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'status'
}

</script>
