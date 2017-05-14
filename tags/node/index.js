


    




<!DOCTYPE HTML>

<html>
    <head>
        
            <title>Node.js - プログラマー備忘録</title>
        

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Hugo 0.19" />
        


        
        
            
                <meta name="description" content="HTML5 UP theme, Future Imperfect with some extra goodies, ported by Julio Pescador. Powered by Hugo">
            
        

        
        <meta property="og:title" content="Node.js" />
<meta property="og:description" content="HTML5 UP theme, Future Imperfect with some extra goodies, ported by Julio Pescador. Powered by Hugo" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://sankame.github.io/tags/node/index.js/" />



<meta property="og:updated_time" content="2015-06-23T00:00:00&#43;00:00"/>










        
<meta itemprop="name" content="Node.js">
<meta itemprop="description" content="HTML5 UP theme, Future Imperfect with some extra goodies, ported by Julio Pescador. Powered by Hugo">


        

        

        

        
            
        

        
        
            <link rel="stylesheet" href="/css/google-font.css" />
            <link rel="stylesheet" href="/css/font-awesome.min.css" />
            <link rel="stylesheet" href="/css/main.css" />
            <link rel="stylesheet" href="/css/add-on.css" />
            <link rel="stylesheet" href="/css/monokai-sublime.css">
        

        
            
                
            
                
                    <link rel="stylesheet" href="/css/sankame.css" />
                
            
        

        
        
        
            
        
    </head>
    <body>

        
        <div id="wrapper">

    
<header id="header">
    
        <h2><a href="/">プログラマー備忘録</i></a></h2>
    

    <nav class="links">
        <ul>
            
                <li>
                    <a href="/categories">
                        Categories
                    </a>
                </li>
            
                <li>
                    <a href="/about">
                        About
                    </a>
                </li>
            
        </ul>
    </nav>
    <nav class="main">
        <ul>
            
            <li class="search">
                <a class="fa-search" href="#search">Search</a>
                <form id="search" method="get" action="//google.com/search">
                    <input type="text" name="q" placeholder="Search" />
                    <input type="hidden" name="q" value="site:https://sankame.github.io/">
                </form>
            </li>
            <li class="menu">
                <a class="fa-bars" href="#menu">Menu</a>
            </li>
        </ul>
    </nav>
</header>


<section id="menu">

    
        <section>
            <form class="search" method="get" action="//google.com/search">
                <input type="text" name="q" placeholder="Search" />
                <input type="hidden" name="q" value="site:https://sankame.github.io/">
            </form>
        </section>

    
        <section>
            <ul class="links">
                
                    <li>
                        <a href="/categories">
                            <h3>
                                
                                Categories
                            </h3>
                        </a>
                    </li>
                
                    <li>
                        <a href="/about">
                            <h3>
                                
                                About
                            </h3>
                        </a>
                    </li>
                
            </ul>
        </section>

    
        <section>
            <ul class="links">
                <header>
                    <h3>Recent Posts</h3>
                </header>
                
                    
                

                
                    <li>
                        <a href="https://sankame.github.io/blog/2017-05-14-view_sqlite_on_android/"><p>AndroidのSQLite DBを参照</p></a>
                    </li>
                
                    <li>
                        <a href="https://sankame.github.io/blog/2017-04-16-speed_up_website_use_browser_cache/"><p>Webサイト・スピードアップ - ブラウザキャッシュ利用</p></a>
                    </li>
                
            </ul>
        </section>

    
        
</section>

    
    <div id="main">
        
        
            
        

        
            <article class="post">
    <header>
    <div class="title">
        
            <h2><a href="https://sankame.github.io/blog/2017-05-14-view_sqlite_on_android/">AndroidのSQLite DBを参照</a></h2>
        
        
            <p>Androidアプリ開発でデバッグを楽にするため、SQLiteのDBを参照する方法について調べました。</p>
        
    </div>
    <div class="meta">
        
            
        

        <time class="published"
            datetime='2017-05-14'>
            May 14, 2017</time>
        <span class="author"></span>
        
            <p>2 minute read</p>
        
        
    </div>
</header>

    

    <p>0.環境  PC側
[OS] Windows7 (32bit 版) [Android Studio] 1.5.1  スマホ側
[OS] Android 5.1.1 [SQLite] 3.8.6.1   1. 前提  まずSQLiteのデータをファイル形式で保存するよう設定します。
 例として、SQLiteを操作するライブラリにSQLiteOpenHelperを使用した場合について記載します。
 コンストラクタの第二引数でDBファイル名を指定します。
 (未指定の場合、データはメモリにのみ保持されます)
class DatabaseHelper extends SQLiteOpenHelper { public DatabaseHelper(Context context) { //DBファイル名を指定。 super(context, &quot;example.db&quot;, null, 1); }  PCからAndroid端末にあるSQLiteのDBファイルを見る方法を調べました。
 試行錯誤した内容を書いているため、結論だけ知りたい場合は、4まで読み飛ばして下さい。
  2. ADB(Androidデバッグ用インターフェース) 利用  ネットを検索して結構あったのが、ADBを使ってSQLiteのDBファイルをAndroid端末からPCへコピーし、その後DBビューワーで参照するというものです。
 PCでコマンドプロンプトから下記コマンドを実行すると、カレントディレクトリにtarget.db(任意)というファイルができます。
C:\Users\【ユーザー名】&gt;adb -d shell &quot;run-as 【アプリケーションID】 cat databases/【DBファイル名】&quot;&gt;target.db  【】内は読み替えて下さい。
 【アプリケーションID】: Android Studioの[File]-[Project Structure]-[Flavors]-[Application Id]</p>

    <footer>
        <ul class="actions">
            <li><a href="https://sankame.github.io/blog/2017-05-14-view_sqlite_on_android/" class="button big">Continue Reading</a></li>
        </ul>
        <ul class="stats">
    
        

        
        
            <li>
                
                
                    

                    

                    

                    
                        Categories
                    
                
            </li>
        
    

    
    
    </footer>
</article>

        
            <article class="post">
    <header>
    <div class="title">
        
            <h2><a href="https://sankame.github.io/blog/2017-04-16-speed_up_website_use_browser_cache/">Webサイト・スピードアップ - ブラウザキャッシュ利用</a></h2>
        
        
            <p>Webサイトの表示速度を改善。</p>
        
    </div>
    <div class="meta">
        
            
        

        <time class="published"
            datetime='2017-04-16'>
            April 16, 2017</time>
        <span class="author"></span>
        
            <p>1 minute read</p>
        
        
    </div>
</header>

    

    <p><ol>
<li>前提  環境などの前提条件は前回の1から3と同じです。
今回は教科書の[1. Reduce number of HTTP requests]-[Use Browser Cache]をやってみました。
修正が少ない静的ファイルはブラウザキャッシュの期間を延ばし、2回目以降のアクセスはキャッシュから読み込むことで速度向上につなげます。
作業は下記の2点です。
(1) キャッシュ期間延長
　Webサーバーの設定でjs、cssのブラウザ・キャッシュ期間を延ばします。
(2) ファイル名のユニーク化
　上記1によって修正がすぐに反映されないという状況を避けるため、ファイル名に修正ごとのハッシュ値を付けてキャッシュが効かないようにします。(gulpの機能を利用)

<ol>
<li>キャッシュ期間延長  nginxの設定ファイルにjs、cssの設定とキャッシュ期間を追記しました。
記述が冗長なのは追って別の書き方を調べたいと思います。
server { listen 443 ssl; server_name [ドメイン名]; ssl_certificate [ファイルパス]; ssl_certificate_key [ファイルパス]; location / { proxy_pass http://[ホスト名]:[ポート番号]; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_set_header X-Forwarded-Proto https; proxy_set_header X-Forwarded-Port 443; proxy_set_header Host $host; } # &mdash; css/jsの指定を追加。 &mdash; location ~* .(css|js)$ { proxy_pass http://[ホスト名]:[ポート番号]; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_set_header X-Forwarded-Proto https; proxy_set_header X-Forwarded-Port 443; proxy_set_header Host $host; # キャッシュ期間を設定。 expires 365d; } # &mdash; css/jsの指定を追加。 &mdash; }  ChromeのDeveloper Toolsで見て、Expiresヘッダーの追加とjs、cssがキャッシュから読み込まれていることを確認します。(下図オレンジの枠線)</li>
</ol></li>
</ol>
</p>

    <footer>
        <ul class="actions">
            <li><a href="https://sankame.github.io/blog/2017-04-16-speed_up_website_use_browser_cache/" class="button big">Continue Reading</a></li>
        </ul>
        <ul class="stats">
    
        

        
        
            <li>
                
                
                    

                    

                    

                    
                        Categories
                    
                
            </li>
        
    

    
    
    </footer>
</article>

        
            <article class="post">
    <header>
    <div class="title">
        
            <h2><a href="https://sankame.github.io/blog/2017-03-19-hugo_quickstart/">Hugoクイックスタート</a></h2>
        
        
            <p>Hugoクイックスタート</p>
        
    </div>
    <div class="meta">
        
            
        

        <time class="published"
            datetime='2017-03-19'>
            March 19, 2017</time>
        <span class="author"></span>
        
            <p>1 minute read</p>
        
        
    </div>
</header>

    

    <p><ol>
<li>環境 [Mac] 10.11.6 [Hugo] 0.19  1.インストール  ここ数年、ブログウェアはjekyllを使ってましたが、下記の点が不便だったので、評判の良いHugoを試してみました。まずはサンプルを動かすところまで。
初期構築やバージョンアップが大変だったので、他のPCに環境を作る気になれない。(今ならDockerという手もありますが…)
記事の生成に時間がかかるようになってきた。
記事の更新後、2～3回リロードしないとブラウザに反映されない。
インストール・マニュアルに従って進めました。
僕の場合、Homebrewは既に入っていたのでStep2からやりました。
$ brew update $ brew install hugo  「インストール後にバージョンを調べてね」と書いてあるので念のためチェックです。
$ ls -l $( which hugo ) lrwxr-xr-x 1 mx admin 28 3 19 03:08 /usr/local/bin/hugo -&gt; ../Cellar/hugo/0.19/bin/hugo $ hugo version Hugo Static Site Generator v0.19 darwin/amd64 BuildDate: 2017-02-27T19:21:29+09:00  2行とも0.19なので問題なさそうです。
2.サンプル作成  こちらのページに沿ってサンプルを作成しました。
適当なディレクトリで下記を実行します。(僕の場合 /app/hugo-test/ なので読み替えて下さい)</li>
</ol>
</p>

    <footer>
        <ul class="actions">
            <li><a href="https://sankame.github.io/blog/2017-03-19-hugo_quickstart/" class="button big">Continue Reading</a></li>
        </ul>
        <ul class="stats">
    
        

        
        
            <li>
                
                
                    

                    

                    

                    
                        Categories
                    
                
            </li>
        
    

    
    
    </footer>
</article>

        

        
<ul class="actions pagination">
    
        <li><a href="#" class="disabled button big previous">Previous Page</a></li>
    

    
        <li><a href="/tags/node.js/page/2/"
                class="button big next">Next Page</a></li>
    
</ul>

    </div>
    
<section id="sidebar">

    
        <section id="intro">
            
            
                
                    <a href="/" class="logo"><img src="/assets/avatar.jpg" alt="Sankame" /></a>
                
            
            
                <header>
                    <h2>プログラマー備忘録</h2>
                    <p></p>
                </header>
            
            <ul class="icons">
                
                    <li><a href="https://sankame.github.io/tags/node.js/index.xml" type="application/rss+xml"
                        target="_blank" title="RSS" class="fa fa-rss"></a></li>
                
                
                    
<li><a href="//github.com/Sankame" target="_blank" title="GitHub" class="fa fa-github"></a></li>















































<li><a href="//facebook.com/100014073908728" target="_blank" title="Facebook" class="fa fa-facebook"></a></li>



<li><a href="//twitter.com/handycola" target="_blank" title="Twitter" class="fa fa-twitter"></a></li>



<li><a href="mailto:m2ad0504@outlook.jp" title="Email" class="fa fa-envelope"></a></li>


                
            </ul>
        </section>

    
        <section id="recent-posts">
            <ul class="posts">
                <header>
                    <h3>Recent Posts</h3>
                </header>
                
                    
                

                
                    
                

                
                    <li>
                        <article>
                            <header>
                                <h3><a href="https://sankame.github.io/blog/2017-05-14-view_sqlite_on_android/">AndroidのSQLite DBを参照</a></h3>
                                
                                    
                                
                                <time class="published" datetime=
                                    '2017-05-14'>
                                    May 14, 2017</time>
                            </header>
                        </article>
                    </li>
                
                    <li>
                        <article>
                            <header>
                                <h3><a href="https://sankame.github.io/blog/2017-04-16-speed_up_website_use_browser_cache/">Webサイト・スピードアップ - ブラウザキャッシュ利用</a></h3>
                                
                                    
                                
                                <time class="published" datetime=
                                    '2017-04-16'>
                                    April 16, 2017</time>
                            </header>
                        </article>
                    </li>
                

                
                    <li>
                        <ul class="actions">
                            <li><a href=
                            
                                /blog/
                            
                            class="button">View more posts</a></li>
                        </ul>
                    </li>
                
            </ul>
        </section>

    
    
    
    
        <section id="categories">
            <ul class="posts">
                <header>
                    <h3><a href="/categories/">Categories</a></h3>
                </header>

                
                    
                

                
                    <li>
                        <article>
                            <header>
                                <a href="/categories/%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97/">セットアップ</a>
                                <span style="float:right;">34</span>
                            </header>
                        </article>
                    </li>
                
                    <li>
                        <article>
                            <header>
                                <a href="/categories/tips/">tips</a>
                                <span style="float:right;">15</span>
                            </header>
                        </article>
                    </li>
                
                    <li>
                        <article>
                            <header>
                                <a href="/categories/%E3%82%A8%E3%83%A9%E3%83%BC%E8%A7%A3%E6%B1%BA/">エラー解決</a>
                                <span style="float:right;">15</span>
                            </header>
                        </article>
                    </li>
                
                    <li>
                        <article>
                            <header>
                                <a href="/categories/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0/">プログラミング</a>
                                <span style="float:right;">6</span>
                            </header>
                        </article>
                    </li>
                
                    <li>
                        <article>
                            <header>
                                <a href="/categories/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0/">チューニング</a>
                                <span style="float:right;">2</span>
                            </header>
                        </article>
                    </li>
                
            </ul>
        </section>
    

    
        
        <section class="blurb">
            <h2>About</h2>
            <p>老舗インターネット・メディア企業で働くプログラマー</p>

            <ul class="actions">
                <li><a href="/about/" class="button">Learn More</a></li>
            </ul>
        </section>
        

	
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-7938855665302783"
     data-ad-slot="8711718758"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


    
        <section id="footer">
            <ul class="icons">
                
                    <li><a href="https://sankame.github.io/tags/node.js/index.xml" type="application/rss+xml"
                        target="_blank" title="RSS" class="fa fa-rss"></a></li>
                
                
                    
<li><a href="//github.com/Sankame" target="_blank" title="GitHub" class="fa fa-github"></a></li>















































<li><a href="//facebook.com/100014073908728" target="_blank" title="Facebook" class="fa fa-facebook"></a></li>



<li><a href="//twitter.com/handycola" target="_blank" title="Twitter" class="fa fa-twitter"></a></li>



<li><a href="mailto:m2ad0504@outlook.jp" title="Email" class="fa fa-envelope"></a></li>


                
            </ul>

            <p class="copyright">&copy; プログラマー備忘録. Design: <a href="http://html5up.net" target="_blank">HTML5 UP</a>. Ported by <a href="//github.com/jpescador" target="_blank">Julio Pescador</a>. Powered by <a href="//gohugo.io" target="_blank">Hugo</a></p>
        </section>

</section>

            </div>
        <a id="back-to-top" href="#" class="fa fa-arrow-up fa-border fa-2x"></a>
        

        
        
            
        

        
        
            <script src="/js/jquery.min.js"></script>
            <script src="/js/skel.min.js"></script>
            <script src="/js/util.js"></script>
            <script src="/js/main.js"></script>
            <script src="/js/backToTop.js"></script>
            <script src="/js/highlight.pack.js"></script>
        

        

            
            <script>hljs.initHighlightingOnLoad();</script>
            
        
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37675354-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

    </body>
</html>

