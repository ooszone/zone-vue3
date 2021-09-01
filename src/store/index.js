import {createStore} from 'vuex'
import permission from "@/store/module/permission";
import cache from "@/store/module/cache";

export default createStore({
	modules: {
		permission,
		cache
	},
	getStore: state => {
		return state
	}
})
