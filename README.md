# BIT · Club IT — HESTIM

A mobile-first introduction to the club, guided by BIT. This is a separate experience from the [main club website](https://www.it-clubhestim.site/).

**Des idées. Des potes. Des projets.**

## What’s included

- Four screens: Welcome, Club spirit, Explore, and Join.
- French and English, with a choice on the welcome screen and a switch available throughout. The visitor’s preference is remembered on their device.
- Four subjects and twelve short discovery ideas: programming, AI, cybersecurity, and robotics & IoT. Select an idea to replace the current description in place.
- Compact screens designed to fit standard phone viewports without scrolling. Large text and browser zoom can still expand the page, so nothing is clipped.
- Animated BIT artwork with a reduced-motion alternative based on the visitor’s device setting.
- Membership form, WhatsApp contact, Instagram **@hestimitclub**, and a link to the main website.

The ideas shown are suggestions to explore, not claims about completed projects or scheduled events. The membership form is an external Google Form and remains in French.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project** and import `yassine-yki/intro-club`.
2. Keep **Root Directory** at the repository root. The included `vercel.json` selects the static `dist` directory and skips installation and building.
3. If Vercel asks for a framework, choose **Other**. No environment variables are required.
4. Deploy, open the production URL on a phone, and check the membership/contact links.
5. Use the stable production domain or your own custom domain for the roll-up QR code, rather than a temporary deployment URL. Make sure visitors can open it without a Vercel sign-in.

Future pushes to the connected production branch update the site. Keep the same domain so the printed QR continues working.

[Vercel configuration reference](https://vercel.com/docs/project-configuration/vercel-json)

## Preview locally

With Node.js installed:

```sh
npm run dev
```

Open the URL printed in the terminal, normally `http://127.0.0.1:4173/`. No package installation is needed.

Run the content, asset and JavaScript checks with:

```sh
npm run check
```

Serve the site over HTTP; opening `index.html` directly from the filesystem will not load JavaScript modules correctly.

## Update the club content

| File | What to change |
| --- | --- |
| `dist/content.js` | French and English copy, discovery subjects, options, and membership/contact links |
| `dist/app.js` | Screen layout, navigation and BIT’s responses |
| `dist/styles.css` | Mobile-first layout, colors, typography and motion |
| `dist/assets/` | Optimized transparent BIT illustrations |
| `dist/index.html` | Page shell and metadata |
| `vercel.json` | Deployment configuration |

Update both `fr` and `en` when changing copy. To add a discovery topic, add matching entries under `explore.subjects` in each language. When the club has real activity photos or projects to share, add a screen and update the screen list, navigation labels and renderer together.

`dist/` is the actual site source, not disposable generated output. Commit it when making changes.

## Before printing the roll-up

- Use **@hestimitclub**, the account linked from the club’s Linktree. The earlier banner mockup used a different handle.
- Generate the real QR only after the final production URL is confirmed.
- Test the printed QR with several phones at the intended size and distance.

## Notes

The site uses plain HTML, CSS and JavaScript with no backend, login or analytics. It only stores the language preference locally. Fonts load from Google Fonts; system fonts are used if that service is unavailable. External membership and social links open in a new tab.

BIT's standalone illustration matches the floating purple cube character on the approved roll-up. It was created with the built-in image tool using this brief: isolate the same seven-block character, preserve its purple cube head, navy eyes, white corner notch, two violet torso blocks, blue hands and navy feet, and use a transparent background with no text or poster elements. The transparent WebP is shared across all screens and is about 44 KB. The current header uses a simple code mark with the club name; it can be replaced with the club's original logo file.

The compact layout was checked in a Chromium browser at nine viewport sizes, from 320 × 568 portrait and 568 × 320 landscape to desktop. All four screens and twelve idea states fit in both languages (288 combinations). Language persistence, switching ideas, reduced motion and access with enlarged text were also checked. This does not replace a final check on the team's actual phones.
