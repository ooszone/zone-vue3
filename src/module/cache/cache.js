import memoryCache from "./module/memory/memoryCache";
import localCache from "./module/local/localCache";

export default {
	...memoryCache,
	...localCache,
}