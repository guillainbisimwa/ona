#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GH="${GH_BIN:-$ROOT/.tools/gh_2.63.2_macOS_arm64/bin/gh}"

if ! "$GH" auth status >/dev/null 2>&1; then
  echo "Authenticate first:"
  echo "  $GH auth login --hostname github.com --git-protocol ssh --web"
  exit 1
fi

create_pr() {
  local branch="$1" title="$2" body="$3"
  if "$GH" pr list --head "$branch" --state open --json number --jq length | grep -q '^0$'; then
    "$GH" pr create --base main --head "$branch" --title "$title" --body "$body"
  else
    echo "Open PR already exists for $branch"
    "$GH" pr view --head "$branch" --web
  fi
}

create_pr feat/docs "docs: add README and user manual" "## Summary
- Add project README with setup instructions
- Add USER-MANUAL.md documenting app screens and usage

## Test plan
- [ ] README links resolve correctly
- [ ] User manual lists all planned screens"

create_pr feat/shared-constants "feat: add shared app constants" "## Summary
- Add color palette constants
- Add translation constants scaffold

## Test plan
- [ ] Constants import without TypeScript errors"

create_pr feat/app-context "feat: add AppContext for global state" "## Summary
- Add React context scaffold for global app state

## Test plan
- [ ] Context module compiles without errors"

create_pr feat/assets "chore: add assets directory structure" "## Summary
- Add placeholder for image assets directory

## Test plan
- [ ] assets/images/ path exists in repo"

create_pr feat/app-routing "feat: add Expo Router app shell" "## Summary
- Add root layout, index route, and not-found route scaffolds

## Test plan
- [ ] App boots with Expo Router entry
- [ ] Route files compile without errors"

create_pr feat/onboarding-screens "feat: add onboarding screen scaffolds" "## Summary
- Add welcome, language select, and consent screen scaffolds

## Test plan
- [ ] Screen files compile without errors"

create_pr feat/core-screens "feat: add core navigation screen scaffolds" "## Summary
- Add home, history, settings, and about screen scaffolds

## Test plan
- [ ] Screen files compile without errors"

create_pr feat/screening-screens "feat: add screening flow screen scaffolds" "## Summary
- Add patient info, eye capture, AI processing, and screening result screen scaffolds

## Test plan
- [ ] Screen files compile without errors"

create_pr feat/va-screens "feat: add visual acuity test screen scaffolds" "## Summary
- Add VA calibration, test, and result screen scaffolds

## Test plan
- [ ] Screen files compiles without errors"

echo "Done."
