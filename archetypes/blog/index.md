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

# this will be shown for the article in list pages
# currently it can be either an image or video
[[resources]]
name = "feature"
src = "something.webp"
title = "Some image (image format can be anything; webp is just an example)"
+++
