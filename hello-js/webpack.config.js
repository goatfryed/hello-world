const Encore = require('@symfony/webpack-encore');

// make sure a runtime environment is set for ide introspection
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

module.exports = Encore.setOutputPath('public')

    .addEntry( "app", "./src/app.js")

    .setOutputPath("public/build")
    .setPublicPath("/build")
    .cleanupOutputBeforeBuild()

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
