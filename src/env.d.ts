// Extends the CloudflareEnv interface declared by @opennextjs/cloudflare
// with the project-specific D1 binding for contact form submissions.
declare global {
  interface CloudflareEnv {
    DB?: D1Database;
    MEDIA_BUCKET?: R2Bucket;
    RESEND_API_KEY?: string;
    RESEND_TO_EMAIL?: string;
    ADMIN_PASSWORD?: string;
  }
}

export {};
