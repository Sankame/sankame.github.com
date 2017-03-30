


    




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
<meta property="og:url" content="/tags/node/index.js/" />



<meta property="og:updated_time" content="2015-06-23T00:00:00&#43;00:00"/>










        
<meta itemprop="name" content="Node.js">
<meta itemprop="description" content="HTML5 UP theme, Future Imperfect with some extra goodies, ported by Julio Pescador. Powered by Hugo">


        

        

        
        
            
        

        
        
            <link rel="stylesheet" href="/css/google-font.css" />
            <link rel="stylesheet" href="/css/font-awesome.min.css" />
            <link rel="stylesheet" href="/css/main.css" />
            <link rel="stylesheet" href="/css/add-on.css" />
            <link rel="stylesheet" href="/css/monokai-sublime.css">
        

        

        
        
        
            
        
    </head>
    <body>

        
        <div id="wrapper">

    
<header id="header">
    
        <h2><a href="/">プログラマー備忘録</i></a></h2>
    

    <nav class="links">
        <ul>
            
                <li>
                    <a href="/blog">
                        
                            <i class="fa fa-newspaper-o">&nbsp;</i>Blog
                    </a>
                </li>
            
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
                    <input type="hidden" name="q" value="site:/">
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
                <input type="hidden" name="q" value="site:/">
            </form>
        </section>

    
        <section>
            <ul class="links">
                
                    <li>
                        <a href="/blog">
                            <h3>
                                
                                    <i class="fa fa-newspaper-o">&nbsp;</i>
                                
                                Blog
                            </h3>
                        </a>
                    </li>
                
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
                        <a href="/blog/2017-03-19-hugo_quickstart/"><p>Hugoクイックスタート</p></a>
                    </li>
                
                    <li>
                        <a href="/blog/2017-02-26-speed_up_website_gulp/"><p>Webサイト・スピードアップ - gulp</p></a>
                    </li>
                
            </ul>
        </section>

    
        
</section>

    
    <div id="main">
        
        
            
        

        
            <article class="post">
    <header>
    <div class="title">
        
            <h2><a href="/blog/2017-03-19-hugo_quickstart/">Hugoクイックスタート</a></h2>
        
        
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
            <li><a href="/blog/2017-03-19-hugo_quickstart/" class="button big">Continue Reading</a></li>
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
        
            <h2><a href="/blog/2017-02-26-speed_up_website_gulp/">Webサイト・スピードアップ - gulp</a></h2>
        
        
            <p>Webサイトの表示速度を改善。</p>
        
    </div>
    <div class="meta">
        
            
        

        <time class="published"
            datetime='2017-02-26'>
            February 26, 2017</time>
        <span class="author"></span>
        
            <p>1 minute read</p>
        
        
    </div>
</header>

    

    <p>&nbsp;更新日：2017年03月07日
0. 環境  フロントエンドの話なのでサーバー環境はあまり関係ないのですが、参考まで。
 サーバー
[Nginx] 1.10.2 [Kitura] 1.1.2 [Swift] 3.0.1  ローカル
[Mac] 10.11.6 [Node.js] 7.6.0 [gulp] 3.9.1    1.準備  仕事でやっているWebサイトのスピードアップを個人でもやってみたくて、適当なページを1つ作ってみました。
シンプルカレンダー
そしてパフォーマンス改善の教科書に選んだのはこちらです。
Speed Up Your Website
  2.現状  Apacheで運用しているWebアプリが他にあるため、下記のようなちょっと珍しい構成になっています。
Nginx(リバースプロキシとして使用) + ServerSide-Swift(Kitura)  僕のネット環境(下り57Mbps/上り18Mbps)(※1)だとシンプルカレンダーのロードタイムが約2.5秒(※2)でそこまでストレスは感じませんが、DBを使ってないわりにこの数字なので改善の余地ありです。
(※1) 回線速度はSPEEDTESTで計測。
(※2) Chrome Developer Tools で計測。
  3.ブラウザからのリクエスト削減  Chrome Developer ToolsのNetworkタブで見るとCSS、JavaScript(以下JS)のダウンロードに時間がかかっているので、教科書の[1. Reduce number of HTTP requests]-[Combine files]から取り掛かってみました。
HTMLから静的ファイル(CSS、JSなど)を複数ダウンロードする際、ブラウザが並列でリクエストできる数が決まっているため、なるべくそれを減らしましょうという内容です。
複数の静的ファイルをまとめるためのツール(※3)を検討しましたが、一番簡単に実現できそうだったgulpを使いました。
(※3) webpack、gulp、Grunt
  4.</p>

    <footer>
        <ul class="actions">
            <li><a href="/blog/2017-02-26-speed_up_website_gulp/" class="button big">Continue Reading</a></li>
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
        
            <h2><a href="/blog/2017-01-03-swift3_uppercase_lowercase/">Swift3の大文字・小文字処理</a></h2>
        
        
            <p>Swift3の大文字・小文字処理</p>
        
    </div>
    <div class="meta">
        
            
        

        <time class="published"
            datetime='2017-01-03'>
            January 3, 2017</time>
        <span class="author"></span>
        
            <p>1 minute read</p>
        
        
    </div>
</header>

    

    <p>&nbsp;更新日：2017年01月27日
0. 環境 [Swift] 3.0.2  1. 大文字・小文字処理  Swift3から大文字・小文字の処理は下記のようになります。
(明示的にするため入れていますが型宣言は省略可)
    上記コードはIBM Swift Sandboxで動かせます。
下記リンク先の真ん中にある三角ボタンをクリックして下さい。
Swift3で大文字・小文字処理
(ChromeまたはFirefox推奨)
  2. 参考ページ  caseInsensitiveCompare
 localizedCaseInsensitiveCompare</p>

    <footer>
        <ul class="actions">
            <li><a href="/blog/2017-01-03-swift3_uppercase_lowercase/" class="button big">Continue Reading</a></li>
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
                
                    <li><a href="/tags/node.js/index.xml" type="application/rss+xml"
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
                                <h3><a href="/blog/2017-03-19-hugo_quickstart/">Hugoクイックスタート</a></h3>
                                
                                    
                                
                                <time class="published" datetime=
                                    '2017-03-19'>
                                    March 19, 2017</time>
                            </header>
                        </article>
                    </li>
                
                    <li>
                        <article>
                            <header>
                                <h3><a href="/blog/2017-02-26-speed_up_website_gulp/">Webサイト・スピードアップ - gulp</a></h3>
                                
                                    
                                
                                <time class="published" datetime=
                                    '2017-02-26'>
                                    February 26, 2017</time>
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
                                <span style="float:right;">33</span>
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
                                <a href="/categories/tips/">Tips</a>
                                <span style="float:right;">14</span>
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
                                <span style="float:right;">1</span>
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
     style="display:block"
     data-ad-client="ca-pub-7938855665302783"
     data-ad-slot="7089480753"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

    
        <section id="footer">
            <ul class="icons">
                
                    <li><a href="/tags/node.js/index.xml" type="application/rss+xml"
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

