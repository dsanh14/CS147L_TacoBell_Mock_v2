# CS 147L — Taco Bell Activity-Card-Style Mock (Version 2)

**Time limit: 25 minutes.** This is an ORIGINAL practice mock, not an official or leaked interview question. It's inspired by the reported layout scope of Exercise 3 (Strava Activity Card) but uses a fresh restaurant theme.

## Reference
- `reference/TARGET_PHONE.jpg`: the phone UI you will approximate.
- `reference/INTERVIEW_BRIEF.jpg`: larger picture plus the intended requirements.

## Required implementation (in `components/MenuItemCard.tsx`)
1. Horizontal restaurant header: logo, name above subtitle, chevron on right.
2. Large food image using `item.image` with rounded corners.
3. Item title and description from `item`.
4. **Nested Flexbox** information row: three equal-width groups for calories, price, and protein. Each has a value and descriptive label; an icon is optional if you're short on time.
5. Bottom horizontal action row with `Customize` and `Add to Order` using `Pressable`.

### Optional polish, only after required work
Exact fonts, subtle shadows, fine spacing, extra icons, button borders, pixel matching. **No functional taps, state, or navigation required.**

## Starter files
- `App.tsx`: prebuilt outer screen/navigation; don't spend interview time editing it.
- `components/MenuItemCard.tsx`: deliberately unsolved; contains TODOs and a placeholder.
- `data/menuItems.ts`: data shape and preloaded image sources. Read field names before coding.
- `assets/burrito.jpg`: food image.
- `assets/taco-bell-logo.png`: restaurant icon extracted from visual reference.

## Use in Expo Snack
1. Open https://snack.expo.dev/ and create a TypeScript Snack.
2. Replace `App.tsx` with the supplied file.
3. Create `components/MenuItemCard.tsx` and `data/menuItems.ts` in matching folders.
4. Upload both image files into the Snack `assets` folder.
5. Ensure `@expo/vector-icons` is available, then use Expo Go or Web preview.
6. Do not paste reference screenshots or README into code.

**Note:** A ZIP is not a published Expo Snack. Snack may require creating files individually rather than importing the archive.

## Interview-style rubric / 20
- Correct JSX structure and nesting: 4
- Correct data props and image rendering: 4
- Nested row/column Flexbox layout: 6
- Text styling, spacing, layout resemblance: 4
- Syntax quality and debugging: 2

A working partial card with logical containers matters more than polished pixels. Send your code and preview when the 25 minutes are over.
