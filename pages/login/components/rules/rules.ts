import { reactive } from 'vue'
export const accountRules = reactive(){
		
	account:{
		rules:[
			{required: true, errorMessage: '请输入登录账号'},
			{pattern: '^[a-zA-Z0-9]{6,8}$', errorMessage: '账号登录格式不正确'}
		]
	},
		
	password: {
	rules:[
		{required: true, errorMessage: '请输入登录密码'},
		{pattern: '^[a-zA-Z0-9]{6,8}$', errorMessage: '密码格式不正确'}
	]
	}
}