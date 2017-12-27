'use strict';

exports.register = function (server, options, next) {
    server.route([
        {
            method: 'GET',
            path: '/test-github',
            handler: function (request, reply) {
                reply('test-github passed ');
            }
        },
        {
            method: 'GET',
            path: '/test-github2',
            handler: function (request, reply) {
                reply('test-github2 passed ');
            }
        }        
    ]);
    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};