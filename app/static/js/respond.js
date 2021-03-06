




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Respond/src/respond.js at master · scottjehl/Respond</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="scottjehl/Respond" name="twitter:title" /><meta content="Respond - A fast &amp;amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" name="twitter:description" /><meta content="https://0.gravatar.com/avatar/4137f7daffde77fce06a26a1ac92f9bf?d=https%3A%2F%2Fidenticons.github.com%2F382f151e5c5cfb8d5a821505862702fe.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://0.gravatar.com/avatar/4137f7daffde77fce06a26a1ac92f9bf?d=https%3A%2F%2Fidenticons.github.com%2F382f151e5c5cfb8d5a821505862702fe.png&amp;r=x&amp;s=400" property="og:image" /><meta content="scottjehl/Respond" property="og:title" /><meta content="https://github.com/scottjehl/Respond" property="og:url" /><meta content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" property="og:description" />

    <meta name="hostname" content="github-fe122-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4B2E42F2:7C0B:D7656:5306BEB1" name="octolytics-dimension-request_id" /><meta content="3915737" name="octolytics-actor-id" /><meta content="schoolie" name="octolytics-actor-login" /><meta content="54325e95ccf65822a8dc1caafaa505205dc6adac7863a72ca132301fc3a83b28" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="yWGIpy8TIgTgzA+skxxiyBVVfIJ/l6wdp5FHHb7kTIE=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-7cee76dba0e0294b03db8d8ab535931fac19e147.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-4b2e8fa3297db94ef5a814a104a24e7cc9ab4330.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-574a9489245858832a859b24d9512f49073e995a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-3291e4d067ef47234f9257df5665431981c88c30.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="77a077c519e592b8231c11c1456550cd">

        <link data-pjax-transient rel='permalink' href='/scottjehl/Respond/blob/3fde2627484f8cb38e2bd4dbf2374cf41184b0f4/src/respond.js'>

  <meta name="description" content="Respond - A fast &amp; lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)" />

  <meta content="214783" name="octolytics-dimension-user_id" /><meta content="scottjehl" name="octolytics-dimension-user_login" /><meta content="1337658" name="octolytics-dimension-repository_id" /><meta content="scottjehl/Respond" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1337658" name="octolytics-dimension-repository_network_root_id" /><meta content="scottjehl/Respond" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/scottjehl/Respond/commits/master.atom" rel="alternate" title="Recent Commits to Respond:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped downwards" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="schoolie"
      data-repo="scottjehl/Respond"
      data-branch="master"
      data-sha="71aaa37e98d50369f5dbc0ba5329e3b81662a6f4"
  >

    <input type="hidden" name="nwo" value="scottjehl/Respond" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/schoolie" class="name">
        <img alt="schoolie" class=" js-avatar" data-user="3915737" height="20" src="https://1.gravatar.com/avatar/3fd8663c6c895bb9cc5283570601dbde?d=https%3A%2F%2Fidenticons.github.com%2Ffbeb8e2e9fd1dbb588ca80f6409f4103.png&amp;r=x&amp;s=140" width="20" /> schoolie
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped downwards" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped downwards"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="scottjehl/Respond">This repository</span>
    </li>
      <li>
        <a href="/scottjehl/Respond/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="yWGIpy8TIgTgzA+skxxiyBVVfIJ/l6wdp5FHHb7kTIE=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1337658" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/scottjehl/Respond/watchers">
        403
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/scottjehl/Respond/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/scottjehl/Respond/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/scottjehl/Respond/stargazers">
        6,387
      </a>
  </div>

  </li>


        <li>
          <a href="/scottjehl/Respond/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/scottjehl/Respond/network" class="social-count">2,247</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/scottjehl" class="url fn" itemprop="url" rel="author"><span itemprop="title">scottjehl</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/scottjehl/Respond" class="js-current-repository js-repo-home-link">Respond</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" aria-label="Code">
        <a href="/scottjehl/Respond" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /scottjehl/Respond">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" aria-label="Issues">
          <a href="/scottjehl/Respond/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /scottjehl/Respond/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>31</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" aria-label="Pull Requests">
        <a href="/scottjehl/Respond/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /scottjehl/Respond/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>9</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" aria-label="Wiki">
          <a href="/scottjehl/Respond/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /scottjehl/Respond/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" aria-label="Pulse">
        <a href="/scottjehl/Respond/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /scottjehl/Respond/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" aria-label="Graphs">
        <a href="/scottjehl/Respond/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /scottjehl/Respond/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" aria-label="Network">
        <a href="/scottjehl/Respond/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /scottjehl/Respond/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/scottjehl/Respond.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/scottjehl/Respond.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:scottjehl/Respond.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:scottjehl/Respond.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/scottjehl/Respond" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/scottjehl/Respond" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/scottjehl/Respond" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/scottjehl/Respond/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:84ca68fa6f46f28c12782dce049672e2 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/scottjehl/Respond/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/cross-domain/src/respond.js"
                 data-name="cross-domain"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="cross-domain">cross-domain</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/em-experimental/src/respond.js"
                 data-name="em-experimental"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="em-experimental">em-experimental</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/em-support/src/respond.js"
                 data-name="em-support"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="em-support">em-support</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/gh-pages/src/respond.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/master/src/respond.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/shorthand-syntax/src/respond.js"
                 data-name="shorthand-syntax"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="shorthand-syntax">shorthand-syntax</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/blob/stevelove-logical-not/src/respond.js"
                 data-name="stevelove-logical-not"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="stevelove-logical-not">stevelove-logical-not</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.4.2/src/respond.js"
                 data-name="1.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.2">1.4.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.4.1/src/respond.js"
                 data-name="1.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.1">1.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.4.0/src/respond.js"
                 data-name="1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.0">1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.3.0/src/respond.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.2.0/src/respond.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.1.0/src/respond.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.0.1/src/respond.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/scottjehl/Respond/tree/1.0.0/src/respond.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/Respond" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Respond</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/scottjehl/Respond/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">respond.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/respond.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Zach Leatherman" class="main-avatar js-avatar" data-user="39355" height="24" src="https://0.gravatar.com/avatar/e1899004c71c7043343196103e210be3?d=https%3A%2F%2Fidenticons.github.com%2F67b46df8fd1c23206e0572850ac213b5.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/zachleat" rel="author">zachleat</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-12-31T14:59:35-08:00" title="2013-12-31 14:59:35">December 31, 2013</time>
    <div class="commit-title">
        <a href="/scottjehl/Respond/commit/e735025936a2c617eb7859bc3ccd4900ac03707f" class="message" data-pjax="true" title="Fixes #252. Happy New Year!">Fixes</a> <a href="https://github.com/scottjehl/Respond/issues/252" class="issue-link" title="Version in source file does not match actual package version">#252</a><a href="/scottjehl/Respond/commit/e735025936a2c617eb7859bc3ccd4900ac03707f" class="message" data-pjax="true" title="Fixes #252. Happy New Year!">. Happy New Year!</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" aria-label="zachleat" href="/scottjehl/Respond/commits/master/src/respond.js?author=zachleat"><img alt="Zach Leatherman" class=" js-avatar" data-user="39355" height="20" src="https://0.gravatar.com/avatar/e1899004c71c7043343196103e210be3?d=https%3A%2F%2Fidenticons.github.com%2F67b46df8fd1c23206e0572850ac213b5.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" aria-label="jlembeck" href="/scottjehl/Respond/commits/master/src/respond.js?author=jlembeck"><img alt="Jeff Lembeck" class=" js-avatar" data-user="109699" height="20" src="https://2.gravatar.com/avatar/68381e630f863e6b76ff075e09c5139f?d=https%3A%2F%2Fidenticons.github.com%2F0363d80bc12ebcadce8ed468571d27aa.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" aria-label="Coridyn" href="/scottjehl/Respond/commits/master/src/respond.js?author=Coridyn"><img alt="" class=" js-avatar" data-user="1791456" height="20" src="https://0.gravatar.com/avatar/c63345884194dfc962094baa2c9a7af1?d=https%3A%2F%2Fidenticons.github.com%2F8342eef3286f7cd88b20139217373135.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" aria-label="tomfuertes" href="/scottjehl/Respond/commits/master/src/respond.js?author=tomfuertes"><img alt="Tom Fuertes" class=" js-avatar" data-user="1503991" height="20" src="https://0.gravatar.com/avatar/ab723230839161b25b5f8488a9ebbbbd?d=https%3A%2F%2Fidenticons.github.com%2F903853c72abf06bb1f2868587553be32.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Zach Leatherman" class=" js-avatar" data-user="39355" height="24" src="https://0.gravatar.com/avatar/e1899004c71c7043343196103e210be3?d=https%3A%2F%2Fidenticons.github.com%2F67b46df8fd1c23206e0572850ac213b5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/zachleat">zachleat</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff Lembeck" class=" js-avatar" data-user="109699" height="24" src="https://2.gravatar.com/avatar/68381e630f863e6b76ff075e09c5139f?d=https%3A%2F%2Fidenticons.github.com%2F0363d80bc12ebcadce8ed468571d27aa.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jlembeck">jlembeck</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="" class=" js-avatar" data-user="1791456" height="24" src="https://0.gravatar.com/avatar/c63345884194dfc962094baa2c9a7af1?d=https%3A%2F%2Fidenticons.github.com%2F8342eef3286f7cd88b20139217373135.png&amp;r=x&amp;s=140" width="24" />
            <a href="/Coridyn">Coridyn</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tom Fuertes" class=" js-avatar" data-user="1503991" height="24" src="https://0.gravatar.com/avatar/ab723230839161b25b5f8488a9ebbbbd?d=https%3A%2F%2Fidenticons.github.com%2F903853c72abf06bb1f2868587553be32.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tomfuertes">tomfuertes</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>354 lines (297 sloc)</span>
          <span class="meta-divider"></span>
        <span>10.164 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="github-windows://openRepo/https://github.com/scottjehl/Respond?branch=master&amp;filepath=src%2Frespond.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/scottjehl/Respond/edit/master/src/respond.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/scottjehl/Respond/raw/master/src/respond.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/scottjehl/Respond/blame/master/src/respond.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/scottjehl/Respond/commits/master/src/respond.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/scottjehl/Respond/delete/master/src/respond.js"
             aria-label="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/* Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */</span></div><div class='line' id='LC2'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">w</span> <span class="p">){</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'>	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>	<span class="c1">//exposed namespace</span></div><div class='line' id='LC7'>	<span class="kd">var</span> <span class="nx">respond</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC8'>	<span class="nx">w</span><span class="p">.</span><span class="nx">respond</span> <span class="o">=</span> <span class="nx">respond</span><span class="p">;</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>	<span class="c1">//define update even in native-mq-supporting browsers, to avoid errors</span></div><div class='line' id='LC11'>	<span class="nx">respond</span><span class="p">.</span><span class="nx">update</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){};</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>	<span class="c1">//define ajax obj</span></div><div class='line' id='LC14'>	<span class="kd">var</span> <span class="nx">requestQueue</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC15'>		<span class="nx">xmlHttp</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC16'>			<span class="kd">var</span> <span class="nx">xmlhttpmethod</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC17'>			<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC18'>				<span class="nx">xmlhttpmethod</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">w</span><span class="p">.</span><span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC19'>			<span class="p">}</span></div><div class='line' id='LC20'>			<span class="k">catch</span><span class="p">(</span> <span class="nx">e</span> <span class="p">){</span></div><div class='line' id='LC21'>				<span class="nx">xmlhttpmethod</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">w</span><span class="p">.</span><span class="nx">ActiveXObject</span><span class="p">(</span> <span class="s2">&quot;Microsoft.XMLHTTP&quot;</span> <span class="p">);</span></div><div class='line' id='LC22'>			<span class="p">}</span></div><div class='line' id='LC23'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC24'>				<span class="k">return</span> <span class="nx">xmlhttpmethod</span><span class="p">;</span></div><div class='line' id='LC25'>			<span class="p">};</span></div><div class='line' id='LC26'>		<span class="p">})(),</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>		<span class="c1">//tweaked Ajax functions from Quirksmode</span></div><div class='line' id='LC29'>		<span class="nx">ajax</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>			<span class="kd">var</span> <span class="nx">req</span> <span class="o">=</span> <span class="nx">xmlHttp</span><span class="p">();</span></div><div class='line' id='LC31'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">req</span><span class="p">){</span></div><div class='line' id='LC32'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC33'>			<span class="p">}</span></div><div class='line' id='LC34'>			<span class="nx">req</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span> <span class="s2">&quot;GET&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC35'>			<span class="nx">req</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC36'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">req</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">!==</span> <span class="mi">4</span> <span class="o">||</span> <span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">!==</span> <span class="mi">200</span> <span class="o">&amp;&amp;</span> <span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">!==</span> <span class="mi">304</span> <span class="p">){</span></div><div class='line' id='LC37'>					<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC38'>				<span class="p">}</span></div><div class='line' id='LC39'>				<span class="nx">callback</span><span class="p">(</span> <span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span> <span class="p">);</span></div><div class='line' id='LC40'>			<span class="p">};</span></div><div class='line' id='LC41'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">req</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="mi">4</span> <span class="p">){</span></div><div class='line' id='LC42'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC43'>			<span class="p">}</span></div><div class='line' id='LC44'>			<span class="nx">req</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></div><div class='line' id='LC45'>		<span class="p">},</span></div><div class='line' id='LC46'>		<span class="nx">isUnsupportedMediaQuery</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">query</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>			<span class="k">return</span> <span class="nx">query</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">minmaxwh</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">).</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">other</span> <span class="p">);</span></div><div class='line' id='LC48'>		<span class="p">};</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>	<span class="c1">//expose for testing</span></div><div class='line' id='LC51'>	<span class="nx">respond</span><span class="p">.</span><span class="nx">ajax</span> <span class="o">=</span> <span class="nx">ajax</span><span class="p">;</span></div><div class='line' id='LC52'>	<span class="nx">respond</span><span class="p">.</span><span class="nx">queue</span> <span class="o">=</span> <span class="nx">requestQueue</span><span class="p">;</span></div><div class='line' id='LC53'>	<span class="nx">respond</span><span class="p">.</span><span class="nx">unsupportedmq</span> <span class="o">=</span> <span class="nx">isUnsupportedMediaQuery</span><span class="p">;</span></div><div class='line' id='LC54'>	<span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC55'>		<span class="nx">media</span><span class="o">:</span> <span class="sr">/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi</span><span class="p">,</span></div><div class='line' id='LC56'>		<span class="nx">keyframes</span><span class="o">:</span> <span class="sr">/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi</span><span class="p">,</span></div><div class='line' id='LC57'>		<span class="nx">comments</span><span class="o">:</span> <span class="sr">/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi</span><span class="p">,</span></div><div class='line' id='LC58'>		<span class="nx">urls</span><span class="o">:</span> <span class="sr">/(url\()[&#39;&quot;]?([^\/\)&#39;&quot;][^:\)&#39;&quot;]+)[&#39;&quot;]?(\))/g</span><span class="p">,</span></div><div class='line' id='LC59'>		<span class="nx">findStyles</span><span class="o">:</span> <span class="sr">/@media *([^\{]+)\{([\S\s]+?)$/</span><span class="p">,</span></div><div class='line' id='LC60'>		<span class="nx">only</span><span class="o">:</span> <span class="sr">/(only\s+)?([a-zA-Z]+)\s?/</span><span class="p">,</span></div><div class='line' id='LC61'>		<span class="nx">minw</span><span class="o">:</span> <span class="sr">/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/</span><span class="p">,</span></div><div class='line' id='LC62'>		<span class="nx">maxw</span><span class="o">:</span> <span class="sr">/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/</span><span class="p">,</span></div><div class='line' id='LC63'>		<span class="nx">minmaxwh</span><span class="o">:</span> <span class="sr">/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi</span><span class="p">,</span></div><div class='line' id='LC64'>		<span class="nx">other</span><span class="o">:</span> <span class="sr">/\([^\)]*\)/g</span></div><div class='line' id='LC65'>	<span class="p">};</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>	<span class="c1">//expose media query support flag for external use</span></div><div class='line' id='LC68'>	<span class="nx">respond</span><span class="p">.</span><span class="nx">mediaQueriesSupported</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nx">matchMedia</span> <span class="o">&amp;&amp;</span> <span class="nx">w</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span> <span class="s2">&quot;only all&quot;</span> <span class="p">)</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">w</span><span class="p">.</span><span class="nx">matchMedia</span><span class="p">(</span> <span class="s2">&quot;only all&quot;</span> <span class="p">).</span><span class="nx">matches</span><span class="p">;</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>	<span class="c1">//if media queries are supported, exit here</span></div><div class='line' id='LC71'>	<span class="k">if</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">mediaQueriesSupported</span> <span class="p">){</span></div><div class='line' id='LC72'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC73'>	<span class="p">}</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>	<span class="c1">//define vars</span></div><div class='line' id='LC76'>	<span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nb">document</span><span class="p">,</span></div><div class='line' id='LC77'>		<span class="nx">docElem</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span></div><div class='line' id='LC78'>		<span class="nx">mediastyles</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC79'>		<span class="nx">rules</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC80'>		<span class="nx">appendedEls</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC81'>		<span class="nx">parsedSheets</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC82'>		<span class="nx">resizeThrottle</span> <span class="o">=</span> <span class="mi">30</span><span class="p">,</span></div><div class='line' id='LC83'>		<span class="nx">head</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="s2">&quot;head&quot;</span> <span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">||</span> <span class="nx">docElem</span><span class="p">,</span></div><div class='line' id='LC84'>		<span class="nx">base</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="s2">&quot;base&quot;</span> <span class="p">)[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC85'>		<span class="nx">links</span> <span class="o">=</span> <span class="nx">head</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="s2">&quot;link&quot;</span> <span class="p">),</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>		<span class="nx">lastCall</span><span class="p">,</span></div><div class='line' id='LC88'>		<span class="nx">resizeDefer</span><span class="p">,</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>		<span class="c1">//cached container for 1em value, populated the first time it&#39;s needed</span></div><div class='line' id='LC91'>		<span class="nx">eminpx</span><span class="p">,</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>		<span class="c1">// returns the value of 1em in pixels</span></div><div class='line' id='LC94'>		<span class="nx">getEmValue</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC95'>			<span class="kd">var</span> <span class="nx">ret</span><span class="p">,</span></div><div class='line' id='LC96'>				<span class="nx">div</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">),</span></div><div class='line' id='LC97'>				<span class="nx">body</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span></div><div class='line' id='LC98'>				<span class="nx">originalHTMLFontSize</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="p">,</span></div><div class='line' id='LC99'>				<span class="nx">originalBodyFontSize</span> <span class="o">=</span> <span class="nx">body</span> <span class="o">&amp;&amp;</span> <span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="p">,</span></div><div class='line' id='LC100'>				<span class="nx">fakeUsed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>			<span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">=</span> <span class="s2">&quot;position:absolute;font-size:1em;width:1em&quot;</span><span class="p">;</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>			<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">body</span> <span class="p">){</span></div><div class='line' id='LC105'>				<span class="nx">body</span> <span class="o">=</span> <span class="nx">fakeUsed</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span> <span class="s2">&quot;body&quot;</span> <span class="p">);</span></div><div class='line' id='LC106'>				<span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">background</span> <span class="o">=</span> <span class="s2">&quot;none&quot;</span><span class="p">;</span></div><div class='line' id='LC107'>			<span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>			<span class="c1">// 1em in a media query is the value of the default font size of the browser</span></div><div class='line' id='LC110'>			<span class="c1">// reset docElem and body to ensure the correct value is returned</span></div><div class='line' id='LC111'>			<span class="nx">docElem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="s2">&quot;100%&quot;</span><span class="p">;</span></div><div class='line' id='LC112'>			<span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="s2">&quot;100%&quot;</span><span class="p">;</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>			<span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">div</span> <span class="p">);</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>			<span class="k">if</span><span class="p">(</span> <span class="nx">fakeUsed</span> <span class="p">){</span></div><div class='line' id='LC117'>				<span class="nx">docElem</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span> <span class="nx">body</span><span class="p">,</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">firstChild</span> <span class="p">);</span></div><div class='line' id='LC118'>			<span class="p">}</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>			<span class="nx">ret</span> <span class="o">=</span> <span class="nx">div</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">;</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>			<span class="k">if</span><span class="p">(</span> <span class="nx">fakeUsed</span> <span class="p">){</span></div><div class='line' id='LC123'>				<span class="nx">docElem</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">body</span> <span class="p">);</span></div><div class='line' id='LC124'>			<span class="p">}</span></div><div class='line' id='LC125'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC126'>				<span class="nx">body</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">div</span> <span class="p">);</span></div><div class='line' id='LC127'>			<span class="p">}</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>			<span class="c1">// restore the original values</span></div><div class='line' id='LC130'>			<span class="nx">docElem</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="nx">originalHTMLFontSize</span><span class="p">;</span></div><div class='line' id='LC131'>			<span class="k">if</span><span class="p">(</span> <span class="nx">originalBodyFontSize</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC132'>				<span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="nx">originalBodyFontSize</span><span class="p">;</span></div><div class='line' id='LC133'>			<span class="p">}</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>			<span class="c1">//also update eminpx before returning</span></div><div class='line' id='LC137'>			<span class="nx">ret</span> <span class="o">=</span> <span class="nx">eminpx</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">ret</span><span class="p">);</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC140'>		<span class="p">},</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>		<span class="c1">//enable/disable styles</span></div><div class='line' id='LC143'>		<span class="nx">applyMedia</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">fromResize</span> <span class="p">){</span></div><div class='line' id='LC144'>			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="s2">&quot;clientWidth&quot;</span><span class="p">,</span></div><div class='line' id='LC145'>				<span class="nx">docElemProp</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">[</span> <span class="nx">name</span> <span class="p">],</span></div><div class='line' id='LC146'>				<span class="nx">currWidth</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">compatMode</span> <span class="o">===</span> <span class="s2">&quot;CSS1Compat&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">docElemProp</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">[</span> <span class="nx">name</span> <span class="p">]</span> <span class="o">||</span> <span class="nx">docElemProp</span><span class="p">,</span></div><div class='line' id='LC147'>				<span class="nx">styleBlocks</span>	<span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC148'>				<span class="nx">lastLink</span> <span class="o">=</span> <span class="nx">links</span><span class="p">[</span> <span class="nx">links</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span> <span class="p">],</span></div><div class='line' id='LC149'>				<span class="nx">now</span> <span class="o">=</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>			<span class="c1">//throttle resize calls</span></div><div class='line' id='LC152'>			<span class="k">if</span><span class="p">(</span> <span class="nx">fromResize</span> <span class="o">&amp;&amp;</span> <span class="nx">lastCall</span> <span class="o">&amp;&amp;</span> <span class="nx">now</span> <span class="o">-</span> <span class="nx">lastCall</span> <span class="o">&lt;</span> <span class="nx">resizeThrottle</span> <span class="p">){</span></div><div class='line' id='LC153'>				<span class="nx">w</span><span class="p">.</span><span class="nx">clearTimeout</span><span class="p">(</span> <span class="nx">resizeDefer</span> <span class="p">);</span></div><div class='line' id='LC154'>				<span class="nx">resizeDefer</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span> <span class="nx">applyMedia</span><span class="p">,</span> <span class="nx">resizeThrottle</span> <span class="p">);</span></div><div class='line' id='LC155'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC156'>			<span class="p">}</span></div><div class='line' id='LC157'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC158'>				<span class="nx">lastCall</span> <span class="o">=</span> <span class="nx">now</span><span class="p">;</span></div><div class='line' id='LC159'>			<span class="p">}</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">mediastyles</span> <span class="p">){</span></div><div class='line' id='LC162'>				<span class="k">if</span><span class="p">(</span> <span class="nx">mediastyles</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">i</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC163'>					<span class="kd">var</span> <span class="nx">thisstyle</span> <span class="o">=</span> <span class="nx">mediastyles</span><span class="p">[</span> <span class="nx">i</span> <span class="p">],</span></div><div class='line' id='LC164'>						<span class="nx">min</span> <span class="o">=</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">minw</span><span class="p">,</span></div><div class='line' id='LC165'>						<span class="nx">max</span> <span class="o">=</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">maxw</span><span class="p">,</span></div><div class='line' id='LC166'>						<span class="nx">minnull</span> <span class="o">=</span> <span class="nx">min</span> <span class="o">===</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC167'>						<span class="nx">maxnull</span> <span class="o">=</span> <span class="nx">max</span> <span class="o">===</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC168'>						<span class="nx">em</span> <span class="o">=</span> <span class="s2">&quot;em&quot;</span><span class="p">;</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>					<span class="k">if</span><span class="p">(</span> <span class="o">!!</span><span class="nx">min</span> <span class="p">){</span></div><div class='line' id='LC171'>						<span class="nx">min</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">min</span> <span class="p">)</span> <span class="o">*</span> <span class="p">(</span> <span class="nx">min</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">em</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="p">(</span> <span class="nx">eminpx</span> <span class="o">||</span> <span class="nx">getEmValue</span><span class="p">()</span> <span class="p">)</span> <span class="o">:</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC172'>					<span class="p">}</span></div><div class='line' id='LC173'>					<span class="k">if</span><span class="p">(</span> <span class="o">!!</span><span class="nx">max</span> <span class="p">){</span></div><div class='line' id='LC174'>						<span class="nx">max</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">max</span> <span class="p">)</span> <span class="o">*</span> <span class="p">(</span> <span class="nx">max</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">em</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="p">(</span> <span class="nx">eminpx</span> <span class="o">||</span> <span class="nx">getEmValue</span><span class="p">()</span> <span class="p">)</span> <span class="o">:</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC175'>					<span class="p">}</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>					<span class="c1">// if there&#39;s no media query at all (the () part), or min or max is not null, and if either is present, they&#39;re true</span></div><div class='line' id='LC178'>					<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">thisstyle</span><span class="p">.</span><span class="nx">hasquery</span> <span class="o">||</span> <span class="p">(</span> <span class="o">!</span><span class="nx">minnull</span> <span class="o">||</span> <span class="o">!</span><span class="nx">maxnull</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">minnull</span> <span class="o">||</span> <span class="nx">currWidth</span> <span class="o">&gt;=</span> <span class="nx">min</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">maxnull</span> <span class="o">||</span> <span class="nx">currWidth</span> <span class="o">&lt;=</span> <span class="nx">max</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC179'>						<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">styleBlocks</span><span class="p">[</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">media</span> <span class="p">]</span> <span class="p">){</span></div><div class='line' id='LC180'>							<span class="nx">styleBlocks</span><span class="p">[</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">media</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC181'>						<span class="p">}</span></div><div class='line' id='LC182'>						<span class="nx">styleBlocks</span><span class="p">[</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">media</span> <span class="p">].</span><span class="nx">push</span><span class="p">(</span> <span class="nx">rules</span><span class="p">[</span> <span class="nx">thisstyle</span><span class="p">.</span><span class="nx">rules</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC183'>					<span class="p">}</span></div><div class='line' id='LC184'>				<span class="p">}</span></div><div class='line' id='LC185'>			<span class="p">}</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>			<span class="c1">//remove any existing respond style element(s)</span></div><div class='line' id='LC188'>			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">j</span> <span class="k">in</span> <span class="nx">appendedEls</span> <span class="p">){</span></div><div class='line' id='LC189'>				<span class="k">if</span><span class="p">(</span> <span class="nx">appendedEls</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">j</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC190'>					<span class="k">if</span><span class="p">(</span> <span class="nx">appendedEls</span><span class="p">[</span> <span class="nx">j</span> <span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">appendedEls</span><span class="p">[</span> <span class="nx">j</span> <span class="p">].</span><span class="nx">parentNode</span> <span class="o">===</span> <span class="nx">head</span> <span class="p">){</span></div><div class='line' id='LC191'>						<span class="nx">head</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">appendedEls</span><span class="p">[</span> <span class="nx">j</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC192'>					<span class="p">}</span></div><div class='line' id='LC193'>				<span class="p">}</span></div><div class='line' id='LC194'>			<span class="p">}</span></div><div class='line' id='LC195'>			<span class="nx">appendedEls</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>			<span class="c1">//inject active styles, grouped by media type</span></div><div class='line' id='LC198'>			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">k</span> <span class="k">in</span> <span class="nx">styleBlocks</span> <span class="p">){</span></div><div class='line' id='LC199'>				<span class="k">if</span><span class="p">(</span> <span class="nx">styleBlocks</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">k</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC200'>					<span class="kd">var</span> <span class="nx">ss</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span> <span class="s2">&quot;style&quot;</span> <span class="p">),</span></div><div class='line' id='LC201'>						<span class="nx">css</span> <span class="o">=</span> <span class="nx">styleBlocks</span><span class="p">[</span> <span class="nx">k</span> <span class="p">].</span><span class="nx">join</span><span class="p">(</span> <span class="s2">&quot;\n&quot;</span> <span class="p">);</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'>					<span class="nx">ss</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;text/css&quot;</span><span class="p">;</span></div><div class='line' id='LC204'>					<span class="nx">ss</span><span class="p">.</span><span class="nx">media</span> <span class="o">=</span> <span class="nx">k</span><span class="p">;</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>					<span class="c1">//originally, ss was appended to a documentFragment and sheets were appended in bulk.</span></div><div class='line' id='LC207'>					<span class="c1">//this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!</span></div><div class='line' id='LC208'>					<span class="nx">head</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span> <span class="nx">ss</span><span class="p">,</span> <span class="nx">lastLink</span><span class="p">.</span><span class="nx">nextSibling</span> <span class="p">);</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">ss</span><span class="p">.</span><span class="nx">styleSheet</span> <span class="p">){</span></div><div class='line' id='LC211'>						<span class="nx">ss</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">=</span> <span class="nx">css</span><span class="p">;</span></div><div class='line' id='LC212'>					<span class="p">}</span></div><div class='line' id='LC213'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC214'>						<span class="nx">ss</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span> <span class="nx">css</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC215'>					<span class="p">}</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>					<span class="c1">//push to appendedEls to track for later removal</span></div><div class='line' id='LC218'>					<span class="nx">appendedEls</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">ss</span> <span class="p">);</span></div><div class='line' id='LC219'>				<span class="p">}</span></div><div class='line' id='LC220'>			<span class="p">}</span></div><div class='line' id='LC221'>		<span class="p">},</span></div><div class='line' id='LC222'>		<span class="c1">//find media blocks in css text, convert to style blocks</span></div><div class='line' id='LC223'>		<span class="nx">translate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">styles</span><span class="p">,</span> <span class="nx">href</span><span class="p">,</span> <span class="nx">media</span> <span class="p">){</span></div><div class='line' id='LC224'>			<span class="kd">var</span> <span class="nx">qs</span> <span class="o">=</span> <span class="nx">styles</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">comments</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span></div><div class='line' id='LC225'>					<span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">keyframes</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span></div><div class='line' id='LC226'>					<span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">media</span> <span class="p">),</span></div><div class='line' id='LC227'>				<span class="nx">ql</span> <span class="o">=</span> <span class="nx">qs</span> <span class="o">&amp;&amp;</span> <span class="nx">qs</span><span class="p">.</span><span class="nx">length</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>			<span class="c1">//try to get CSS path</span></div><div class='line' id='LC230'>			<span class="nx">href</span> <span class="o">=</span> <span class="nx">href</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">href</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span> <span class="s2">&quot;/&quot;</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>			<span class="kd">var</span> <span class="nx">repUrls</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">css</span> <span class="p">){</span></div><div class='line' id='LC233'>					<span class="k">return</span> <span class="nx">css</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">urls</span><span class="p">,</span> <span class="s2">&quot;$1&quot;</span> <span class="o">+</span> <span class="nx">href</span> <span class="o">+</span> <span class="s2">&quot;$2$3&quot;</span> <span class="p">);</span></div><div class='line' id='LC234'>				<span class="p">},</span></div><div class='line' id='LC235'>				<span class="nx">useMedia</span> <span class="o">=</span> <span class="o">!</span><span class="nx">ql</span> <span class="o">&amp;&amp;</span> <span class="nx">media</span><span class="p">;</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>			<span class="c1">//if path exists, tack on trailing slash</span></div><div class='line' id='LC238'>			<span class="k">if</span><span class="p">(</span> <span class="nx">href</span><span class="p">.</span><span class="nx">length</span> <span class="p">){</span> <span class="nx">href</span> <span class="o">+=</span> <span class="s2">&quot;/&quot;</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>			<span class="c1">//if no internal queries exist, but media attr does, use that</span></div><div class='line' id='LC241'>			<span class="c1">//note: this currently lacks support for situations where a media attr is specified on a link AND</span></div><div class='line' id='LC242'>				<span class="c1">//its associated stylesheet has internal CSS media queries.</span></div><div class='line' id='LC243'>				<span class="c1">//In those cases, the media attribute will currently be ignored.</span></div><div class='line' id='LC244'>			<span class="k">if</span><span class="p">(</span> <span class="nx">useMedia</span> <span class="p">){</span></div><div class='line' id='LC245'>				<span class="nx">ql</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC246'>			<span class="p">}</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ql</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">){</span></div><div class='line' id='LC249'>				<span class="kd">var</span> <span class="nx">fullq</span><span class="p">,</span> <span class="nx">thisq</span><span class="p">,</span> <span class="nx">eachq</span><span class="p">,</span> <span class="nx">eql</span><span class="p">;</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>				<span class="c1">//media attr</span></div><div class='line' id='LC252'>				<span class="k">if</span><span class="p">(</span> <span class="nx">useMedia</span> <span class="p">){</span></div><div class='line' id='LC253'>					<span class="nx">fullq</span> <span class="o">=</span> <span class="nx">media</span><span class="p">;</span></div><div class='line' id='LC254'>					<span class="nx">rules</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">repUrls</span><span class="p">(</span> <span class="nx">styles</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC255'>				<span class="p">}</span></div><div class='line' id='LC256'>				<span class="c1">//parse for styles</span></div><div class='line' id='LC257'>				<span class="k">else</span><span class="p">{</span></div><div class='line' id='LC258'>					<span class="nx">fullq</span> <span class="o">=</span> <span class="nx">qs</span><span class="p">[</span> <span class="nx">i</span> <span class="p">].</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">findStyles</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">;</span></div><div class='line' id='LC259'>					<span class="nx">rules</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="o">&amp;&amp;</span> <span class="nx">repUrls</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC260'>				<span class="p">}</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'>				<span class="nx">eachq</span> <span class="o">=</span> <span class="nx">fullq</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="s2">&quot;,&quot;</span> <span class="p">);</span></div><div class='line' id='LC263'>				<span class="nx">eql</span> <span class="o">=</span> <span class="nx">eachq</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>				<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">eql</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span> <span class="p">){</span></div><div class='line' id='LC266'>					<span class="nx">thisq</span> <span class="o">=</span> <span class="nx">eachq</span><span class="p">[</span> <span class="nx">j</span> <span class="p">];</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>					<span class="k">if</span><span class="p">(</span> <span class="nx">isUnsupportedMediaQuery</span><span class="p">(</span> <span class="nx">thisq</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC269'>						<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC270'>					<span class="p">}</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>					<span class="nx">mediastyles</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC273'>						<span class="nx">media</span> <span class="o">:</span> <span class="nx">thisq</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="s2">&quot;(&quot;</span> <span class="p">)[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">only</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="o">||</span> <span class="s2">&quot;all&quot;</span><span class="p">,</span></div><div class='line' id='LC274'>						<span class="nx">rules</span> <span class="o">:</span> <span class="nx">rules</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC275'>						<span class="nx">hasquery</span> <span class="o">:</span> <span class="nx">thisq</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;(&quot;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC276'>						<span class="nx">minw</span> <span class="o">:</span> <span class="nx">thisq</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">minw</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="p">)</span> <span class="o">+</span> <span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span> <span class="p">),</span></div><div class='line' id='LC277'>						<span class="nx">maxw</span> <span class="o">:</span> <span class="nx">thisq</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="nx">respond</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">maxw</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="p">)</span> <span class="o">+</span> <span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$2</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span> <span class="p">)</span></div><div class='line' id='LC278'>					<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC279'>				<span class="p">}</span></div><div class='line' id='LC280'>			<span class="p">}</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>			<span class="nx">applyMedia</span><span class="p">();</span></div><div class='line' id='LC283'>		<span class="p">},</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>		<span class="c1">//recurse through request queue, get css text</span></div><div class='line' id='LC286'>		<span class="nx">makeRequests</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC287'>			<span class="k">if</span><span class="p">(</span> <span class="nx">requestQueue</span><span class="p">.</span><span class="nx">length</span> <span class="p">){</span></div><div class='line' id='LC288'>				<span class="kd">var</span> <span class="nx">thisRequest</span> <span class="o">=</span> <span class="nx">requestQueue</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>				<span class="nx">ajax</span><span class="p">(</span> <span class="nx">thisRequest</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">styles</span> <span class="p">){</span></div><div class='line' id='LC291'>					<span class="nx">translate</span><span class="p">(</span> <span class="nx">styles</span><span class="p">,</span> <span class="nx">thisRequest</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span> <span class="nx">thisRequest</span><span class="p">.</span><span class="nx">media</span> <span class="p">);</span></div><div class='line' id='LC292'>					<span class="nx">parsedSheets</span><span class="p">[</span> <span class="nx">thisRequest</span><span class="p">.</span><span class="nx">href</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'>					<span class="c1">// by wrapping recursive function call in setTimeout</span></div><div class='line' id='LC295'>					<span class="c1">// we prevent &quot;Stack overflow&quot; error in IE7</span></div><div class='line' id='LC296'>					<span class="nx">w</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">makeRequests</span><span class="p">();</span> <span class="p">},</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC297'>				<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC298'>			<span class="p">}</span></div><div class='line' id='LC299'>		<span class="p">},</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>		<span class="c1">//loop stylesheets, send text content to translate</span></div><div class='line' id='LC302'>		<span class="nx">ripCSS</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>			<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">links</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">){</span></div><div class='line' id='LC305'>				<span class="kd">var</span> <span class="nx">sheet</span> <span class="o">=</span> <span class="nx">links</span><span class="p">[</span> <span class="nx">i</span> <span class="p">],</span></div><div class='line' id='LC306'>				<span class="nx">href</span> <span class="o">=</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">href</span><span class="p">,</span></div><div class='line' id='LC307'>				<span class="nx">media</span> <span class="o">=</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">media</span><span class="p">,</span></div><div class='line' id='LC308'>				<span class="nx">isCSS</span> <span class="o">=</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">rel</span> <span class="o">&amp;&amp;</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">rel</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s2">&quot;stylesheet&quot;</span><span class="p">;</span></div><div class='line' id='LC309'><br/></div><div class='line' id='LC310'>				<span class="c1">//only links plz and prevent re-parsing</span></div><div class='line' id='LC311'>				<span class="k">if</span><span class="p">(</span> <span class="o">!!</span><span class="nx">href</span> <span class="o">&amp;&amp;</span> <span class="nx">isCSS</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">parsedSheets</span><span class="p">[</span> <span class="nx">href</span> <span class="p">]</span> <span class="p">){</span></div><div class='line' id='LC312'>					<span class="c1">// selectivizr exposes css through the rawCssText expando</span></div><div class='line' id='LC313'>					<span class="k">if</span> <span class="p">(</span><span class="nx">sheet</span><span class="p">.</span><span class="nx">styleSheet</span> <span class="o">&amp;&amp;</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">rawCssText</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>						<span class="nx">translate</span><span class="p">(</span> <span class="nx">sheet</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">rawCssText</span><span class="p">,</span> <span class="nx">href</span><span class="p">,</span> <span class="nx">media</span> <span class="p">);</span></div><div class='line' id='LC315'>						<span class="nx">parsedSheets</span><span class="p">[</span> <span class="nx">href</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC316'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC317'>						<span class="k">if</span><span class="p">(</span> <span class="p">(</span><span class="o">!</span><span class="sr">/^([a-zA-Z:]*\/\/)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">href</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">base</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC318'>							<span class="nx">href</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">,</span> <span class="s2">&quot;&quot;</span> <span class="p">).</span><span class="nx">split</span><span class="p">(</span> <span class="s2">&quot;/&quot;</span> <span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="nx">w</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">host</span> <span class="p">){</span></div><div class='line' id='LC319'>							<span class="c1">// IE7 doesn&#39;t handle urls that start with &#39;//&#39; for ajax request</span></div><div class='line' id='LC320'>							<span class="c1">// manually add in the protocol</span></div><div class='line' id='LC321'>							<span class="k">if</span> <span class="p">(</span> <span class="nx">href</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">2</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;//&quot;</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">href</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">+</span> <span class="nx">href</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC322'>							<span class="nx">requestQueue</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC323'>								<span class="nx">href</span><span class="o">:</span> <span class="nx">href</span><span class="p">,</span></div><div class='line' id='LC324'>								<span class="nx">media</span><span class="o">:</span> <span class="nx">media</span></div><div class='line' id='LC325'>							<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC326'>						<span class="p">}</span></div><div class='line' id='LC327'>					<span class="p">}</span></div><div class='line' id='LC328'>				<span class="p">}</span></div><div class='line' id='LC329'>			<span class="p">}</span></div><div class='line' id='LC330'>			<span class="nx">makeRequests</span><span class="p">();</span></div><div class='line' id='LC331'>		<span class="p">};</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>	<span class="c1">//translate CSS</span></div><div class='line' id='LC334'>	<span class="nx">ripCSS</span><span class="p">();</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>	<span class="c1">//expose update for re-running respond later on</span></div><div class='line' id='LC337'>	<span class="nx">respond</span><span class="p">.</span><span class="nx">update</span> <span class="o">=</span> <span class="nx">ripCSS</span><span class="p">;</span></div><div class='line' id='LC338'><br/></div><div class='line' id='LC339'>	<span class="c1">//expose getEmValue</span></div><div class='line' id='LC340'>	<span class="nx">respond</span><span class="p">.</span><span class="nx">getEmValue</span> <span class="o">=</span> <span class="nx">getEmValue</span><span class="p">;</span></div><div class='line' id='LC341'><br/></div><div class='line' id='LC342'>	<span class="c1">//adjust on resize</span></div><div class='line' id='LC343'>	<span class="kd">function</span> <span class="nx">callMedia</span><span class="p">(){</span></div><div class='line' id='LC344'>		<span class="nx">applyMedia</span><span class="p">(</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC345'>	<span class="p">}</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>	<span class="k">if</span><span class="p">(</span> <span class="nx">w</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="p">){</span></div><div class='line' id='LC348'>		<span class="nx">w</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s2">&quot;resize&quot;</span><span class="p">,</span> <span class="nx">callMedia</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC349'>	<span class="p">}</span></div><div class='line' id='LC350'>	<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">w</span><span class="p">.</span><span class="nx">attachEvent</span> <span class="p">){</span></div><div class='line' id='LC351'>		<span class="nx">w</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span> <span class="s2">&quot;onresize&quot;</span><span class="p">,</span> <span class="nx">callMedia</span> <span class="p">);</span></div><div class='line' id='LC352'>	<span class="p">}</span></div><div class='line' id='LC353'><span class="p">})(</span><span class="k">this</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04673s from github-fe122-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

      <div class="hidden" id="js-avatars" data-url="https://avatars.github.com"></div>
  </body>
</html>

