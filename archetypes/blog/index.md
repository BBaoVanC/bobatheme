+++
title = "{{ replace .Name "-" " " | title }}"
date = "{{ .Date }}"
toc = true
draft = true

description = """
Lorem ipsum
"""

tags = [
  "awesome",
]

# this image will be shown for the article in list pages
[[resources]]
name = "feature"
src = "something.webp"
title = "Some image (image format can be anything; webp is just an example)"

# same as above, but a video. only one will be shown; image takes
# priority over video
[[resources]]
name = "feature-video"
src = "whatever.webm"
title = "Whatever video (video format can be anything; webm is just an example)"
+++
