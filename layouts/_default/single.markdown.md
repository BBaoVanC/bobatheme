{{ with .File -}}
  {{ with (.Path | readFile) -}}
    {{ . -}}
  {{ else -}}
    {{ errorf "file not found: %s" .Path -}}
  {{ end -}}
{{ else -}}
  {{ errorf "no file available for markdown template?" -}}
{{ end -}}
