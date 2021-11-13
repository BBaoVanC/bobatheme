---

title: {{ replace .Name "-" " " | humanize }}
date: {{ .Date }}
toc: true
comments: true
draft: true

authors:
  - {{ with .Site.Author.name }}{{ . }}{{ else }}John Doe{{ end }}

tags:
  - awesome

series:
  - Archetype

# this will be shown for the article in list pages and in the page metadata
# it can be either an image or video (this might change in the future, however)
resources:
  - name: feature
    src: something.webp
    title: Some image (image format can be anything; webp is just an example)

---

This page is about something. All the content before the "more" HTML comment
below will become the summary, which will be used in list pages and in the meta
tags on the article.

Or, if you don't want your description to be at the top of the article, you can
set your own `description` in the front matter and it will override this. See
the [Content Summaries](https://gohugo.io/content-management/summaries/) page on
the Hugo docs for more information.

<!--more-->

## Something

All the content below the "more" HTML comment above is part of the article
itself.
