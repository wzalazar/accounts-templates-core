Package.describe({
    summary: "Meteor sign up and sign in templates core package.",
    version: "0.0.25",
    name: "splendido:accounts-templates-core",
    git: "https://github.com/splendido/accounts-templates-core.git",
});

Package.on_use(function(api) {
    if (api.versionsFrom) {
        api.versionsFrom("METEOR@0.9.0");

        api.use([
            'mrt:accounts-t9n@0.0.13',
            'iron:router@0.9.1',
        ], ['client', 'server']);

        api.imply([
            'accounts-base',
            'mrt:accounts-t9n@0.0.13',
            'iron:router@0.9.1',
        ], ['client', 'server']);
    }
    else{
        api.use([
            'accounts-t9n',
            'iron-router',
        ], ['client', 'server']);

        api.imply([
            'accounts-base',
            'accounts-t9n',
            'iron-router',
        ], ['client', 'server']);
    }

    api.use([
        'check',
        'deps',
        'accounts-base',
        'underscore',
    ], ['client', 'server']);

    api.use([
        'minimongo',
        'mongo-livedata',
        'sha',
        'templating'
    ], 'client');

    api.add_files([
        'lib/core.js',
        'lib/server.js',
        'lib/methods.js',
    ], ['server']);

    api.add_files([
        'lib/utils.js',
        'lib/core.js',
        'lib/client.js',
        'lib/atForm.js',
        'lib/atInput.js',
        'lib/atSocial.js',
        'lib/methods.js',
    ], ['client']);

    api.export([
        'AccountsTemplates',
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    if (api.versionsFrom) {
        api.use('splendido:accounts-templates-core');
        api.use([
            'mrt:accounts-t9n@0.0.13',
            'iron:router@0.9.1',
        ], ['client', 'server']);
    }
    else{
        api.use([
            'accounts-t9n',
            'iron-router',
        ], ['client', 'server']);

    }
    api.use([
        'tinytest',
        'test-helpers',
    ], ['client', 'server']);
    api.add_files([
        'tests/accounts-templates-core_tests.js',
    ], ['client', 'server']);
});
