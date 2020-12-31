<template>
  <v-container fluid grid-list-md>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card color="#FFFFFFc0" style="backdrop-filter: blur(10px);">
          <v-card-title>ME</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item v-for="about in abouts" :key="about.content" :href="about.href">
              <v-list-item-avatar>
                <v-icon>{{ about.avatar }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                {{ about.content }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card color="#FFFFFFc0" style="backdrop-filter: blur(10px);">
          <v-card-title>CONTACT</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item v-for="contact in contacts" :key="contact.content" :href="contact.href">
              <v-list-item-avatar>
                <v-icon>{{ contact.avatar }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                {{ contact.content }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card color="#FFFFFFc0" style="backdrop-filter: blur(10px);">
          <v-card-title>CODE</v-card-title>
          <v-divider/>
          <v-list color="transparent">
            <v-list-item v-for="code in codes" :key="code.content" :href="code.href">
              <v-list-item-avatar>
                <v-icon>{{ code.avatar }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ code.content }}</v-list-item-title>
                <v-list-item-subtitle>{{ code.subtitle }}</v-list-item-subtitle>
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
  name: 'about',
  data: () => ({
    abouts: [
      {avatar: 'mdi-school', content: 'Zhenhai High School', href: 'http://zhzx.net.cn/'},
      {avatar: 'mdi-cake', content: '2004-5', href: '/#/about'}
    ],
    contacts: [
      {avatar: 'mdi-email', content: '1254846416@qq.com', href: 'mailto:1254846416@qq.com'},
      {avatar: 'mdi-qqchat', content: '1254846416', href: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1254846416&website=www.oicqzone.com'},
      {avatar: 'mdi-steam', content: 'mo_yi', href: 'https://steamcommunity.com/id/mo_yi/'},
      {avatar: 'mdi-telegram', content: 'mo_yi', href: 'https://t.me/mo_yi'}
    ],
    codes: [
      {avatar: 'mdi-github', content: 'Github', subtitle: 'moyiljx', href: 'https://github.com/moyiljx'},
      {avatar: 'mdi-git', content: 'Gitee', subtitle: 'moyiljx', href: 'https://gitee.com/moyiljx'}
    ]
  })
}

</script>
