#!/bin/sh
set -eu

BASELINE_MIGRATION="20260317212000_baseline_current_schema"

echo "Running Prisma migration deploy..."
set +e
MIGRATE_OUTPUT=$(npx prisma migrate deploy 2>&1)
MIGRATE_STATUS=$?
set -e

echo "$MIGRATE_OUTPUT"

if [ "$MIGRATE_STATUS" -eq 0 ]; then
  exec npm start
fi

case "$MIGRATE_OUTPUT" in
  *"Error: P3005"*)
    echo "Detected existing database without Prisma migration history."
    echo "Synchronizing schema safely with db push, then baselining migration history."
    npx prisma db push --skip-generate
    npx prisma migrate resolve --applied "$BASELINE_MIGRATION"
    npx prisma migrate deploy
    exec npm start
    ;;
  *)
    exit "$MIGRATE_STATUS"
    ;;
esac
