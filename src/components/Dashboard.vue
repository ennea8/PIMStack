<template>
  <div class="nav">
    <div class="user">
      <img :src="avatar" class="img-rounded avatar">
      <div>{{ givenName }}</div>
    </div>

    <el-button  @click.prevent="signOut">注销</el-button>
  </div>
</template>

<script>
import { userSession } from '../userSession'
export default {
  methods: {
    signOut () {
      userSession.signUserOut(window.location.href)
    }
  },
  data () {
    return {
      blockstack: window.blockstack,
      avatar: 'https://s3.amazonaws.com/onename/avatar-placeholder.png',
      givenName: 'Anonymous'
    }
  },
  mounted () {
    const blockstack = this.blockstack
    if (blockstack.isUserSignedIn()) {
      const profile = blockstack.loadUserData().profile
      const user = new blockstack.Person(profile)
      this.givenName = user.name() ? user.name() : 'Nameless Person'
      if (user.avatarUrl()) this.avatar = user.avatarUrl()
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn()
        .then((userData) => {
          window.location = window.location.origin
        })
    }
  }
}
</script>

<style scoped>
  .nav{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
    align-items: center;
  }
  .nav .avatar{
    width: 30px;
    height: 30px;
  }
  .user{
    font-size: 12px;
  }
</style>
