# HTML5 视频播放
## video

HTML `<video>` 元素 用于在HTML文档中嵌入视频内容

### 基础属性介绍

> **src** : 要嵌到页面的视频的URL。可选；你也可以使用video块内的 `<source>` 元素来指定需要嵌到页面的视频。

> **duration** : 总时长，单位：秒

> **paused** : 视频是否暂停

> **width** 和 **height** : 视频区域宽高，像素值。

> **autoplay** : 布尔类型；视频是否自播放。

> **buffered** : 这个属性可以读取到哪段时间范围内的媒体被缓存了。该属性包含了一个 TimeRanges 对象。

> **controls** : 是否显示浏览器默认的控制器

> **loop** : 布尔类型；指定后，会在视频结尾的地方，自动返回视频开始的地方

> **muted** : 布尔类型；指明了视频里的音频的默认设置。设置后，音频会初始化为静音。默认值是false,意味着视频播放的时候音频也会播放 。

> **played** : 一个 TimeRanges 对象，指明了视频已经播放的所有范围。范围以类数组的形式存储，并会自动合并已播放的范围。

> **preload** : 有三种取值 \
> `none` : 提示浏览器该视频不需要缓存 \
> `metadata` : 提示浏览器抓去视频的元数据(比如：视频长度) \
> `auto` 或者 `空值` : 会加载并缓存视频 

> **poster** : 一个海报帧的url

###  使用source

> **media** : 规定媒体资源的类型，和css媒体查询相同。

> **src** : 规定媒体文件的 URL。

> **type** : 	规定媒体资源的 MIME 类型。

示例

## 字幕

使用`<track>`标签在视频中嵌入字幕

### 基础属性介绍

> **default** : 该属性定义了该track应该启用，除非用户首选项指定了更合适一个track。每个媒体元素里面只有一个 track 元素可以有这个属性。

> **kind** : 定义了 text track 应该如何使用。如果省略了该属性，默认的 kind 值就是 subtitles。下面是允许的关键字：
> `subtitles` : 字幕给观影者看不懂的内容提供了翻译。比如英文电影里非英文的对话框或者文字。字幕可能包含额外的内容，通常有附加的背景信息。比如在电影星球大战开头的文字，或者某个场景的日期，时间，还有地点。
> `captions` : 隐藏式字幕提供了音频的转录甚至是翻译。可能包含重要的非言语的信息，比如音乐提示或者音效。可以指定提示音的源文件 (e.g. music, text, character).适用于耳聋的用户或者当调成静音的时候。
> `descriptions` : 视频内容的文本描述。适用于失明用户或者当视频不可见的场景。
> `chapters` : 章节标题用于用户浏览媒体资源的时候。
> `metadata` : 脚本使用的track。 对用户不可见。

> **label** : 当列出可用的text tracks时，给浏览器使用的text track的标题，这种标题是用户可读的。

> **src** : track的地址。必须是合法的URL。该属性必须定义。

> **srclang** : track文本数据的语言。它必须是合法的 BCP 47 语言标签。如果 kind 属性被设为 subtitles, 那么srclang 必须定义。

### 注意事项

一个媒体元素的任意两个 track 子元素不能有相同的 kind, srclang, 和 label属性。

示例

## 播放器实现