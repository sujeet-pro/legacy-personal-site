---
title: Streamlining Infra Costs with Responsive Images
description: Using responsive images powered by a image transofrormation service on a site with high traffic, results in high cost. We saved around 70% by using just a CDN in front!
isDraft: false
isContentSummaryOpen: true
image: ./cost-reduction.jpg
imageCredit: Photo by <a href="https://unsplash.com/@blankerwahnsinn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fabian Blank</a> on <a href="https://unsplash.com/photos/pink-pig-figurine-on-white-surface-pElSkGRA2NU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
publishedOn: 2024-01-19
lastUpdatedOn: 2024-01-19
topics:
  - availability
  - cost-optimization
  - infra
  - performance
  - web-development
---

## TLDR: Navigating the Image Dilemma in Ecommerce

In response to the bandwidth challenges posed by high-quality images on our ecommerce site, we transitioned to responsive images, aiming to provide the best user experience. Despite the newfound versatility, the use of a third-party image service introduced escalating costs tied to transformations and network bandwidth.

To tackle this, we strategically integrated AWS CloudFront CDN, significantly reducing direct calls to the image service and optimizing overall bandwidth. Although additional CDN costs were incurred, a 50% discount from AWS resulted in an impressive 70% reduction in image serving costs. This approach not only enhanced cost-efficiency but also led to improved web performance and an enriched user experience.

## Context - Navigating the Image Dilemma

Images are the lifeblood of any ecommerce website, breathing life into products, spotlighting details, and playing a pivotal role in user experience. However, their Achilles' heel lies in substantial bandwidth consumption, making it challenging to deliver optimal images for all users.

To address this challenge, we embraced responsive images, allowing for diverse images tailored to various resolutions and pixel densities. However, with a singular high-quality image, we enlisted the help of a third-party image service, such as Cloudinary, to transform our images based on query parameters. This flexibility allowed us to crop, resize, and control image quality and format, but the accompanying costs posed a significant challenge.

### Cost of Image Transformation

The expense of these services hinged on:

-The number of transformations performed.
-Managed Storage.
-Network bandwidth consumption when serving these images.
Despite having 10 variations of each image (with differing sizes and qualities), the immense user demand substantially inflated our costs.

### Bandwidth Scale

Our daily image transfer is approximately 3TB, a figure that continues to rise with an expanding user base. This daily transfer equates to around 1PB annually. Anticipating a 2.5 times revenue scale in this, our bandwidth will correspondingly increase.

### Curtailing Bandwidth Consumption

To tackle these challenges head-on, we strategically deployed our own AWS CloudFront CDN in front of the image service. This resulted in our website receiving images from the CDN, significantly reducing direct calls to the origin server (image service).

Additionally, we fine-tuned the cache by implementing a Lambda@Edge with Origin Response Interceptor on CloudFront CDN, further curbing the bandwidth consumption of our CDN.

In summary:

Image service costs plummeted by over 90%.
Incurred additional costs with our CDN (offset by reduced bandwidth consumption).
AWS CDN Cost
We roughly consume around 900TB just for the images, considering that we also serve our site from the CDN, making it even larger.

The AWS Cost breakdown per GB is as follows:

| Consumption | Rate/GB | Rate/TB | Cost   |
| ----------- | ------- | ------- | ------ |
| First 10 TB | $0.085  | $87.04  | $870.4 |
| Next 40TB   | $0.080  | $81.92  | $3276  |
| Next 100TB  | $0.060  | $61.44  | $6144  |
| Next 350TB  | $0.040  | $40.96  | $14336 |
| Next 524TB  | $0.030  | $30.72  | $16097 |

For 1024TB, we have a total cost of - $40,723. When compared with Contentful, which has a $65/TB cost, it would be $66,560.

## AWS Discounts - An Extra Perk

Benefiting from our longstanding partnership with AWS, we secured a 50% discount, providing an additional layer of cost reduction. This discount will continue to grow as our usage increases.

Our total cost for bandwidth consumption, based on this, will be $20,360.

> Customers willing to make minimum traffic commitments of typically 10 TB/month or higher are eligible for discounted pricing - AWS.

Ultimately, we realized an impressive 70% savings on image serving costs.

### FAQs

#### Why not get a discount from image service provider instead.

We tried but those discounts were limited to max of 30% with various vendors. For AWS, since our entire infrastructure in on AWS, our usage overall is much higher, and we were able to secure a much better deal.

### Why not built your own image service?

We will in future, but this allowed to gain everything we needed without investing significant time in building the entire feature and we could focus on more important things for business.

## References

- [Responsive Images - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Contentful Bandwidth cost](https://www.contentful.com/help/legacy-fair-use-2020/)
- [Cludinary Pricing and Plans](https://cloudinary.com/pricing)
