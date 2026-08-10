#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

npx --yes claude-mem install --ide claude-code --provider claude --no-auto-start
