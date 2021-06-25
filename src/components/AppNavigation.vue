<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="blue lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index" :to="item.url">
                        <v-list-item-content>
                            {{ item.title }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="blue darken-4" dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title class="white--text" data-cy="titleBtn">{{
                    appTitle
                }}</v-toolbar-title>
            </router-link>
            <v-btn
                text
                class="hidden-sm-and-down nav-menu ml-md-5"
                to="/menu"
                data-cy="menuBtn"
                >Menu</v-btn
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn text to="/login" data-cy="signinBtn">Login</v-btn>
                <v-btn
                    color="blue darken-1"
                    to="/register"
                    class="nav-join"
                    data-cy="joinBtn"
                    >Register</v-btn
                >
            </div>
            <div v-else>
                <v-btn text to="/about">PROFILE</v-btn>
                <v-btn outlined color="white" @click="logout" data-cy="logout"
                    >Logout</v-btn
                >
            </div>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'PWA',
            drawer: false,
            items: [
                { title: 'Menu', url: '/menu' },
                { title: 'Profile', url: '/about' },
                { title: 'Login', url: '/login' },
                { title: 'Register', url: '/register' }
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
