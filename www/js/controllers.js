angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  /*play audio*/

var audioParams = {
    url: 'http://s8.viastreaming.net:8965/;?type=http&nocache=16073',
    userAgent: 'MyAwesomePlayer', // default is 'ExoPlayerPlugin'
    aspectRatio: 'FILL_SCREEN', // default is FIT_SCREEN
    hideTimeout: 5000, // Hide controls after this many milliseconds, default is 5 sec
    seekTo: 0, // Start playback 10 minutes into video specified in milliseconds, default is 0
    skipTime: 0, // Amount of time to use when going forward/backward, default is 1 min
    audioOnly: false, // Only play audio in the backgroud, default is false.
    //subtitleUrl: 'http://url.to/subtitle.srt', // Optional subtitle url
    controller: { // If this object is not present controller will not be visible
        streamImage: 'http://url.to/channel.png',
        streamTitle: 'My channel',
        streamDescription: '2nd line you can use to display whatever you want',
        hideProgress: true,
        controlIcons: {
            'exo_rew': 'http://url.to/rew.png',
            'exo_play': 'http://url.to/play.png',
            'exo_pause': 'http://url.to/pause.png',
            'exo_ffwd': 'http://url.to/ffwd.png'
        }
    }
}

$scope.playAudio = function(){
  //var player = exoplayer.init(audioParams);
    window.ExoPlayer.show(audioParams,function(succ){
      console.log(succ)}, function(err){
        console.log(err)
      });
  //player.play() 
}

/*play video*/
var videoParams = {
    url: 'https://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8',
    userAgent: 'MyAwesomePlayer', // default is 'ExoPlayerPlugin'
    aspectRatio: 'FILL_SCREEN', // default is FIT_SCREEN
    hideTimeout: 5000, // Hide controls after this many milliseconds, default is 5 sec
    seekTo: 0, // Start playback 10 minutes into video specified in milliseconds, default is 0
    skipTime: 0, // Amount of time to use when going forward/backward, default is 1 min
    //audioOnly: true, // Only play audio in the backgroud, default is false.
    //subtitleUrl: 'http://url.to/subtitle.srt', // Optional subtitle url
    controller: { // If this object is not present controller will not be visible
        streamImage: 'http://url.to/channel.png',
        streamTitle: 'My channel',
        streamDescription: '2nd line you can use to display whatever you want',
        hideProgress: true,
        controlIcons: {
            'exo_rew': 'http://url.to/rew.png',
            'exo_play': 'http://url.to/play.png',
            'exo_pause': 'http://url.to/pause.png',
            'exo_ffwd': 'http://url.to/ffwd.png'
        }
    }
}



$scope.playVideo = function(){
 //var player = exoplayer.init(videoParams);
    window.ExoPlayer.show(videoParams,function(succ){
      console.log(succ)}, function(err){
        console.log(err)
      });
      //player.play() 
}
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
