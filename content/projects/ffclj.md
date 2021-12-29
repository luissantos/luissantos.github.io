---
title: FFCLJ
date: 2021-12-30
image: headers/innovation.jpg
projectImage: blog/ffclj.png
hideHeader: true
license: MIT License
source: https://github.com/luissantos/ffclj/
---

FFCLJ is a simple ffmpeg clojure wrapper. It aims to provide a simple wrapper around ffmpeg.

<!--more-->

## Features

* ffmpeg and ffprobe support
* ffmpeg progress using core.async channels
* babashka support


## Usage

```clj
(with-open [task (ffmpeg! 
    [:y 
    :i "http://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/ToS-4k-1920.mov"
    :ss "00:00:00.000"
    :t "5"
    [:s "1280x720" :acodec "aac" :vcodec "h264" "720p.mp4"]])]

    (.wait-for task)
    (println "Transcoding completed. Exit code: " (.exit-code task)))
    
```