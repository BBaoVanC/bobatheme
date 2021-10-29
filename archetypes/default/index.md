---

title: {{ replace .Name "-" " " | humanize }}
menu: main
toc: true
comments: false

authors:
  - {{ with .Site.Author.name }}{{ . }}{{ else }}John Doe{{ end }}

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
