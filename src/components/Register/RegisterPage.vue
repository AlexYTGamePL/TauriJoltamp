<script setup lang="ts">
import { type } from '@tauri-apps/plugin-os'
import { ref } from 'vue';

const username = ref("");
const email = ref("");
const password = ref("");

</script>
<template>
    <div class="body">
        <div class="wrapper" :class="{ android: type() == 'android' }">
            <form action="">
                <h1>Register</h1>
                <div class="input-box">
                    <input v-model="username" type="text" placeholder="Username" required><i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <input v-model="email" type="email" placeholder="Email" required><i class='bx bxs-envelope'></i>
                </div>
                <div class="input-box">
                    <input v-model="password" type="password" placeholder="Password" required><i
                        class='bx bxs-lock-alt'></i>
                </div>

                <button type="submit" class="btn">Register</button>

                <div class="register-link">
                    <p>By registering, I declare that I am over 16 years old and I agree to <a href="">JoltAMP rules</a>
                        and <a href="">privacy policy</a>.</p><br>
                    <p>Already have an account? <RouterLink to="/login">Login</RouterLink>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>
<style lang="css" scoped>
@import url('./RegisterPage.css');
</style>