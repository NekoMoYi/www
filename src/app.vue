<template style="overflow-y: hidden;">
  <v-app style="background: url(https://api.btstu.cn/sjbz/?lx=dongman);background-size: cover;background-attachment: fixed;overflow-y: hidden;">
    <v-navigation-drawer color="rgba(244, 143, 177, 0.75)" expand-on-hover miniVariant app dark permanent style="backdrop-filter: blur(10px);">
      <v-list nav dense class="py-0">
        <v-list-item two-line class="px-0">
          <v-list-item-avatar>
            <img src="https://q1.qlogo.cn/g?b=qq&nk=1254846416&s=640">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>MoYi</v-list-item-title>
            <v-list-item-subtitle>Looking forward...</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
          <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
            <v-list-item-avatar tile size="24px">
              <v-icon>{{ item.avatar }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer class="font-weight-medium" padless dark color="rgba(245, 245, 245, 0.2)">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — &copy;moyiljx
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Home', to: '/', avatar: 'mdi-home' },
      { title: 'Status', to: '/status', avatar: 'mdi-traffic-light' },
      { title: 'About', to: '/about', avatar: 'mdi-account-circle' }
    ]
  })
}
</script>
