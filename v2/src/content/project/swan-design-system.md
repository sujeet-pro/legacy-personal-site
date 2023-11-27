---
title: Swan Design System
description: "Vistaprint's Design System implemented in React and is used across the company, its subsidiaries and sister companies"
company: vistaprint
tags:
  - React Library
  - Component Library
  - Design System
isDraft: false
startDate: 2020-08-31
topics:
  - web-development
  - accessibility
  - performance
---

## About the Project

SWAN enables digital product teams to design, prototype and accelerate building exceptional experiences for all Vista customers.

[Swan Documentation](https://vista.design/swan/)

### Our Design Principles

- Solve for customer outcomes
- Build trust and confidence through exceptional design
- Meet our customers where they are
- Guide users and design for continuity
- Make the journey fun
- Share what you've learned

### My Contribution

- Built a Design token engine: It can configure a token for different screen sizes, themes, and
  dark/light modes. In addition to self-configuring CSS variables, they generate SCSS variables,
  functions, and mixins to configure them programmatically.
- Components are implemented in React & Vanilla JS & CSS with accessibility, performance &
  extensibility at their core, following our “freedom within a framework” principle.
- Collaborate with 15+ teams, 10+ designers, PMs, and other sister companies for its adoption.

## FAQs

### Best thing during the project

- We plan and create road-map for our projects for years detailed things are planned for at least a quarter.
- We work with low level APIs to build a variety of use cases and is completely different from building pages because of the abstractions that are involved.

### Worst thing during the project

The company is highly distributed and hence are the teams and projects which also results in a lot of packages being created to allow developers to focus on their own domain. This creates a problem of waterfall effect for the dependency updates when something major has been released. So In a way, earlier in the monolith, it took time because it could break things, not its taking more time because of the dependency map of individual pages.

### Biggest Problem that you solved in the projects

Adoptions of such systems specially with major breaking changes are hard. Especially considering the dependency of one team on the other and other on someone else like a waterfall.

We did two things to solve the problem:

1. Who would you as a project owner know, what is the right time to start migrations?

- For this, we created a detailed hierarchy map of all the projects that dependents on each other and then the migrations was broken down into stages. Each project owner had an idea around at what stages they belong, and they can start when their dependency are done migrating.

2. How can the developers adopts the new system even when they are not front-end focused team.

First, we created a very detailed documentation site with details on all the components and several examples with live code changes and preview.

We also given options to dev to opt in one of the below based on the needs of the team:

- **Do it on your own.** (For teams which knows front-end)
- **Do it with help.**: For teams which needs a little help in order to adopt.
- **Do it for you.** For projects which are abandoned or there is no clear ownership of the project since it needed no or very rare updates. This is also for teams, which now don't have front-end developers or may be their teams size is not sufficient enough to pick the tasks based on the other priorities that they might have.

### What did you learnt new?

- Web Accessibility
- Building headless components and features.
- Meta programming
