<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">title</text>

			<button type="default" @click="handleRequest">登录</button>
		</view>
	</view>
</template>

<script setup lang="ts">
import { login } from '@/api/login'

const handleRequest = async () => {
	uni.utils.toast()
	const res = await login({
		account: 'hbxlww1314',
		password: '1314520'
	})
	console.log('res=>', res)
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
	utils: any;
	[x: string]: any;