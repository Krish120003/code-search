# Frontend Architecture & UI Specification

## 1. Layout & Theme

- **Two‑column grid** (100% viewport height):
  - **Sidebar** (~25% width) on `#111`
  - **Main content** (~75% width) on `#212121`
- **Fixed header** across both columns, semi‑transparent dark overlay
- **Color palette**:
  - Primary text: `#EEE`
  - Secondary text / borders: `#666–#888`
  - Accent highlight: `#7AB`

---

## 2. Pages & Routes

- **`/`** – Search UI: live search bar + results pane

---

## 3. Styling & Interaction Tips

- **Typography**:
  - Logo/title in monospace or geometric sans‑serif
  - Code in a monospaced font (e.g. Menlo, Consolas)
- **Accessibility**: ensure all icons/buttons have `aria-label`

## 4. Interaction

Use the nuqs library to have the search bar as a state in the URL.
You should query as soon as there is somehting new typed. dont wait for the user.

---

User ideas (rough concepts dont have to follow but its very helpful)

Overall Concept & Value Proposition:
Core Function: grep.app provides an extremely fast, web-based code search across a massive dataset (stated as "a million GitHub repositories").
Target Audience: Developers needing to quickly find code examples, usages, definitions, or patterns across a wide range of open-source projects.
Key Selling Point: Speed and scale. The name "grep" itself evokes the speed and utility of the classic command-line tool, applied to a web-scale code corpus.
User Experience (UX) - The "Amazing" Factor:
Blazing Speed: This is the most striking feature. Searches and filters appear to return results almost instantaneously, even as the user types (live search). This suggests a highly optimized backend index and efficient frontend rendering.
Live/Incremental Search: Results update character-by-character as the user types in the search bar. This provides immediate feedback and allows users to refine their query on the fly without explicit "submit" actions.
Instantaneous Filtering: Applying filters (Repository, Path, Language) also updates the results instantly without a page reload. The filter options themselves dynamically update counts based on the current search query before being applied, giving users context.
Intuitive Interaction Model: The core interactions (typing to search, clicking to filter) are simple and familiar. The state of the search (query, active filters, search modes) is clearly reflected in the UI and, importantly, in the URL.
Contextual Results: Code snippets are presented with surrounding lines and line numbers, providing context. The search term is clearly highlighted within the snippet. Results are grouped logically (by repository/file).
Seamless State Management: The use of URL query parameters (q=, words=, regexp=, lang:, path:, repo:) to reflect the search state is crucial. This makes searches bookmarkable, shareable, and allows browser back/forward navigation to work as expected.
Minimalist & Focused Design: The UI is clean, uncluttered, and prioritizes the search function. The dark theme is common in developer tools and reduces eye strain.
User Interface (UI) Breakdown:
Landing Page / Initial State:
Header: Simple, contains the Logo (▲ grep), potentially a link back home, and a "Feedback" button.
Central Focus: Large search input field.
Tagline: Clear value proposition ("Code search made fast").
Sub-tagline: Explains the scope ("Effortlessly search for code, files, and paths across a million GitHub repositories.").
Footer: Standard links (Home, Docs, Guides, Help, Privacy, Terms), Theme Toggles (Light/Dark/System), Copyright.
Search Input Component:
Placeholder: "Search".
Search Mode Toggles: Icons integrated directly into the right side of the search bar:
Aa: Case Sensitivity toggle (likely defaults to insensitive). Visual state change (highlight/color) indicates active state. Updates URL (case=true might appear, or its absence implies default).
ab (or similar icon): Whole Word toggle. Visual state change. Updates URL (words=true).
.\*: Regular Expression toggle. Visual state change. Updates URL (regexp=true).
Tooltips: Hovering over the icons reveals their function (essential for discoverability).
Search Results Page Layout (Appears after typing):
Persistent Header/Search: The header and main search bar remain fixed at the top.
Three-Column Layout:
Left Column (Filters): Contains collapsible/expandable sections for filtering results.
Center/Right Column (Results): Displays the actual code matches.
Top Bar (Above Results): Shows the total number of results found (e.g., "304,350 results found") and potentially view options (like "Compact" toggle).
Filter Panel (Left Column):
Sections: Organised by filter type (e.g., "Repository", "Path", "Language"). Each section is likely expandable/collapsible.
Filter Input: Each section has a "Filter..." input field to quickly narrow down the available filter options (e.g., type "tensor" in "Filter repositories..." to find TensorFlow repos).
Filter Options List: Below the input, lists the top relevant filter values based on the current search query. Crucially, each option shows a count of matching results (e.g., tensorflow/tensorflow: 782, src/: 20k, Python: 780). These counts update live as the main search query changes.
Applying Filters: Clicking a filter option (e.g., clicking "Python") instantly applies the filter.
Active Filters Display: Applied filters appear as "chips" or tags below the relevant section header (e.g., [Python x], [generative_ai/ x]). Each chip has an 'X' icon to remove that specific filter instantly.
Clear Category: A "Clear" link often appears next to the section header (e.g., next to "Path") when filters from that category are active, allowing removal of all filters in that category at once.
URL Update: Applying/removing filters updates the URL query parameters (e.g., &lang:python=true, &path=generative_ai%2F).
Results Panel (Center/Right Column):
Grouping: Results are grouped, typically by repository and then file path (e.g., tensorflow/tensorflow path/to/file.py).
Result Item Header: Shows the repository and full file path. Often includes a count of matches within that specific file (e.g., "16 matches", "100+ matches").
Code Snippets: Shows relevant lines of code containing the match.
Line Numbers: Displayed to the left of the code lines for context.
Highlighting: The searched term(s) are clearly highlighted within the code snippets.
Pagination/Loading: Initially loads a set of results. A "Load More Results" button appears at the bottom (seen around 0:28) to fetch the next batch, indicating paginated loading rather than infinite scroll.
Compact View: A toggle (top-right) likely reduces the vertical space per result, perhaps showing fewer context lines.

Frontend:
Framework: A modern JavaScript framework (React, Vue, Svelte, etc.) for building the interactive UI components.
State Management: Robust state management is needed. Using the URL as the source of truth (via query parameters) is a great approach, often managed with router libraries.
Performance:
Debouncing/Throttling: Debounce search input to avoid hitting the API excessively on every keystroke during live search.
Efficient Rendering: Virtual scrolling/windowing might be necessary for the results list if it can become very long, although the "Load More" button suggests manual pagination is used here.
API Optimization: Ensure API requests are minimal and responses are processed efficiently.
Component Design: Break down the UI into reusable components (SearchBar, FilterSection, ResultItem, etc.).
Highlighting: Use a library or custom logic to highlight search terms within the fetched code snippets.

# HUGE EXAMPLE

This is exactly what one search result entry looks like on grep.app

```html
<div
  class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
>
  <div
    class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
  >
    <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
      <div class="flex shrink-0 flex-row items-center gap-2">
        <img
          alt="14101776 avatar"
          width="16"
          height="16"
          class="rounded-sm"
          src="https://avatars.githubusercontent.com/u/14101776?s=60&amp;v=4"
        /><a href="https://github.com/flutter/flutter"
          ><span class="text-sm font-medium hover:underline"
            >flutter/flutter</span
          ></a
        >
      </div>
      <a
        href="https://github.com/flutter/flutter/blob/master/packages/flutter/lib/src/animation/curves.dart"
        ><span class="text-sm text-grep-9 hover:underline"
          >packages<wbr />/flutter<wbr />/lib<wbr />/src<wbr />/animation<wbr />/curves.dart</span
        ></a
      >
    </div>
    <div class="hidden text-nowrap text-xs text-grep-9 md:block">
      100+ matches
    </div>
  </div>
  <div>
    <table class="highlight-table">
      <tbody>
        <tr data-line="103">
          <td><div class="lineno">103</div></td>
          <td>
            <div class="highlight">
              <pre><span class="w">  </span><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_bounce_in.mp4}</span></pre>
            </div>
          </td>
        </tr>
        <tr data-line="104">
          <td><div class="lineno">104</div></td>
          <td>
            <div class="highlight">
              <pre><span class="w">  </span><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_flipped.mp4}</span></pre>
              <div class="jump"></div>
            </div>
          </td>
        </tr>
        <tr data-line="129">
          <td><div class="lineno">129</div></td>
          <td>
            <div class="highlight">
              <pre><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_sawtooth.mp4}</span></pre>
            </div>
          </td>
        </tr>
        <tr data-line="130">
          <td><div class="lineno">130</div></td>
          <td>
            <div class="highlight">
              <pre><span class="kd">class</span><span class="w"> </span><span class="nc">SawTooth</span><span class="w"> </span><span class="kd">extends</span><span class="w"> </span><span class="n">Curve</span><span class="w"> </span><span class="p">{</span></pre>
              <div class="jump"></div>
            </div>
          </td>
        </tr>
        <tr data-line="157">
          <td><div class="lineno">157</div></td>
          <td>
            <div class="highlight">
              <pre><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_interval.mp4}</span></pre>
            </div>
          </td>
        </tr>
        <tr data-line="158">
          <td><div class="lineno">158</div></td>
          <td>
            <div class="highlight">
              <pre><span class="kd">class</span><span class="w"> </span><span class="nc">Interval</span><span class="w"> </span><span class="kd">extends</span><span class="w"> </span><span class="n">Curve</span><span class="w"> </span><span class="p">{</span></pre>
              <div class="jump"></div>
            </div>
          </td>
        </tr>
        <tr data-line="212">
          <td><div class="lineno">212</div></td>
          <td>
            <div class="highlight">
              <pre><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_split.mp4}</span></pre>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```
