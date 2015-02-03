App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', {path: ':post_id'});
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false, 

  actions: {
    edit: function(){
      this.set("isEditing", true);
    },

    doneEditing: function(){
      this.set("isEditing", false);
    }
  }
});

var posts = [{
  id: "1",
  title: "Rails is Omakase",
  author: { name: "d2h"},
  date: new Date('12-27-2012'),
  excerpt: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  body: "Bla Bla Bla, Bla Bla Bla, Bla Bla Bla, Bla Bla Bla, Bla Bla Bla, Bla Bla Bla."
}, {

  id: '2',
  title: 'The Parley Letter',
  author: { name: 'd2h'},
  date: new Date('12-24-2012'),
  excerpt: "this is an excerpt",
  body: "This is a body"
}];
