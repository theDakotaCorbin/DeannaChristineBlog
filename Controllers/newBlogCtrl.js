angular.module('deannaBlogApp')

.controller('newBlogCtrl', function($scope, $rootScope, $state){



var Person = require('../Models/newBlogModel.js');
module.exports = {
    createNewBlog:function(req, res) {
     var newBlog = new Blog(req.body);
        newBlog.save(function (err, blog) {
         if (err) {
             console.log(err)
             return res.status(500).send(err);
          }
            return res.json(blog);
        });
    },
    
    
    getBlog: function(req, res) {
    Blog.find({},function (err, blogs){
    if (err) {
        console.log(err)
        return res.status(500).send(err);
    }
        return res.json(blogs);
    })
    },
    
    
    deleteBlog: function(req, res) {
         Blog.findByIdAndRemove(req.params.id, function(err, result) {
             console.log(err);
      if (err) return res.status(500).send(err);
      return res.status(200).json(result);
    });
    }
    
    
}
})