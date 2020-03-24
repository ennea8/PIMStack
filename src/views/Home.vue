<template>
  <div :class="user?'content':'center'">
    <landing v-if="!userSession.isUserSignedIn()"></landing>
    <dashboard v-if="user" :user="user"></dashboard>

    <div v-if="user">
      <el-card   class="box-card">
        <el-form ref="form" :model="form" label-width="80px">
          <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="form.text">
          </el-input>
        </el-form>
        <el-button style="margin-top: 10px;" type="primary" @click="onSubmit">发布</el-button>

      </el-card>

      <el-card class="box-card">
        {{content}}
      </el-card>
    </div>
  </div>
</template>

<script>
import Landing from '@/components/Landing.vue'
import Dashboard from '@/components/Dashboard.vue'
import { Person } from 'blockstack'
import { userSession } from '../userSession'
import { SUBJECTS_FILENAME } from '../config/constants'

export default {
  name: 'Home',
  components: { Landing, Dashboard },
  created () {
    this.userSession = userSession
  },
  mounted () {
    if (userSession.isUserSignedIn()) {
      this.userData = userSession.loadUserData()
      this.user = new Person(this.userData.profile)
      this.user.username = this.userData.username
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn()
        .then((userData) => {
          window.location = window.location.origin
        })
    }
    this.getBlog()
  },
  data () {
    return {
      userSession: null,
      user: null,
      form: {
        text: ''
      },
      content: ''
    }
  },
  methods: {
    async onSubmit () {
      console.log('submit!', this.form)
      const ret = await this.saveBlog(this.form)
      console.log(ret)
      this.getBlog()
    },
    saveBlog (data) {
      const options = { encrypt: false }
      this.userSession.putFile(SUBJECTS_FILENAME, JSON.stringify(data), options)
    },
    getBlog () {
      const options = { decrypt: false }
      return this.userSession.getFile(SUBJECTS_FILENAME, options)
        .then((content) => {
          if (content) {
            console.log(content)
            const ret = JSON.parse(content)
            this.content = ret.text
            this.form.text = ret.text
          } else {
            return []
          }
        })
    }
  }
}
</script>

<style scoped>
  .content{
    margin: 20px;
  }
</style>
