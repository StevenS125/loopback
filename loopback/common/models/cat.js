'use strict';

module.exports = function(Cat) {

    Cat.afterRemote("findyById", function(context, cat, next) {
        
    })

    Cat.adoptable = function(id, cb) {
        Cat.findById(id, function(err,cat) {
            if(err) return cb("error", null);
            if(!cat) return cb("cat not found", null);
            let canAdopt=false;
            if(cat.breed != "tiger" && (cat.age <= 10))
            canAdopt=true;
            cb(null, canAdopt);
        })
    }


    Cat.remoteMethod('adoptable', {
        accepts: {arg: "id", type: "any"},
        returns: {arg: "adoptable", type: "boolean"}
    });
};
