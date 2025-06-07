import type { D1Database } from '@cloudflare/workers-types';

declare global {
  namespace App {
    interface Locals {
      DB: D1Database;
    }
    interface Platform {
      env: {
        DB: D1Database;
      };
      context: {
        waitUntil(promise: Promise<any>): void;
      };
      caches: CacheStorage & { default: Cache };
    }
  }
}

export {};