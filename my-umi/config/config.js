import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';

export default defineConfig({
  // node_modules 目录下依赖文件编译配置
  nodeModulesTransform: {
    // all 慢 兼容性好 none 快 兼容一般
    type: 'none',
  },
  routes: routes,
  // 快速刷新，可以保持组件状态
  fastRefresh: {},
  devServer: {
    port: 3000,
  },
  title: 'umi3.0',
  favicon: '/favicon.ico',
  // 启用按需加载(分包：减少首屏加载时间，提高性能)
  dynamicImport: {
    loading: '@/components/loading',
  },
  // mountElementId: 'app',
  theme: theme,
});
