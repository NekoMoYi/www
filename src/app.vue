<template>
  <v-app>
    <v-navigation-drawer color="pink lighten-3" expand-on-hover miniVariant app dark permanent>
      <v-list nav dense class="py-0">
        <v-list-item two-line class="px-0">
          <v-list-item-avatar>
            <img src="http://q1.qlogo.cn/g?b=qq&nk=1254846416&s=640">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>MoYi</v-list-item-title>
            <v-list-item-subtitle>Looking forward...</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
          <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <div class="background" ref="background">
      <div class="layer">
        <div class="background-img"/>
      </div>
    </div>
    <v-footer class="font-weight-medium" padless>
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
      { title: '首页', to: '/', icon: 'fa-home' }
    ]
  })
}
</script>
