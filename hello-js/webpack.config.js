const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// make sure a runtime environment is set for ide introspection
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

module.exports = Encore.setOutputPath('public')

    .addEntry( "app", "./src/app.jsx")

    .setOutputPath("public/build")
    .setPublicPath("/build")
    .cleanupOutputBeforeBuild()

    .addPlugin(
        new HtmlWebpackPlugin({
            template: "./templates/index.html",
            filename: "../index.html", //we want everything in build to cleanup generated stuff, but the index must be on top lvl
        })
    )

    .configureBabel(
        config => {
        },
        {
            useBuiltIns: "usage",
            corejs: 3,
        }
    )
    .enableReactPreset()
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .enableBuildNotifications()

    .getWebpackConfig()
;
