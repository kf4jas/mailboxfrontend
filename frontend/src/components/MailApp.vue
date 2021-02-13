<template>
<div id="layout" class="content pure-g">  
    <div id="nav" class="pure-u">
        <a href="#" class="nav-menu-button">Menu</a>

        <div class="nav-inner">
            <button class="primary-button pure-button">Compose</button>
            <input 
                  type='text' 
                  placeholder='Filter Search' 
                  v-model='query'
                />
            {{ query }}
            <div class="pure-menu">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item"><a href="#" class="pure-menu-link">Inbox <span class="email-count">(2)</span></a></li>
                    <li class="pure-menu-item"><a href="#" class="pure-menu-link">Important</a></li>
                    <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sent</a></li>
                    <li class="pure-menu-item"><a href="#" class="pure-menu-link">Drafts</a></li>
                    <li class="pure-menu-item"><a href="#" class="pure-menu-link">Trash</a></li>
                    <li class="pure-menu-heading">Labels</li>
                    <li class="pure-menu-item"><a href="#" class="pure-menu-link"><span class="email-label-personal"></span>Personal</a></li>
                    <li class="pure-menu-item"><a href="#" class="pure-menu-link"><span class="email-label-work"></span>Work</a></li>
                    <li class="pure-menu-item"><a href="#" class="pure-menu-link"><span class="email-label-travel"></span>Travel</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="list" class="pure-u-1">
        
        <div v-for="message in messages" :key="message" v-on:click="read_message(message)">
            <div class="pure-u">
                <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="https://ui-avatars.com/api/?background=random">
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">{{ message.From }}</h5>
                <h4 class="email-subject">{{ message.Subject }}</h4>
                <p class="email-desc">
                   {{ message.To }}
                </p>
            </div>
        </div>
    </div>

    <div id="main" class="pure-u-1">
        <div class="email-content">
            <div class="email-content-header pure-g">
                <div class="pure-u-1-2">
                    <h1 class="email-content-title">{{current.Subject}}</h1>
                    <p class="email-content-subtitle">
                        From <a>{{current.From}}</a> at <span>{{current.Date}}</span>
                    </p>
                </div>

                <div class="email-content-controls pure-u-1-2">
                    <button class="secondary-button pure-button">Reply</button>
                    <button class="secondary-button pure-button">Forward</button>
                    <button class="secondary-button pure-button">Move to</button>
                </div>
            </div>

            <div class="email-content-body">
                <pre>
                    {{current.Body}}
                </pre>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MailApp',
  props: {
    msg: String
  },
  data() {
      return {
        query: "",
        messages: [
        ],
        current: {
          Body:"",
          Subject:"",
          From:"",
          To: ""
      }
    }
  },
  methods: {
      read_message: function (message){
        this.current = message
        console.log(message)
        console.log(message.Body)
      }
  },
  mounted() {
      axios
      .get('/emailfront/allmsgs/')
      .then(response => {
        console.log(response.data)
        this.messages = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      // .finally(() => this.loading = false)
  },
  delimiters: ['[[',']]']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
