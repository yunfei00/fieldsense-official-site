#!/usr/bin/env sh
set -eu

SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
DB_PATH="$SCRIPT_DIR/data/backend/db.sqlite3"
BACKUP_DIR="$SCRIPT_DIR/backups"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_FILE="$BACKUP_DIR/db-$TIMESTAMP.sqlite3"

if [ ! -f "$DB_PATH" ]; then
  echo "SQLite database not found: $DB_PATH"
  exit 1
fi

mkdir -p "$BACKUP_DIR"
cp "$DB_PATH" "$BACKUP_FILE"
echo "Backup created: $BACKUP_FILE"

ls -1t "$BACKUP_DIR"/db-*.sqlite3 2>/dev/null | awk 'NR>20' | xargs -r rm -f
echo "Cleanup done: kept latest 20 backups."
