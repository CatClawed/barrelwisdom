---
title: "Barrel Wisdom 2.0 is here!"
pubDate: "2021-06-24"
updatedDate: "2024-11-13"
heroImage: "/media/blog/2021/06/barrel-2/old-barrel-wisdom.webp"
description: "Say goodbye to that old hodgepodge of Mediawiki and Wordpress."
author: "Chloe"
tags: [Site News]
---

I'm sure some of you were wondering what happened to Barrel Wisdom, why it hasn't received updates in a while, and so on. I can't say I was working on 2.0 the entire time, but it's not like I completely stopped what I was doing either. Now it's time to explain why I've transformed the site. A lot of this is a fairly technical account, so good luck to all you non-web folks out there.

## Mediawiki

Originally, my goal was just a help wiki as well as a place where I could post the odd ramblings about Gust games. I'm fairly experienced in guide writing, so I took my stuff from GameFAQs and converted it over to Mediawiki. I do have a coding background, so it wasn't as painful a process as you might expect (there are a lot of command line tools if you install it yourself on your own server). But setting up Mediawiki? An actual nightmare. So I'll explain why!

One of the things that was very important to me was having *entirely separate* wikis. The easy reason for this is because it doesn't clutter up the search bar this way. You search a game help wiki, you only get results for that one game. Thus, I had multiple installations of mediawiki going. One per game, and one extra (a hub) that held the account data.

Installing this was not a trivial task, and the help pages were confusingly written, at least at the time. I actually wrote instructions for myself so I could repeat the process easier. On top of that, wikis have a number of behind-the-scenes type editing to get to work as they do. That part's not so bad, but repeating it each time means it's pretty easy to forget steps. I wrote some scripts to get some of that to go smoother.

After I'd create a wiki, I'd create wikitext templates, put every page into a text file, and mass import to the wiki. That's how I got item pages and such going.

Finally, on wikis, I relied on two plugins in particular. One was an SEO plugin (this is basically for google, and some other functions that you wouldn't think much about if you aren't into web). I actually had to edit the plugin to handle ampersands better, as Escha & Logy has that character right in the title. I used to show up on Google as something like "Atelier Escha & amp; Logy Wiki" because that plugin double converted ampersands for some reason. I believe that plugin has someone new maintaining it now actually, but I haven't bothered updating it.

The second is something known as Semantic Mediawiki. It took away some of the pains of not having full database access. You'd just define types of relationships yourself (item "has ingredient", for instance), and you could display that in other parts of the site. It was a pretty cool tool, but you'd have to be pretty comfortable with wiki editing to use it. Of course, I was, as I was once upon a time a decent contributor to the Ar tonelico one, back when it was still called wikia.

### The Nail in the Coffin

But none of this really explains why I moved away, does it? There are a couple things.

1. Community building is really not my forte (whoops)
2. The spambots attacked

A wiki is only as good as the community that builds it, and I just did not build a community. In fact that's still something I need, but not a large community. I need a smaller one with people who really know what they're doing. More on that later, haha. It is, however, difficult to lead others when you're pretty scattered about completion and such yourself. Not an excuse for that particular failure though.

But what really made me quit was the spambot attack. I had open registration (something that 2.0 absolutely does not have), and one day I found one of my front pages transformed (forgot to protect the page -- whoops!). It was also very difficult to remove all the spam across multiple wikis with Mediawiki's tools; there was just so much of it. So, in the middle of doing Atelier Shallie, I basically closed registration and quit working on the site.

Without a community, there was no real reason to deal with the drawbacks of Mediawiki, however, so I decided to do it my own way. But first, I'll explain the other part of my site.

## Wordpress

The blog of the original site was powered by Wordpress. I was never all that happy working with it. As someone who really did not know enough about web, it was frustrating to get to look as I wanted, and you needed plugins and themes to get anywhere. Making simple tables was a complete nightmare. Now that I know more, could I work with it? Maybe. But fuck Wordpress.

It wasn't that difficult to work with in terms of post creation or technical details, but I did have to learn a handful of things to get it to work with Mediawiki without trying to 404 every page.

## The New Site

And so, with my frustrations with Mediawiki reaching their boiling point, I made the decision to make a version two of the website. Something entirely from scratch, so I'd have proper database access. At the time I knew literally nothing of web. Not where to start, not anything about CSS, bootstrap was a buzzword that I used for my Mediawiki stuff... I had baby knowledge about LAMP minus the PHP (which is all spaghetti to me) and that was about it.

But, I knew someone. That someone was my girlfriend actually. She basically said "use Angular and Django and I will get you started". And she did exactly that. I don't think I'd be anywhere without her setting up the database for me, initially. Once I understood what Django Rest Framework did for me though? The site flew together.

And by 'flew' I mean it took several months. It turns out getting stuff ready for a strict database format takes a long time. And I started with the hardest game: Ryza 2. My database code for that game is pretty hilarious as a result, but it works and I'm not changing it. In many respects, I'm glad I started there. I learned about performance issues I probably would not have noticed on smaller games. I also learned a miserable way to code serializers that I will never repeat. If you wanna see spaghetti it's a glorious mess.

I had a number of similar noob issues, really. Definitely still do. Maybe I'll fix 'em later, maybe I won't.

### What these tools do

I think, when a lot of people heard that I wanted to do a remake, they thought I'd want a static website, or something similar to that. For the unfamiliar, you can think of it as more like a wiki page (where every page is converted to HTML from wikitext), but it strictly means you make pages in plain HTML and you're done. But I dreamed of more. And I really couldn't think of many sites that also dreamed of more.

Let's suppose I went with a more static approach. I have my game data and now I want to convert to HTML. I can easily script that out, put it on a website, forget about it. Now I want to add more data. Now what? Gotta repeat the entire process to account for new info. With the tools I use now, it's not such a cumbersome process. I make a few changes in a template file and I'm good to go.

Outside of that practical issue, I can also easily filter and display data in multiple languages. Filtering is rather important, especially for items. A number of you have probably wanted to filter on ingredients taken by an item before, and now the site supports that, as well as a handful of other options depending on the game. As for multiple languages, anyone that has gotten deep into mechanics has wondered about translations. So, I grabbed that info. This site is still English first and thus does not translate UI, I don't speak Japanese, Chinese, Korean, and French so there's no way it's happening.

### Mobile

Even back in the day, with the original site, mobile was important to me. But there were some issues around because I didn't know how to fix them. Mobile is way too huge to ignore, so in many respects you have to design 'mobile first'. A little hard when you develop from a desktop, but I'd say it's mostly fine in the current implementation. Tables are the devil's work btw. I actually still have a couple that display weird when the screen size gets too small, but I gave up on them~

I've seen a number of other amateur websites not even try to get the mobile friendly part down. And by that I mean other hobbyist type sites and wikis. If you see a classic format wiki you can almost guarantee it isn't mobile friendly. And honestly? I don't understand. It's too much traffic to ignore. But at the same time I do understand; learning CSS is a bit of a pain. Hobby fun, web hard. (So, so hard. I can't believe I'm at launch.) The rewards are so, so worth it though.

### Making the site pretty

<div class="w-25 right"><img src="/media/main/punidead.svg"></div>

For the pretty part of the site, I started with a template (CoreUI). It made a number of decent decisions for me, but was rather plain, so I started learning how to pretty. I didn't have high expectations starting out, considering how utterly bland my previous project was. The first real thing I did was, oddly, the 404 page. But I gotta go back in time for that one: a while ago, I made an Atelier keyboard. The process was basically taking PNGs into Inkscape, converting them to SVGs, placing them over keycaps, and having that printed out. Converting PNG to SVG isn't hard, but it takes fiddling. But one of the things I converted? The Mysterious puni icon.

So many moons later, I had a ton of these icons lying around. I took the puni one, edited it to be dead, and used that as my 404 image. This sparked another idea: icon font. And it's honesty probably my best idea in terms of how the site looks, even being such a small detail. Around the web, all the common icons you see -- magnifying glasses, user symbols, and so on -- are actually fonts. I realized that I could just make my own. They scale a million times better than equivalent PNGs would and they're super tiny in size. I downloaded something called Nucleo  and got to work. Now there are a ton of category and element icons on the site displaying beautifully, and I really think it helps stuff pop.

In any case, from the original template I did my utmost to avoid CSS. My experiences with it on Reddit were not particularly fun, I just didn't understand it well at all. But I eventually hit my first issue and had to use it. Whew did that ever transform my idea of how to make websites. Rather wish I knew how to do it during the Mediawiki days, would have helped for the quirky pages that didn't convert to mobile size well. Back then I just relied on a bootstrap theme to do the work, and it did most of it but not all.

From there I learned a lot of stuff that makes a website look pro are actually really simple CSS tricks. And that's how this amateur got a decent looking site. A little border effect here, a rounded corner there, paper textures in the background... now I have a highly consistent website I couldn't have dreamed of before, because I just started in the wrong place with a different mentality. It's not like I couldn't have learned, but I wasn't forced to. A lot of the looks are handled for you by templates.

However, even knowing now how to do things across all websites, it would have been much more cumbersome to do it all in Mediawiki. I am quite happy with the 'final' look of this new Barrel Wisdom and I am excited to continue adding to it.

### It's here

Throwing this website together took a lot of time. A lot of tutorials. A lot of frustrations. A lot of worry over projects not being up to date. That one is still a worry, actually.  I've been salty over tiny, hard to trace errors too many times. Comments are still buggy, in fact.

But I'm finally here. The meme is dead. The remake is real.

In terms of stuff I've been asked:

* Do I intend on doing stuff like character profiles, game summaries, etc.?
  * Absolutely not. You don't fight that shitty wiki on its own turf and I'm not interested in trying.
* Do I intend on making a forum?
  * I don't want more junk to moderate, forums are dead as heck anyway. Join the /r/Atelier discord if you want a real community (non-disclaimer: am server owner there).

But I'll be real, I can't do it alone anymore. There are too many games and I am super busy just getting databases setup. If you happen to know a lot about basically any game and feel like you can contribute... contact me. Currently the only real means of doing so are through Twitter or Discord, you'll find both at the bottom of the page.