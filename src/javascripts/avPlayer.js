UK_Parliament.avPlayer = function () {
  /**
   * Audio & Video player
   */

  var videos = document.querySelectorAll('.video-wrap');

  // End program if there are no video wrapper.
  if (videos.length < 1) {
    return false;
  }

  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];

    if (video.hasAttribute('data-media-id') && video.hasAttribute('data-media-source')) {
      var
        target_id = video.getAttribute('data-media-id'),
        media_src = video.getAttribute('data-media-source'),
        media_start = video.getAttribute('data-media-start'),
        media_thumbnail = video.getAttribute('data-media-thumbnail'),
        media_end = video.getAttribute('data-media-end');

      kWidget.embed({
        'targetId': target_id,
        'wid': '_2406281',
        'uiconf_id' : '42784291',

        // player options
        // options can be set global when creating your player
        // or can be added when you make a call
        'flashvars': {
          //- 'KalturaSupport.LeadWithHTML5': true,
          //- 'leadWithHTML5': true,
          'titleLabel': {
            'plugn': true
          },
          'mediaProxy': {
            'entry': {
              'id': '1',
              'thumbnailUrl': media_thumbnail
            },
            'sources': [
              {
                'src': media_src,
                'type': 'application/vnd.apple.mpegurl' // mimetype dependent on source
              }
            ],
            'mediaPlayFrom': media_start,
            'mediaPlayTo': media_end
          }
        }
      });
    }
  }

};
UK_Parliament.avPlayer();
