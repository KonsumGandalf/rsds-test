const { composePlugins, withNx } = require('@nrwl/webpack');

// Nx plugins for webpack.
module.exports = function (options) {
    options.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
    }
    return options
}
