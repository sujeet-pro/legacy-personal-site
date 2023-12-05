---
title: Audit System
description: "A suit of applications with a web app, react-native based mobile app to keep the quality control of all the centers in check."
isDraft: false
initialTocClose: false
startDate: 2020-02-01
endDate: 2020-08-31
company: cure-fit
topics:
  - web-development
  - accessibility
  - performance
---

## What is a Audit System?

Audit System was a platform to make sure all the centers operate per the standards by auditing the centers by independent & internal auditors against the questionnaire. This was to identify gaps and fill the gaps by re-skilling. It included a react-based site for dashboards and admins, react-native Auditors' App, and APIs using java & spring-boot.

### My Contributions

- Reduced web page load time by ~20% & improved TTI by ~15% by re-writing the entire web app with lazy loading, windowing, and other optimizations (React, Typescript & Node).
- Reduced rendering lag and page freeze for pages with a large no of input nodes (~12.5K) by
  implementing a custom input field with lazy-synchronization of state (React, Typescript).
- Improved user’s task completion speed by ~15% by redesigning user functionality and workflow. (Calculated based on A/B testing of task completion speed)

#### Other POCs:

- Automated Video Auditing with Tensorflow (in browser & electron-based desktop app) - Analyze out of frame
- Developed a Web platform for automated Video-based auditing.
  - Sound profiles
  - In browser implementation for search, filtering.
  - video-synced (time series based) multiple answer support.
- Automatic Training/Re-skilling Assignment.
  - Rule-engine
  - Rating Trend Analysis
  - Recommender system (Collaborative Filtering).
- Smart Scheduler: Schedules tasks based on the trend of past completion scores & rules.

### FAQs

#### Biggest Problem that you solved in the projects

- Performance optimization of the pages using lazy loading, windowing and other optimization while re-writing the entire application from scratch.

#### What did you learnt new?

- The idea of using jump-boxes for extra level of security, even for sandbox environments.
