<template>
    <div style="margin-top: 5%;">
        <el-row>
            <el-col :span="3" :offset="5">
                <div style="padding-top: 20px;">
                </div>
            </el-col>
            <el-col :span="6">
                <h2 class="text-center">后台管理系统</h2>
                <el-form :model="user" :rules="rules" ref="user" label-width="80px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="user.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login" :loading="loading" style="width: 100%;">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                loading: false,
                user: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名！'}
                    ],
                    password: [
                        {required: true, message: '请输入密码！'}
                    ]
                }
            }
        },
        methods: {
            login() {
                // 登录表单验证
                // this.$refs['user'].validate((valid) => {
                //     if (!valid)
                //         return false
                // })
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
</style>
