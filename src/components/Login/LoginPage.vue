<script setup lang="ts">
import { type } from '@tauri-apps/plugin-os'
</script>
<template>
    <div class="body">
        <div class="wrapper" :class="{ android: type() == 'android' }">
            <form action="">
                <h1>Login</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" required><i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" required><i class='bx bxs-lock-alt'></i>
                </div>

                <div class="remember-forgot">
                    <label><input type="checkbox"> Remember me </label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" class="btn">Login</button>

                <div class="register-link">
                    <p>Don't have an account? <RouterLink to="/register">Register</RouterLink>
                    </p>

                </div>
            </form>
        </div>
    </div>
</template>
<style lang="css" scoped>
@import url('./LoginPage.css');
</style>