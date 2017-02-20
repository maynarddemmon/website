JS.Packages(function() {with(this) {
    var ROOT = global.ROOT;
    file(ROOT + 'myt.min.js').provides('myt.all');

    // Package:md
    var MD_ROOT = ROOT + 'md/';
    file(MD_ROOT + 'md.js').provides('md').requires('myt.all');

    file(MD_ROOT + 'Photo.js').provides('md.Photo').requires('md');
    file(MD_ROOT + 'Website.js').provides('md.Website').requires('md.Photo');

    // Include Everything
    file(MD_ROOT + 'all.js').provides('md.all').requires('md.Website');
}});
