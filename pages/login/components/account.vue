<template>
	<uni-forms ref="form" :rules="accountRules" :modelValue='formData'>
		<uni-froms-item name="account">
			<input type="text" v-model.trim="formData.account" placeholder="请输入您的账号" />
		</uni-froms-item>
		<uni-froms-item name="password">
			<input type="password" v-model.trim="formData.password" placeholder="请输入您的密码" />
		</uni-froms-item>
		<button @click="submitLogin" class="submit-button">登录</button>
	</uni-forms>
</template>
<script setup lang="ts">
	import {ref} from 'vue'
	import {formDataType} from './types/type' 
	import {accountRules} from './rules/rule' 
	import {login} from '@/api/login'
	import {useUserStore} from '@/store/user'
	const store = useUserStore()
	
	
	// 表单标识
	const form = ref()
	
	// 数据
	const formDate=ref<formDataType>({
		account: 'hbxlww1314',
		password: '1314520'
	})
	// 账号登录方法
	const submitLogin = async () => {
		try {
			// 触发表单校验
			await form.value.validate()
			// 调用接口
			const res = await login(formData.value)
	
			// 登录失败, 进行提示
			if (res.code !== 200) return uni.utils.toast('登录失败，请重试！')
	
			// 存储pinia
			store.token = res.data
	
			// 跳转首页
			uni.navigateTo({
				url: '/pages/index/index'
			})
		} catch (e) {
			console.log('error')
		}
	}
	
	console.log('token', store.token)
</script>
<style></style>