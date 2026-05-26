let videoplayers = document.querySelectorAll('.video-clicks');
Object.entries(videoplayers).map((object) => {
  object[1].addEventListener('click', function(e) {
    e.preventDefault();
    // debugger;
    const boxes = document.querySelectorAll('[class*="child"]');
    boxes.forEach(box => {
      box.classList.remove('active', 'fade-out');
    });
    //var index = parseInt(e.target.parentElement.classList[1].split('_')[1]);
    var index = parseInt(e.target.closest('[class*="child"]').classList[1].split('_')[1]);
    document.querySelector('#main_body_section').removeAttribute('class');
    //document.querySelector('.' + e.target.parentElement.classList[0]).classList.add('active')
    document.querySelector('#main_body_section').classList.add('main_body_section', 'active_' + index);
    e.target.closest('[class*="child"]').classList.add('active');
    document.querySelector('#isi').classList.remove('collapsed');
    $('html, body').animate({
      scrollTop: $('.' + e.target.closest('[class*="child"]').classList[0]).offset().top - 40
    }, 500);
    // setTimeout(function() {
    //   document.querySelector('html').classList.add('videoShow');
    //   document.getElementById('isi').classList.remove('collapsed');
    //   document.getElementById("main").classList.remove("collapsed2", "collapsed");
    // }, 50);
    document.querySelector('html').classList.add('videoShow');
    setTimeout(function() {
      document.getElementById('isi').classList.remove('collapsed');
      document.getElementById("main").classList.remove("collapsed2", "collapsed");
    }, 1000);
    if (e.target.closest('[class*="child"]').classList[0] === 'fb-cols') {
      if (e.target.classList[0] === 'open-btn') {
        //   setTimeout(function() {
        //     $("#PSxFB").load("flippingbook.html");
        //   }, 100);
        // } 
        // else {
        //   $("#PSxFB").empty();
        //$("#PSxFB").empty();
        //$("#PSxFB").html('');
        // $('html, body').animate({
        //   scrollTop: $('.' + e.target.closest('[class*="child"]').classList[0]).offset().top - 20
        // }, 500);
        $('html, body').animate({
          scrollTop:$('#PSxFB').offset().top - 20
        }, 5000);
        // $("#PSxFB").empty();
        // $("#PSxFB").html('');
        setTimeout(function() {
          $("#PSxFB").empty();
        $("#PSxFB").html('');
          $("#PSxFB").load("flippingbook.php");
        }, 2000);
      }
    }
  })
})
let closevideoplayer = document.querySelectorAll('#main_body_section .close-videos');
Object.entries(closevideoplayer).map((object) => {
  object[1].addEventListener('click', function(e) {
    e.preventDefault();
    // debugger;
    document.querySelector('html').classList.remove('videoShow');
    document.querySelector('#main_body_section').removeAttribute('class');
    document.querySelector('#main_body_section').classList.add('main_body_section');
    const boxes = document.querySelectorAll('[class*="child"]');
    boxes.forEach(box => {
      box.classList.remove('active');
    });
    e.target.closest('[class*="child"]').classList.add('fade-out');
    if (e.target.closest('[class*="child"]').classList[0] === 'fb-cols') {
      setTimeout(function() {
        $("#PSxFB").empty();
        $("#PSxFB").html('');
        document.querySelector('body').classList.remove('peeled', 'turned');
      }, 1000);
    }
  })
})
// let playvideo = document.querySelectorAll('.play-video');
// Object.entries(playvideo).map((object) => {
//   object[1].addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('.' + e.target.parentElement.parentElement.classList[0]).classList.add('active')
//     $('html, body').animate({
//       scrollTop: $('.' + e.target.parentElement.parentElement.classList[0]).offset().top
//     }, 500);
//     setTimeout(function() {
//       document.querySelector('html').classList.add('videoShow');
//       document.getElementById('isi').classList.remove('collapsed');
//       document.getElementById("main").classList.remove("collapsed2", "collapsed");
//     }, 1011);
//   })
// })
// let closeplay = document.querySelectorAll('.close-play');
// Object.entries(closeplay).map((object) => {
//   object[1].addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('.' + e.target.parentElement.parentElement.classList[0]).classList.remove('active')
//   })
// })