---
title: Vista's E-Commerce Platform
description: "Vistaprint's E-Commerce Platform serving over 16M customers across 20 country and 25+ locales, built using micro-services, micro-front-ends and micro-sites architecture."
isDraft: false
initialTocClose: false
startDate: 2020-09-15
endDate: 2023-08-15
company: vistaprint
topics:
  - web-development
  - accessibility
  - performance
---

## Drive Change

**We're on a mission to make great design and marketing accessible to every small business.**

The goal is to be the expert design and marketing partner for small businesses. And that means serious change.

The UX + Design team is a major player in this transformation. We're defining how our customers express their ideas.

[Vistaprint en-US](https://www.vistaprint.com/)

## The architecture

All the front-end applications are developed as a micro-site or micro-frontend and independently build as SSG (Gatsby or CRA) and deployed to S3 and backed by the cloudflare CDN. For SSR Pages, we run them within containers. SSG pages are scheduled to run every 3 hours to publish any new content made live on our [Contentful](https://www.contentful.com/) CMS.

The site basically uses proxy to route user-facing localized urls to the appropriate pages using the page availability services which is an in-house tool that acts like a service discovery but for the pages. CDN proxy at the edge is used for different micro-sites and we use skipper to handle proxy to urls for within the same micro-site. These proxy also serve different pages based on the ongoing a/b testing that the user is part of. Eg. Business Product pages are internally built for all the locales at different urls using a combination of locale and product Id, but different sites have their own localized urls for business card.

Backend-for-Front-ends (BFFs) are generally built using node.js and deployed to AWS lambda function behind an API gateways which is also integrated with a lambda authorizer function for protected endpoints. For computed caching, these lambda functions uses DynamoDB.

All the common functionality is written and npm packages deployed to a private registry and is used by the pages with the exception of header and footers which are included via the Edge Side Include (ESI) on cloudflare.

### My Contribution

- Built & Develop discovery and other upper-funnel pages, Cross Sell and Upsell Pages for the
  eCommerce Platform (e.g., Home Page, Product Pages, Landing Pages, Offers Pages, Mailing
  Services, Logo-maker).
- Managing Account Experience, Marketing Landing Pages, and Blogs (Ideas & Advice).

## FAQs

### Why do we have many architectural styles for front-end like SSG/SSR/CRA?

We do not force fit, existing solution for all the use case, instead we aim on finding on what works best for the problem in hand which delivers highest value to our users and the developers.

### Best thing during the project

- Focus on providing the best user experience to all the users.

### Worst thing during the project

Time to deploy new features sometimes takes a lot of time because of the several A/B testing we do, which adds tech-debt to our codebase.

### Biggest Problem that you solved in the projects

- Performance Improvements of the pages
- Accessibility improvements across the sites.

### What did you learnt new?

- Web Accessibility
- Leadership skills
- Building new teams from scratch

### What is the process of implementing a new feature/enhancement?

- Identify the problem that our users' are facing
- For the given problem, identify what are the solutions that could work.
- Identify the parameters which could help us measure how well the solution worked.
- Develop designs demos and get feedback via user testing on the proposed design.
- Implement it and run A/B testing.
- Repeat this till we get an acceptable solution.
- Deploy for every user across all the locales.
