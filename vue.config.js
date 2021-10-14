const path = require("path");
const vueSrc = "./src";

module.exports = {
	devServer: {
		proxy: 'https://www.space.com',
	},
	runtimeCompiler: true,
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, vueSrc)
			},
			extensions: ['.js', '.ts', '.vue', '.json']
		}
	}
}
