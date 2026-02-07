$(document).ready(function () {
  var tracks = Config.MusicPlayer.tracks;
  var currentIndex = 0;
  var audio = document.getElementById("MusicAudio");
  var isPlaying = false;
  var shuffleOn = false;

  // Build playlist
  for (var i = 0; i < tracks.length; i++) {
    var item = $('<div class="mpPlaylistItem" data-index="' + i + '">' +
      '<img class="mpPlCover" src="' + tracks[i].cover + '" alt="cover" />' +
      '<span class="mpPlName">' + tracks[i].name + '</span>' +
      '<i class="fa-solid fa-volume-high mpPlPlaying"></i>' +
      '</div>');
    $(".mpPlaylist").append(item);
  }

  function loadVideo(src) {
    var bg = document.getElementById("BackgroundVideo");
    if (bg) {
      var source = bg.querySelector("source");
      if (source) {
        source.src = src;
      } else {
        bg.src = src;
      }
      bg.load();
      bg.play().catch(function () {});
    }
  }

  // Load and autoplay first track
  audio.src = tracks[0].audio;
  loadVideo(tracks[0].video);
  $(".mpCoverImg").attr("src", tracks[0].cover);
  audio.volume = parseInt($(".mpVolSlider").val()) / 100;
  $(".mpTrackName").text(tracks[0].name);
  updatePlaylistHighlight();
  audio.play().then(function () {
    isPlaying = true;
    $(".mpPlayPause i").removeClass("fa-play").addClass("fa-pause");
  }).catch(function () {
    isPlaying = false;
  });

  function loadTrack(index) {
    currentIndex = index;
    audio.src = tracks[index].audio;
    loadVideo(tracks[index].video);
    $(".mpCoverImg").attr("src", tracks[index].cover);
    $(".mpTrackName").text(tracks[index].name);
    $(".mpProgress").css("width", "0%");
    $(".mpTimeLeft").text("0:00");
    $(".mpTimeRight").text("0:00");
    updatePlaylistHighlight();
    audio.play();
    isPlaying = true;
    $(".mpPlayPause i").removeClass("fa-play").addClass("fa-pause");
  }

  function updatePlaylistHighlight() {
    $(".mpPlaylistItem").removeClass("active");
    $(".mpPlaylistItem[data-index='" + currentIndex + "']").addClass("active");
  }

  // Click on playlist item
  $(".mpPlaylistItem").on("click", function () {
    var index = parseInt($(this).data("index"));
    loadTrack(index);
  });

  // Update progress bar
  audio.addEventListener("timeupdate", function () {
    if (audio.duration) {
      var pct = (audio.currentTime / audio.duration) * 100;
      $(".mpProgress").css("width", pct + "%");
      $(".mpTimeLeft").text(formatTime(audio.currentTime));
      $(".mpTimeRight").text(formatTime(audio.duration));
    }
  });

  // Auto-advance when track ends
  audio.addEventListener("ended", function () {
    if (shuffleOn) {
      var rand = Math.floor(Math.random() * tracks.length);
      while (rand === currentIndex && tracks.length > 1) {
        rand = Math.floor(Math.random() * tracks.length);
      }
      loadTrack(rand);
    } else {
      loadTrack((currentIndex + 1) % tracks.length);
    }
  });

  // Play/Pause
  $(".mpPlayPause").on("click", function () {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      $(".mpPlayPause i").removeClass("fa-pause").addClass("fa-play");
    } else {
      audio.play();
      isPlaying = true;
      $(".mpPlayPause i").removeClass("fa-play").addClass("fa-pause");
    }
  });

  // Next
  $(".mpNext").on("click", function () {
    loadTrack((currentIndex + 1) % tracks.length);
  });

  // Previous
  $(".mpPrev").on("click", function () {
    loadTrack((currentIndex - 1 + tracks.length) % tracks.length);
  });

  // Shuffle
  $(".mpShuffle").on("click", function () {
    shuffleOn = !shuffleOn;
    $(this).toggleClass("active");
  });

  // Restart current track
  $(".mpRestart").on("click", function () {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
    $(".mpPlayPause i").removeClass("fa-play").addClass("fa-pause");
  });

  // Seek
  $(".mpProgressBar").on("click", function (e) {
    if (!audio.duration) return;
    var rect = this.getBoundingClientRect();
    var pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  });

  // Volume
  $(".mpVolSlider").on("input", function () {
    var val = parseInt($(this).val());
    audio.volume = val / 100;
    var icon = $(".mpVolIcon");
    icon.removeClass("fa-volume-high fa-volume-low fa-volume-off fa-volume-xmark");
    if (val > 70) icon.addClass("fa-volume-high");
    else if (val > 30) icon.addClass("fa-volume-low");
    else if (val > 0) icon.addClass("fa-volume-off");
    else icon.addClass("fa-volume-xmark");
  });

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
});
