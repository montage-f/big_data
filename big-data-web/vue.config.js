/**
 * Created by MonTage_fz on 2019/7/19
 */
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            }
        }
    }
};
