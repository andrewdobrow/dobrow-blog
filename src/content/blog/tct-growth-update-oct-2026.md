---
title: "Four Months Later: Treasure Coast Today Growth Update"
description: "A lot has been going on with TCT."
pubDate: 2026-10-16
tags: ['TCT']
---

A lot has happened on the [Treasure Coast Today](tab:https://treasurecoast.today) front, and I'm happy to report it's universally positive. I got a kick out of reading the last few blog posts, especially [On Giving Up](tab:https://dobrow.blog/blog/on-giving-up/). My apparent pessimism seems charming in retrospect, knowing how motivated I am and how focused I've been on making this project a success.

I haven't done a great job of documenting the changes to TCT over the last few months, so I don't even remember where it stood the last time I posted. All I know is that it's a completely different beast, especially on the backend.

In my last post, [I committed to doubling down](tab:https://dobrow.blog/blog/making-news/) on TCT, and I truly did. The focus has paid off. Here are some of the developments since June:

## From Aggregation to Editorial Engine

TCT has evolved into a much more complex project than I ever could have imagined. What began as a relatively simple, AI-assisted news aggregator has transformed into a full-fledged automated newsroom. Here are some of the major milestones since June:

- **Improved article generation**: I have fine-tuned the prompts behind the actual content creation. Before the improvements, the articles would often begin without a proper lede, constantly include unnecessary mentions of non-existent information (such as "there are no further details revealed"), and offer thin information with very little context.

- **Geographic intelligence**: The TCT engine is now much better at distinguishing between locations and properly classifying them.

-**Newsworthiness and prioritization**: Articles are ranked by relevance, importance, urgency, and reader interest, and are properly displayed based on that ranking.

-**Duplicate detection**: This was one of the biggest issues I faced early on. Relying solely on AI resulted in duplicate articles appearing constantly. Basic fuzzy keyword matching was not enough. Now, duplicates are avoided deterministically using ongoing identity markers.

- **Developing stories**: Labeling each article with identity markers allows the engine to update developing stories, instead of generating new articles for every update.

- **Original reporting**: I've developed connections with the community, local governments and agencies, so TCT also produces custom content based on tips and press releases.

## Design and UX Changes

The site has been visually overhauled. TCT now has a consistent identity, with a consistent color scheme, logo, and wordmark. Articles no longer rely mostly on placeholder photos, but actively pull in images with proper attribution. TCT now has only three main categories, divided by county, though there are also individual pages for each of the major cities and towns in each county for SEO, as well as topic pages. I overhauled and simplified the mobile site’s design.

## The Morning Brief

On August 1, I launched our newsletter, the TCT Morning Brief, a daily morning email with the most important articles of the previous day. It has gained nearly 600 subscribers as of mid-October. It serves as a funnel builder, encouraging repeat readership and also a spot for sponsors to advertise.

## Beyond "Just the News"

- **Local Events page**: TCT now includes a local events calendar page. The page is refreshed every day automatically, pulling from an aggregation of public event calendars. Event holders can also pay to have their events featured. I also publish weekly "top 5 best weekend event" articles.

- **Missing Persons page**: Updated twice daily based on a list maintained by the Florida Department of Law Enforcement. A list of all of the open missing person cases.

## Monetization

-**Subscriptions**: Users now get one free article per month. After their free article, they are paywalled. Subscriptions are currently $4.99 per month or $49 per year, $1 for the first month.

-**Advertising**: We now display ads via Mediavine. I try to keep it reasonable. I despise ads that severely interfere with the reading experience.

-**Sponsored post and event spots**: When event hosts and company owners reach out to us (which they have started to do the last couple of weeks), we now have a price menu for sponsored offerings.

## There's an App for That

The TCT iOS app is currently in the approval process with Apple. I hope this will be a boost to engagement, and it also allows me to send push notifications directly to readers. Thoroughly QA'd by myself via an ad hoc method, since TestFlight has been inconsistent and junky. Subscriptions are shared across all devices. We will also serve minimal ads on the app vis AdMob.

## Looking Ahead

Four months of development have led to a real foundation for a potentially highly profitable business, though I don’t consider this a finished product. I continue to refine the underlying skeleton, keeping it all moving. I also expect more original reporting opportunities.

For the first time in my life, I have built something I'm truly proud of. This is the first product I've made that has actually made a profit, and it feels good. It's a testament to all of the blood, sweat, and tears that went into it. 

This process has drastically improved my experience with software engineering, product management, editorial operations, user-experience design, digital marketing, advertising sales, and business management. And all on an obnoxiously lean budget.

There's still much to do, but I get a thrill every single day watching my baby grow.
