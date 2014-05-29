/*! UbaPlayer - v2.0.2 -  * https://brianhadaway.github.io/UbaPlayer
 * Copyright (c)  2014  Brian Hadaway; Licensed MIT */!function(a,b,c){var d=function(b,c){this.$elem=a(b),this.$elem.data("instance",this),this.init(c)};d.prototype={defaults:{audioButtonClass:"ubaplayer-button",autoPlay:null,codecs:[{name:"OGG",codec:'audio/ogg; codecs="vorbis"'},{name:"MP3",codec:"audio/mpeg"}],continuous:!1,controlsClass:"ubaplayer-controls",extension:null,fallbackExtension:".mp3",fallbackFunctions:{error:null,pause:null,play:null,resume:null},flashAudioPlayerPath:"swf/player.swf",flashExtension:".mp3",flashObjectID:"ubaplayer-flash",loadingClass:"ubaplayer-loading",loop:!1,playerContainer:"ubaplayer-container",playingClass:"ubaplayer-playing",swfobjectPath:"js/swfobject.js",volume:.5},isPlaying:!1,isFlash:!1,isFallback:!1,init:function(b){var c,d=this,e=0;for(this.options=a.extend(!0,{},this.defaults,b||{}),this.loadProxy=a.proxy(this.onLoaded,this),this.errorProxy=a.proxy(this.onError,this),this.endProxy=a.proxy(this.onEnded,this),this.$buttons=a("."+this.options.audioButtonClass),c=this.options.codecs.length,a("."+this.options.controlsClass).on("click",function(a){return d.updateTrackState(a),!1});c>e;e++){var f=this.options.codecs[e];if(this.canPlay(f)){this.options.extension=[".",f.name.toLowerCase()].join("");break}}(!this.options.extension||this.isFlash)&&(this.isFlash=!0,this.options.extension=this.options.flashExtension),this.isFlash?(this.$elem.html("<div id='"+this.options.playerContainer+"'/>"),a.getScript(this.options.swfobjectPath,a.proxy(function(){swfobject.embedSWF(this.options.flashAudioPlayerPath,this.options.playerContainer,"0","0","9.0.0","swf/expressInstall.swf",!1,!1,{id:this.options.flashObjectID},a.proxy(this.swfLoaded,this))},this))):this.options.autoPlay&&this.play(this.options.autoPlay)},pause:function(){this.isFallback?"function"==typeof this.options.fallbackFunctions.pause&&this.options.fallbackFunctions.pause():this.isFlash?this.audio.pauseFlash():this.audio.pause(),this.$tgt.removeClass(this.options.playingClass),this.isPlaying=!1},play:function(d){this.$tgt="undefined"==typeof d?a("."+this.options.audioButtonClass).eq(0):d,this.currentTrack=this.getFileNameWithoutExtension(this.$tgt.attr("href")),this.isPlaying=!0,this.$tgt.addClass(this.options.loadingClass),this.$buttons.removeClass(this.options.playingClass),this.isFallback?"function"==typeof this.options.fallbackFunctions.play&&this.options.fallbackFunctions.play(this.currentTrack+this.options.fallbackExtension):this.isFlash?(this.audio&&this.removeListeners(b),this.audio=c.getElementById(this.options.flashObjectID),this.addListeners(b),this.audio.playFlash(this.currentTrack+this.options.extension)):(this.audio&&(this.audio.pause(),this.removeListeners(this.audio)),this.audio=new Audio(""),this.addListeners(this.audio),this.audio.id="audio",this.audio.loop=this.options.loop?"loop":"",this.audio.volume=this.options.volume,this.audio.src=this.currentTrack+this.options.extension,this.audio.play())},playing:function(){return this.isPlaying},resume:function(){this.isFallback?"function"==typeof this.options.fallbackFunctions.resume&&this.options.fallbackFunctions.resume():this.isFlash?this.audio.playFlash():this.audio.play(),this.$tgt.addClass(this.options.playingClass),this.isPlaying=!0},updateTrackState:function(b){this.$tgt=a(b.target),this.$tgt.hasClass(this.options.audioButtonClass)&&(!this.audio||this.audio&&this.currentTrack!==this.getFileNameWithoutExtension(this.$tgt.attr("href"))?this.play(this.$tgt):this.isPlaying?this.pause():this.resume())},addListeners:function(b){var c=a(b);c.on("canplay",this.loadProxy),c.on("error",this.errorProxy),c.on("ended",this.endProxy)},removeListeners:function(b){var c=a(b);c.off("canplay",this.loadProxy),c.off("error",this.errorProxy),c.off("ended",this.endProxy)},onLoaded:function(){this.$buttons.removeClass(this.options.loadingClass),this.$tgt.addClass(this.options.playingClass),this.audio.play()},onError:function(){this.$buttons.removeClass(this.options.loadingClass),this.isFlash?this.removeListeners(b):this.removeListeners(this.audio)},onEnded:function(){if(this.isPlaying=!1,this.$tgt.removeClass(this.options.playingClass),this.currentTrack="",this.isFlash?this.removeListeners(b):this.removeListeners(this.audio),this.options.continuous){var c=this.$tgt.next().length?this.$tgt.next():a(this.options.audioButtonClass).eq(0);this.play(c)}},canPlay:function(a){return c.createElement("audio").canPlayType?c.createElement("audio").canPlayType(a.codec).match(/maybe|probably/i)?!0:!1:!1},swfLoaded:function(a){a.success||(this.isFlash=!1,this.isFallback=!0,"function"==typeof this.options.fallbackFunctions.error&&this.options.fallbackFunctions.error()),this.options.autoPlay&&setTimeout(function(){this.play(this.options.autoPlay)},500)},getFileNameWithoutExtension:function(a){var b=a.split(".");return b.pop(),b.join(".")}},a.fn.ubaPlayer=function(b,c){return"string"==typeof b?this.each(function(){a(this).data("instance")[b](c)}):this.each(function(){new d(this,b)})}}(jQuery,window,document);