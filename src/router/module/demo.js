export default [{
	path: '/demo',
	name: 'demoList',
	meta:{
		roles: ['admin', 'user']
	},
	component: () => import('../../views/demoList.vue'),
},{
	path: '/demo/icon',
	name: 'icon',
	component: () => import('../../module/demo/icon.vue')
}, {
	path: '/demo/gitbook',
	name: 'gitbook',
	component: () => import('../../module/demo/gitbook.vue')
},{
	path: '/demo/title',
	name: 'title',
	component: () => import('../../module/demo/title.vue')
},{
	path: '/demo/button',
	name: 'buttonList',
	component: () => import('../../module/demo/button.vue')
},{
	path: '/demo/divider',
	name: 'divider',
	component: () => import('../../module/demo/divider.vue')
},{
	path: '/demo/circle',
	name: 'circle',
	component: () => import('../../module/demo/circle.vue')
},{
	path: '/demo/longList',
	name: 'longList',
	component: () => import('../../module/demo/longList.vue')
},{
	path: '/demo/diff',
	name: 'diff',
	component: () => import('../../module/demo/diff.vue')
}]