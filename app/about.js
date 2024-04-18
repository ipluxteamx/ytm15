function aboutYTm15() {
    const headerTitle = document.querySelector(".header-title");

    const headerBar = document.querySelector("ytm15-header-bar");

    const pageCont = document.querySelector('.page-container');
    pageCont.innerHTML = "";

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.removeAttribute("hidden");

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").setAttribute("hidden", "");
    document.querySelector(".tab-bar").setAttribute("isChannel", "false");
    headerBar.classList.remove('has-tab-bar');
    document.querySelector(".tab-bar").innerHTML = "";
    };

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");

    headerTitle.setAttribute("aria-label", "About 2015YouTube");
    headerTitle.textContent = "About 2015YouTube";

    const page = document.createElement("page");
    page.classList.add('aboutYTm15');

    const tabContainer = document.createElement("div");
    tabContainer.classList.add('tabs-content-container');

    const tabContent = document.createElement("div");
    tabContent.classList.add('tab-content');
    tabContent.setAttribute("tab-identifier", "");

    const aboutPage = document.createElement("ytm15-about-page");

    const section = document.createElement("div");
    section.classList.add('section-list');

    const sectLazyList = document.createElement("div");
    sectLazyList.classList.add('lazy-list');
    sectLazyList.innerHTML = `
    <div class="item-section">
    <div class="lazy-list no-animation">
    <div class="about-page-heading">
YouTube Mobile 2015/YTm15
    </div>
    <div class="about-page-subheading">
The 2015 YouTube experience, brought back to your smart device
    </div>
    </div>
    </div>

    <div class="ap-shelf">
    <div class="ap-shelf-header">
    <h3>
What is YTm15/YouTube Mobile 2015?
    </h3>
    </div>

    <div class="ap-shelf-content">
    <div class="ap-shelf-text">
YouTube Mobile 2015 (also known as YTm15) is a project of mine to rebuild the 2015 version of the interface of YouTube for mobile. The creator of YTm15 is Yacine Ghuloum.
<br>
<br>
This project has been ongoing since Feb 2024, in an effort to ensure that you can relive a nostalgic experience of what it was like to use the YouTube mobile app back in 2015.
<br>
<br>
YTm15 is based off of version 10 of the Android YT app
<br>
<br>
Please note that YTm15 as it is in its current state is unfinished, so a lot of things you'd expect to see in something like this (e.g. channel pages, search page, playlist page, and even watchpage) are not present/built/finished in this app yet
</div>
    </div>
    </div>

    <div class="ap-shelf">
    <div class="ap-shelf-header">
    <h3>
Stuff YTm15 makes use of
    </h3>
    </div>

    <div class="ap-shelf-content">
    <div class="ap-shelf-text">
APIs:
<br>
-Invidious API (<a href="https://docs.invidious.io/api/">https://docs.invidious.io/api/</a>)
<br>
<br>
-YouTube Operational API (<a href="https://yt.lemnoslife.com/">https://yt.lemnoslife.com/</a>)
<br>
<br>
Player:
<br>
-Invidious' embed player
<br>
<br>
Polyfills:
<br>
-Polyfill.io (<a href="https://polyfill.io/">https://polyfill.io/</a>)
</div>
    </div>
    </div>

    <div class="ap-shelf">
    <div class="ap-shelf-header">
    <h3>
Changelog
    </h3>
    </div>

    <div class="ap-shelf-content">
    <div class="ap-shelf-text">
22 Feb 2024:
<br>
-Initial development started
<br>
<br>
15 Mar 2024:
<br>
-Initial github release
<br>
<br>
16 Mar 2024:
<br>
-Added an about page for YTm15
<br>
-Added a menu icon button next to media items
<br>
-CSS updates
<br>
<br>
20 - 21 Mar 2024:
<br>
-Started working on menus
<br>
-Made the menu button on the header work
<br>
<br>
21 - 22 Mar 2024:
<br>
-The searchpage and searchbar now gets the "query" parameter from the hash in the page URL (This was done so that the web app doesn't reload when switching from one page to the searchpage)
<br>
<br>
22 Mar 2024:
<br>
-The searchpage and searchbar now uses the "decodeURIComponent()" and "encodeURIComponent()" functions instead of "replaceAll()";
<br>
-Modified inputs' cancel buttons
<br>
<br>
23 Mar 2024:
<br>
-Slight JS changes
<br>
-YTm15 now uses a polyfill for multiple js functions older browsers might not support
<br>
-The "APIs YTm15 makes use of" section has been updated to not only list APIs, but other stuff too
<br>
<br>
30 Mar 2024:
<br>
-YT shorts' time statuses now display the actual length instead of a text saying "YT Short"
<br>
-CSS and JS tweaks
<br>
-Started working on channel pages a bit
<br>
-Added a footer to the about page (Aka this page)
<br>
-The homepage no-longer uses async functions to get data from the API it uses (This change was made to support older browsers)
<br>
<br>
31 Mar - 01 Apr 2024:
<br>
-Implemented search suggestions
<br>
<br>
02 Apr 2024:
<br>
-Now when you switch from one page to a non-existent one, the page becomes blank
<br>
<br>
04 Apr 2024:
<br>
-Media items are now rendered via the "renderMediaItem()" and "renderCompactMediaItem()" functions
<br>
<br>
06 Apr 2024:
<br>
-Started working on the searchpage
<br>
-Compact media items now have the ability to display its data based on what type of media it is (For example, if it's a video, it'll display video data, if it's a channel, it'll be channel data, if it's a playlist, you guessed it, playlist data, etc.)
<br>
<br>
07 Apr 2024:
<br>
-API data is now fetched from the "inv.tux.pizza" instance of Invidious
<br>
-Bug fixes with compact media items
<br>
-Slightly modified the menu's position in the header
<br>
<br>
08 - 09 Apr 2024:
<br>
-Implemented continuations to the search page
<br>
-CSS and JS updates
<br>
-Tweaked the player a bit
<br>
-Started working on channel pages' headers on their home tabs
<br>
<br>
11 Apr 2024:
<br>
-Added 3 more shelves to the homepage
<br>
<br>
12 Apr 2024:
<br>
-YTm15 now uses the embed player from the "invidious.private.coffee" instance of Invidious instead of the "inv.tux.pizza" one
<br>
<br>
14 Apr 2024:
<br>
-API data now no-longer gets logged to the console
<br><br>
18 Apr 2024:
<br>
-Finally made a banner for this page
<br>
-The about page's footer is no-longer nested within a lazy list and an item section
    </div>
    </div>
    </div>
    <!-- <div class="item-section"> -->
    <!-- <div class="lazy-list no-animation"> -->
    <footer class="about-page-footer">
    <div class="ap-footer-content">
    <h3 class="ap-footer-text">Have any questions/issues/requests/bugs/feedback? <a href="https://github.com/ytm15/ytm15.github.io/issues">Visit our Github's issues page</a></h3>
    <h4 class="ap-footer-text small subhead" id="ap-footer-links">Links: <a href="https://ytm15.github.io/">Landing page</a> | <a href="https://github.com/ytm15/ytm15.github.io/">Github page</a></h4>
    <h4 class="ap-footer-text small subhead" id="ap-footer-copyright-and-copyleft-text">© 2015, YouTube and Google | (ↄ) 2024, Yacine's remakes</h4>
    <h4 class="ap-footer-text small subhead">Please note that YTm15 is not associated with, affiliated with, developed, approved, or endorsed by YouTube or Google!</h4>
    </div>
    </footer>
    <!-- </div> -->
    <!-- </div> -->
    `;
    section.appendChild(sectLazyList);

    const parent = document.querySelector(".page-container");
    parent.appendChild(page);
    page.appendChild(tabContainer);
    tabContainer.appendChild(tabContent);
    tabContent.appendChild(aboutPage);
    aboutPage.appendChild(section);

    var title = document.querySelector("title");
    title.textContent = 'About - 2015YouTube';
}