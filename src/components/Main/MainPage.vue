<script setup lang="ts">
import { type } from '@tauri-apps/plugin-os';

</script>
<template>
    <div class="body">
        <div class="wrapper" :class="{ android: type() == 'android' }">
            <form action="">
                <h1>Welcome
                </h1>
                <div class="btns">
                    <RouterLink to="/login">
                        <button class="btn">
                            Login
                        </button>
                    </RouterLink>
                    <RouterLink to="/register">
                        <button class="btn">Register</button>
                    </RouterLink>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="css" scoped>
@import url('./MainPage.css');
</style>