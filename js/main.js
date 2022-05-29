eheart = {
  Views: {}
}

$('.navlink').click(function() {
  // remove all active classes
  $('.navlink').removeClass('active');
  $(this).addClass('active');
})

let imgArray = [
    {
      'title': 'SCIPR : Sensing Curiosity in Play and Responding',
      'img': 'img/front-scipr.png'
    },
    {
      'title': 'Implicitly Persuasive CAPTCHAS',
      'img': 'img/front-captcha.png'
    },
    {
      'title': 'HRVR: Storytelling with Heart Rate in VR',
      'img': 'img/front-hrvr.png'
    },
    {
      'title': 'Self-fictionalization in Miitomo',
      'img': 'img/front-miitomo.jpg'
    },
    {
      'title': 'Y U Not Understand Memes Better',
      'img': 'img/front-meme.jpg'
    }],
    curIndex = 0;
    imgDuration = 5000;

function slide() {
  document.getElementById('slider').src = imgArray[curIndex]['img'];
  document.getElementById('slider').className = "";
  $('span.slider-caption').text(imgArray[curIndex]['title']);
}

var sliding;

function slideShow() {
  document.getElementById('slider').className += "fadeOut";
  setTimeout(slide, 1000);
  curIndex++;
  if (curIndex == imgArray.length) { curIndex = 0; }
  sliding = setTimeout(slideShow, imgDuration);
}

function stopSlideShow() {
  clearTimeout(sliding);
}

// var index = 0;

// function cycle_project_img() {
//   var $active = $('#cycler .img-active');
//   var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
//   $next.css('z-index',2); //move the next image up the pile
//   $active.fadeOut(1500,function(){ //fade out the top image
//     $active.css('z-index',1).show().removeClass('img-active'); //reset the z-index and unhide the image
//     $next.css('z-index',3).addClass('img-active'); //make the next image the top one
//   });
// }

//--------------
// Templates
//--------------
var home_html = '\
  <div id="lab-title"> \
    <br/><br/> \
    <h1>[enhancing / engaging / etc.] human experiences attitudes and relationships</h1> \
  </div> \
  <div id="mission-statement"> \
    We study the transformative impact of interaction technologies, games, and storytelling platforms that aim to enhance personal expression and improve social dynamics. \
  </div> \
  ';

var about_html = '\
  <div id="about"> \
    <div id="about-photo"> \
      <img id="slider" src="img/front-scipr.png" width="400px" /> \
    </div> \
    <div id="about-description"> \
      <h2>MISSION STATEMENT</h2> \
      <p>We study the transformative impact of interaction technologies, games, and storytelling platforms that aim to enhance personal expression and improve social dynamics.</p> \
      <p>Our cross-disciplinary approach blends theories and methods from psychology, design, and computer science, to create and study new technologies and systems for social impact.</p> \
      <p>We aim to leverage the power - and the pleasure - of stories, games, and playful technologies to increase intrapersonal and interpersonal understanding and address a wide array of social issues.</p> \
      <p>We believe that new technologies, when designed with both mind and heart, can improve communication, collaboration, and conscientiousness.</p> \
      <p>Playful technologies engage hearts and minds, preserve a sense of delight, and afford new ways of expressing ourselves and interacting with others.</p> \
      <div id="about-photo-caption"> \
        <p><a href="#projects" id="cycle-caption-link"><span class="slider-caption">SCIPR : Sensing Curiosity in Play and Responding</span></a></p> \
      </div> \
    </div> \
  </div>';

var people_html = '\
    <div class="group-photo-image-container"> \
      <img src="img/group-photo.png"></img> \
    </div> \
    <% _.each(faculty, function(person) { %> \
    <div class="people-item"> \
      <div class="people-item-image-container">\
        <img src="img/<%= person.img %>"></img> \
      </div> \
    </div> \
    <div class="faculty-item-descrip-container"> \
      <div class="faculty-item-name"><%= person.name %> &#8226; <a href="mailto:<%= person.email %>">Email</a></div> \
      <div class="faculty-item-descrip"><%= person.description %></div> \
    </div> \
    <% }) %> \
    <br> \
    <h2>- PHD STUDENTS -</h2> \
    <% _.each(students, function(person) { %> \
    <div class="people-item"> \
      <div class="people-item-image-container">\
        <img src="img/<%= person.img %>"></img> \
      </div> \
      <div class="people-item-name"><%= person.name %></div> \
      <div class="people-item-descrip"><%= person.description %></div> \
      <div class="people-item-web"><% if (person.web != "") { %><a href="<%= person.web %>">Website</a> &#8226; <% } %><a href="mailto:<%= person.email %>">Email</a></div> \
    </div> \
    <% }) %> \
    <br> \
    <br> \
    <h2>- LAB ALUMNI -</h2> \
    <% _.each(alumni, function(person) { %> \
    <div class="people-item"> \
      <div class="people-item-image-container">\
        <img src="img/<%= person.img %>"></img> \
      </div> \
      <div class="people-item-name"><%= person.name %></div> \
      <div class="people-item-web"><% if (person.web != "") { %><a href="<%= person.web %>">Website</a> &#8226; <% } %><a href="mailto:<%= person.email %>">Email</a></div> \
    </div> \
    <% }) %> \
    <br> \
    <h2>- FRIENDS OF THE LAB -</h2> \
    <% _.each(friends, function(person) { %> \
    <div class="people-item"> \
      <div class="friend-item-image-container">\
        <img src="img/<%= person.img %>"></img> \
      </div> \
      <div class="people-item-name"><%= person.name %></div> \
      <div class="people-item-title"><%= person.title %></div> \
      <div class="people-item-descrip"><%= person.description %></div> \
    </div> \
    <% }) %> \
    ';

var projects_html = '\
  ';

var projects_grid_item_html = '\
  <div class="project-item"> \
    <div class="project-item-image-container">\
      <img src="img/<%= img %>"></img> \
    </div> \
    <div class="project-item-info-box"> \
      <div class="project-item-name"><%= name %></div> \
      <div class="project-item-description"><%= description %></div> \
      <br/> \
      <div class="project-item-team-members"><i>Members: <%= members %></i></div> \
    </div> \
  </div>';

//--------------
// Routers
//--------------
eheart.Router = Backbone.Router.extend({
  routes: {
    'home': 'home', // #home
    'about': 'about', // #about
    'people': 'people', // #people
    'projects': 'projects', // #projects
    '': 'home'
  },
  about: function(){
    console.log('about page');
    var view = new eheart.Views.AboutView();
    eheart.appView.showView(view);
    // change the page to about
    setTimeout(slideShow, imgDuration);
  },
  people: function(filter, item) {
    // don't want to reload works
    console.log('people page');
    stopSlideShow();
    var view = new eheart.Views.PeopleView();
    eheart.appView.showView(view);
  },
  projects: function(filter, item) {
    // don't want to reload works
    stopSlideShow();
    var view = new eheart.Views.ProjectsView();
    eheart.appView.showView(view);
  },
  home: function(filter, item) {
    // don't want to reload works
    var view = new eheart.Views.AboutView();
    eheart.appView.showView(view);
    setTimeout(slideShow,imgDuration);
  }
});

//--------------
// Views
//--------------
eheart.Views.HomeView = Backbone.View.extend({
  el: '#content',
  viewname: 'home',
  template: _.template(home_html),
  render: function(){
    this.$el.html(this.template);
    resize_container();
  }
});

eheart.Views.AboutView = Backbone.View.extend({
  el: '#content',
  viewname: 'about',
  template: _.template(about_html),
  render: function(){
    this.$el.html(this.template);
    resize_container();
  }
});

eheart.Views.PeopleView = Backbone.View.extend({
  el: '#content',
  viewname: 'people',

  template: _.template(people_html),

  render: function(){
    var that = this;
    this.$el.html(this.template({
      students: eheart.Students,
      faculty: eheart.Faculty,
      friends: eheart.Friends,
      alumni: eheart.Alumni
    }));

    resize_container();
  }
});

eheart.Views.ProjectsView = Backbone.View.extend({
  el: '#content',
  viewname: 'projects',

  template: _.template(projects_html),
  grid_item_template: _.template(projects_grid_item_html),

  render: function(){
    var that = this;
    this.$el.html(this.template);
    var projects = _.sortBy(eheart.Projects, function(project){return project})
    _.each(eheart.Projects, function(value, key){
      if (!that.filter || value.tag == that.filter) {
        that.$el.append(that.grid_item_template(value));
      }
    });

    resize_container();
  }
});

eheart.Views.AppView = Backbone.View.extend({
  showView: function (view) {
    if (this.currentView){
      this.currentView.close();
    }

    this.currentView = view;
    this.currentView.render();

    $("#content-container").html(this.currentView.el).hide().slideDown();
    resize_container();
  }
});

Backbone.View.prototype.close = function(){
  this.remove();
  this.unbind();
}

//--------------
// People Objects
//--------------
eheart.Faculty = {
  'geoff': {
    'name': 'Geoff Kaufman',
    'img': 'geoff-square.png',
    'title': 'Assistant Professor',
    'web': '',
    'description': 'Geoff Kaufman is the founder of the eHeart Lab and an Assistant Professor in the Human-Computer Interaction Institute at Carnegie Mellon. He holds a Ph.D. and M.A. in social psychology from Ohio State University, and a B.A. in psychology from Carnegie Mellon University. Prior to joining the faculty in the HCII in 2015, Geoff was a postdoctoral researcher at Tiltfactor, a game design and research laboratory at Dartmouth College. His primary research focuses on how experience-taking - the mental simulation of characters experiences in fictional narratives, virtual worlds, or games - can change individuals\' self-concepts, attitudes, behaviors, and emotions. This work has led to new insights regarding user-specific, design-specific, and situational variables that increase the impact of stories, games, and mediated interactions, and a set of empirically validated techniques and best practices for the creation of playful interventions for social change. His personal 500+ board game collection both informs and provides a regular distraction from his academic pursuits.',
    'status': 'prof',
    'email': 'gfk@cs.cmu.edu'
  }
}
eheart.Students = {
  'alexandra': {
    'name': 'Alexandra To',
    'img': 'alexandra-square.png',
    'title': 'Ph.D. Student',
    'web': 'http://www.alexandrato.com',
    'email': 'aato@cs.cmu.edu',
    'description': 'Alexandra To graduated from Stanford University with a B.S. \'14, M.S. \'15 in Symbolic Systems. Her current research focuses on designing and studying non-digital games that serve as interventions for marginalized students. Her previous work and personal interests are in race and gender equality, social justice, and video games featuring dragons.',
    'twitter': '@alexandra__to',
    'status': 'phd'
  },
  'fannie': {
    'name': 'Fannie Liu',
    'img': 'fannie-square-2.png',
    'title': 'Ph.D. Student',
    'web': 'http://fannieliu.com',
    'email': 'ffl@cs.cmu.edu',
    'description': 'Fannie Liu works on building technological interventions to facilitate positive social interactions. She graduated from the University of Pennsylvania with a BSE in Digital Media Design and MSE in Computer Graphics and Game Technology, and has worked as a software engineer at LinkedIn. When she has free time, she occasionally draws.',
    'status': 'phd'
  },
  'joseph': {
    'name': 'Joseph Seering',
    'img': 'joseph-square.png',
    'title': 'Ph.D. Student',
    'web': 'http://joseph.seering.org',
    'description': 'Joseph works at the intersection of social science and design, informed by a BA in Social Studies from Harvard University and work as a research assistant at MIT. His research focuses on sociotechnical foundations of harmful behaviors online. Outside of work, he spends his time exploring the stranger corners of the internet and being snarky about it on Twitter.',
    'twitter': '@josephseering',
    'email': 'jseering@cs.cmu.edu',
    'status': 'phd'
  },
  'erica': {
    'name': 'Erica Cruz',
    'img': 'erica-1.jpg',
    'title': 'Ph.D. Student',
    'web': 'https://eripricru.wixsite.com/cmuhciiphdportfolio',
    'description': 'Erica Cruz develops computer-mediated games and immersive experiences with the intent to empower marginalized communities. She earned her BA in Interdisciplinary Computing and the Arts at the University of California San Diego after earning her AA in Computer Animation at Antelope Valley College. When she is not busy working towards her PhD in HCI, she can be found at the park with her dog or playing Legend of Zelda games.',
    'email': 'ecruz@cs.cmu.edu',
    'status': 'phd'
  }
}

eheart.Alumni = {
  'anna': {
    'name': 'Anna Kasunic',
    'img': 'anna-square.png',
    'title': 'Ph.D. Student',
    'description': 'Anna Kasunic is interested in how technology mediates how people perceive themselves and others, and how people relate and communicate with one another. She holds a BA in Spanish and an MS in Public Policy and Management, and has worked in non-profit and research-related environments.',
    'email': 'amkasunic@gmail.com',
    'web': 'https://anna.zone',
    'status': 'phd'
  },
  'joselyn': {
    'name': 'Joselyn McDonald',
    'img': 'joselyn-square.png',
    'title': 'Ph.D. Student',
    'description': 'Joselyn McDonald is a designer and technologist with a deep interest in fostering empathy and playfulness in digital spaces. She earned an MFA with Honors in Design and Technology at Parsons the New School for Design. Her current research focuses on how absurd humor influences digital communication. In her spare time, Joselyn is the co-host of a comedy podcast called Malling (iTunes), which is just an excuse to frequently visit the mall with her funniest friends.',
    'web': 'http://www.joselynmcdonald.com',
    'email': 'joselyn@cmu.edu',
    'status': 'phd'
  },
}

eheart.Friends = {
  'sushma': {
    'name': 'Sushma Kumble',
    'img': 'sushma-square.png',
    'title': 'Associate Professor',
    'web': '',
    'description': '',
    'status': 'friend1'
  },
  'chris': {
    'name': 'Chris Wu',
    'img': 'chris-square.png',
    'title': 'Research Assistant',
    'web': '',
    'description': '',
    'status': 'friend'
  },
  'chengcheng': {
    'name': 'Cheng Cheng Zhao',
    'img': 'blank-square.png',
    'title': 'Research Assistant',
    'web': '',
    'description': '',
    'status': 'friend'
  },
}

//--------------
// Project Objects
//--------------
eheart.Projects = {
  // 'audiencegames': {
  //   'name': 'Audience Participation Games',
  //   'img': 'twitch.png',
  //   'members': 'Joseph Seering and Dr. Geoff Kaufman',
  //   'description': 'This study explores dynamics of livestreamed games where audiences directly engage with the game world or player to affect outcomes. We are focusing both on social and mechanical characteristics of these games and how they impact users.'
  // },
  'captcha': {
    'name': 'Implicitly Persuasive CAPTCHAS',
    'img': 'captcha.png',
    'members': 'Joseph Seering and Dr. Geoff Kaufman',
    'description': 'We tested CAPTCHAs specially-designed to increase positive tone in news comments and to increase analytical complexity of responses. We found a 20-40% increase in both with variance across types of CAPTCHAs. The most effective CAPTCHAs were those with slightly but not strongly positive imagery.'
  },
  'care': {
    'name': 'Coping After Racist Experiences (CARE)',
    'img': 'no-img.png',
    'members': 'Alexandra To, Dr. Jessica Hammer, Dr. Geoff Kaufman',
    'description': 'Understanding how people seek and receive social support following experiences of interpersonal racism with a focus on coping with and resolving uncertainty.'
  },
  'expressive-biosignals': {
    'name': 'Expressive Biosignals',
    'img': 'biosignals.png',
    'members': 'Fannie Liu, Dr. Laura Dabbish, Dr. Geoff Kaufman',
    'description': 'We are exploring the concept of "expressive biosignals," using sensed physiological data to introduce a new host of social cues in our interactions. This research involves using wearable sensors to record physiological responses (e.g., heart rate) and designing feedback to enable people to express themselves and understand each other in new ways.'
  },
  'char': {
    'name': 'Character Diversity in Digital and Non-Digital Games',
    'img': 'no-img.png',
    'members': 'Alexandra To, Jocelyn McDonald, Dr. Jessica Hammer, Dr. Geoff Kaufman',
    'description': 'Identifying techniques to represent diverse characters beyond shallow, visual means.'
  },
  'babybot': {
    'name': 'ML-based chatbots embedded in communities',
    'img': 'babybot.png',
    'members': 'Joseph Seering, Michal Luria, Connie Ye, Dr. Geoff Kaufman, and Dr. Jessica Hammer',
    'description': 'Most current chatbots communicate with users either 1-on-1 or respond to simple commands when in a group workspace. We tested what it would be like to have a chatbot that "grows up" and learns how to behave in a small community, showing that ML-based chatbots can be positive contributors to a space if properly designed and can inspire new types of interactions.'
  },
  'hr-storytelling': {
    'name': 'HRVR: Storytelling with Heart Rate in VR',
    'img': 'hrvr.png',
    'members': 'Fannie Liu, Dr. Laura Dabbish, Dr. Geoff Kaufman',
    'description': 'We are designing a scalable virtual reality tool as a novel empathy intervention, that enables people to create immersive interactive narratives from their personal experiences and historical heart rate data (e.g., recorded from fitness trackers).'
  },
  'moderation': {
    'name': 'Processes for Moderation in Online Communities',
    'img': 'mod.png',
    'members': 'Joseph Seering, Dr. Geoff Kaufman, Stevie Chancellor, Tony Wang, and Jina Yoon',
    'description': 'In order to understand how best to intervene to improve moderation in online communities, it is important to understand users\' existing processes. We interviewed 79 volunteer moderators from Facebook Groups, Reddit, and Twitch and developed process maps and mental models for their work.'
  },
  // 'facerig': {
  //   'name': 'Anonymous Video Communication',
  //   'img': 'facerig.png',
  //   'members': 'Joseph Seering, Fannie Liu, Dr. Geoff Kaufman',
  //   'description': 'We are exploring how anonymizing videos using applications such as FaceRig affect computer-mediated communication, with the goals of increasing empathy and reducing biases.'
  // },
  'miitomo': {
    'name': 'Miitomo',
    'img': 'miitomo-maker.png',
    'members': 'Dr. Anna Kasunic and Dr. Geoff Kaufman',
    'description': 'We observed aspects of self-fictionalization and engagement in Nintendo\'s Miitomo mobile applications, which simultaneously promotes promotes fantasy/self-distancing and authentic self-representation. '
  },
  'memes': {
    'name': 'Y U Not Understand Memes Better',
    'img': 'memes.jpg',
    'members': 'Joselyn McDonald, Dr. Geoff Kaufman, Dr. Anna Kasunic, Joseph Seering',
    'description': 'Through our research, we aim to better understand how the sharing of memes impacts cognitive, affective, and behavioral experiences. This work will allow us to build systems that analyze memetic communication, leading to better predictions of contexts that are especially likely to trigger the use of meme-communication and how memes are likely to be perceived by the user.'
  },
  // 'aliens': {
  //   'name': 'Alien Capture',
  //   'img': 'alien-project.png',
  //   'members': 'Anna Kasunic and Dr. Geoff Kaufman',
  //   'description': 'We manipulated expected paradigms of online self-presentation to explore how context affects perceptions of self and others. Using the framework of a fictionalized alien capture scenario, we asked study participants to share photos and information about themselves, and later conducted in-depth interviews.'
  // },
  // 'onlineharassment': {
  //   'name': 'Technical and Social Responses to Harassment Online',
  //   'img': '',
  //   'members': 'Joseph Seering and Dr. Geoff Kaufman',
  //   'description': 'This project explores ways in which members of online communities deal with targeted harassment. In particular, we hope to gain a better understanding of the ways in which technical and social features help protect users, and where these features are lacking.'
  // },
  // 'scipr': {
  //   'name': 'Sensing Curiosity in Play and Responding (SCIPR)',
  //   'img': 'scipr.png',
  //   'members': 'Alexandra To, Safinah Ali, Elaine Fath, Anny Fan, Siyuan Tu, Catherine Kildunne, Eda Zhang, JiaQi Wang, Dr. Jessica Hammer, Dr. Geoff Kaufman',
  //   'description': 'Creating tabletop game-based interventions for marginalized groups in STEM at the middle school age level to increase STEM engagement through increasing curiosity.'
  // }
}

//--------------
// Initializers
//--------------
var resize_container = function () {
  var width = $(window).width() - 25;
  if (width > 1200) {
    width = 1200;
  }
  //$('.work-page-image').css('max-width', width-200);
  //$('#content-container').width(width);
};

$( window ).resize(resize_container);

eheart.appView = new eheart.Views.AppView();
eheart.router = new eheart.Router();
Backbone.history.start();