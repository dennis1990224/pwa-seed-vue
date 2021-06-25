<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div
                class="display-4 font-weight-black white--text text-xs-center mb-5"
            >
                Progressive Web App
            </div>
            <div
                class="display-1 font-weight-bold white--text text-xs-center mb-5"
            >
                The progressive web app can differ from a traditional web app in
                a variety of ways.
            </div>
            <v-btn fab class="mt-5 blue darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/iFSvn82XfGo');
    background-size: cover;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
}
</style>
