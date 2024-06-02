# WAIT

> [!WARNING]
> 尚未完成

infocard
---
links裡面的icon使用了fontawesome
```yaml
infocard:
  author: your name
  introduce: some text
  links:
    - icon: fa-brands fa-github fa-xl # fontawesome icon example
      link: "https://github.com/phillychi3"

```
customize設定
---
type只能是text或者image

格式需要與下面一樣
```yaml
customize:
  text:
    type: text
    text: '123'
  image":
    type: image
    image: 'https://nekos.best/api/v2/neko/ae8ca777-d7f6-400f-8600-69702ae26672.png'
    url: '/'

```
waline
---
waline可以選擇啟用或關閉

如果選擇關閉可以不要填寫以下欄位

Google Analytics
---
一樣也可以選擇開啟或關閉

id填寫google給你的就好了


all setting
---
```yaml
menu:
  Home: / # do not edit
  Archives: /archives # do not edit
  Github: https://github.com/phillychi3 # example

headerimage: image url
background: image url

infocard:
  author: your name
  introduce: some text
  links:
    - icon: fa-brands fa-github fa-xl # fontawesome icon example
      link: "https://github.com/phillychi3"

customize: # type only text or image
  test1:
    type: text
    text: '123'
  test2":
    type: image
    image: 'https://nekos.best/api/v2/neko/ae8ca777-d7f6-400f-8600-69702ae26672.png'
    url: '/'
  test3":
    type: image
    image: 'https://nekos.best/api/v2/neko/be1bef84-1789-40ec-b67d-a9287b82dc39.png'
    url: '/'


waline:
  enable: true
  serverurl: waline server url
  emoji:
    - https://unpkg.com/@waline/emojis@1.2.0/tw-emoji # check waline docs
  lang: zh-TW
  meta:
    - nick
    - mail
    - link
  requiredMeta:
    - nick
  login: disable
  imageUploader: true
  commentCount: true
  pageSize: 10
  wordLimit: 0

GAnalytics:
  enable: true
  id: gogle analy id
```