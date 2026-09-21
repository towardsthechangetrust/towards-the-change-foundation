"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";

type Submission = {
  id: number;
  name: string;
  email: string;
  interest: string | null;
  message: string;
  submitted_at: string;
};

type MediaItem = {
  id: number;
  title: string;
  category: string;
  media_type: "image" | "video";
  r2_key: string;
  file_size: number;
  created_at: string;
};

const categories = [
  "Health Camps",
  "Women & Child Safety",
  "Youth Leadership",
  "Environmental Action",
  "Rural Upliftment",
  "Awards & Recognition",
  "General",
  "Other",
];

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"submissions" | "media">("submissions");

  // Submissions state
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterInterest, setFilterInterest] = useState("");

  // Media state
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [loadingMedia, setLoadingMedia] = useState(false);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState(categories[0]);
  const [customCategory, setCustomCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const [isPending, startTransition] = useTransition();

  // Check auth status on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/auth");
        const data = await res.json();
        setAuthenticated(data.authenticated);
        if (data.authenticated) {
          loadSubmissions();
          loadMedia();
        }
      } catch {
        setAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setAuthenticated(true);
        loadSubmissions();
        loadMedia();
      } else {
        setLoginError(data.error || "Incorrect password");
      }
    } catch {
      setLoginError("Login failed. Please check network connection.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthenticated(false);
    setPassword("");
  }

  async function loadSubmissions() {
    setLoadingSubmissions(true);
    try {
      const res = await fetch("/api/admin/submissions");
      const data = await res.json();
      if (res.ok) {
        setSubmissions(data.submissions || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSubmissions(false);
    }
  }

  async function loadMedia() {
    setLoadingMedia(true);
    try {
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      if (res.ok) {
        setMediaList(data.media || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMedia(false);
    }
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile || !uploadTitle.trim()) {
      setUploadMessage("Please provide a file and a title.");
      return;
    }

    setUploading(true);
    setUploadMessage("");

    const finalCategory =
      uploadCategory === "Other"
        ? customCategory.trim() || "General"
        : uploadCategory;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", uploadTitle.trim());
    formData.append("category", finalCategory);

    try {
      const res = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setUploadMessage("Uploaded successfully!");
        setUploadTitle("");
        setCustomCategory("");
        setSelectedFile(null);
        // Reset file input
        const fileInput = document.getElementById("media-file-input") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        loadMedia();
      } else {
        setUploadMessage(data.error || "Upload failed");
      }
    } catch {
      setUploadMessage("Upload error. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleDeleteMedia(id: number, r2_key: string) {
    if (!confirm("Are you sure you want to delete this media item?")) return;

    try {
      const res = await fetch("/api/admin/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, r2_key }),
      });
      if (res.ok) {
        setMediaList((prev) => prev.filter((m) => m.id !== id));
      } else {
        alert("Failed to delete media");
      }
    } catch {
      alert("Error deleting media");
    }
  }

  // Filter submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesInterest = filterInterest ? sub.interest === filterInterest : true;
    return matchesSearch && matchesInterest;
  });

  if (authenticated === null) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-6 text-sm text-foreground/60">
        Loading admin console…
      </div>
    );
  }

  // Login View
  if (!authenticated) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-12">
        <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">
          <div className="text-center">
            <span className="inline-block rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
              Admin Portal
            </span>
            <h1 className="mt-3 font-display text-2xl font-semibold text-brand-dark">
              Foundation Console
            </h1>
            <p className="mt-1.5 text-xs text-foreground/70">
              Sign in to manage submissions, photos, and videos.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label htmlFor="admin-password" className="block text-xs font-medium text-brand-dark">
                Admin Password
              </label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="mt-1.5 w-full rounded-xl border border-black/10 bg-sand/30 px-4 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
              />
            </div>

            {loginError && (
              <p className="text-xs font-medium text-red-600" role="alert">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-brand py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-black/5 pb-6">
        <div>
          <span className="inline-block rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
            Admin Console
          </span>
          <h1 className="mt-1 font-display text-2xl font-bold text-brand-dark sm:text-3xl">
            Towards the Change Management
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/gallery"
            target="_blank"
            className="rounded-full border border-brand/20 bg-white px-4 py-2 text-xs font-semibold text-brand-dark transition hover:bg-sand"
          >
            View Live Gallery ↗
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-foreground/70 transition hover:bg-black/5"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex gap-2 border-b border-black/5 pb-3">
        <button
          onClick={() => setActiveTab("submissions")}
          className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
            activeTab === "submissions"
              ? "bg-brand text-white shadow-sm"
              : "bg-sand/60 text-brand-dark hover:bg-sand"
          }`}
        >
          Contact Submissions ({submissions.length})
        </button>
        <button
          onClick={() => setActiveTab("media")}
          className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
            activeTab === "media"
              ? "bg-brand text-white shadow-sm"
              : "bg-sand/60 text-brand-dark hover:bg-sand"
          }`}
        >
          Photo & Video Uploads ({mediaList.length})
        </button>
      </div>

      {/* TAB 1: SUBMISSIONS */}
      {activeTab === "submissions" && (
        <section className="mt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email, or message…"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus:border-brand focus:outline-none sm:max-w-xs"
              />
              <select
                value={filterInterest}
                onChange={(e) => setFilterInterest(e.target.value)}
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none"
              >
                <option value="">All interests</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Partner">Partner</option>
                <option value="Donate">Donate</option>
                <option value="Media">Media</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={loadSubmissions}
                className="rounded-xl border border-black/10 bg-white px-3.5 py-2 text-xs font-medium text-foreground/70 hover:bg-sand/40"
              >
                Refresh
              </button>
              <a
                href="/api/admin/submissions/export"
                className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-dark"
              >
                <span>📥 Export CSV</span>
              </a>
            </div>
          </div>

          {loadingSubmissions ? (
            <div className="py-12 text-center text-sm text-foreground/60">Loading submissions…</div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-black/15 p-10 text-center text-sm text-foreground/60">
              No submissions found.
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {filteredSubmissions.map((sub) => (
                <div
                  key={sub.id}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:border-brand/20 sm:p-6"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2.5">
                      <span className="font-display font-semibold text-brand-dark sm:text-base">
                        {sub.name}
                      </span>
                      {sub.interest && (
                        <span className="rounded-full bg-sand px-2.5 py-0.5 text-[11px] font-medium text-brand-dark">
                          {sub.interest}
                        </span>
                      )}
                    </div>
                    <time className="text-xs text-foreground/50">
                      {new Date(sub.submitted_at).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </time>
                  </div>

                  <div className="mt-2 text-xs text-brand sm:text-sm">
                    <a href={`mailto:${sub.email}`} className="hover:underline">
                      {sub.email}
                    </a>
                  </div>

                  <p className="mt-3 whitespace-pre-wrap text-xs leading-relaxed text-foreground/75 sm:text-sm">
                    {sub.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* TAB 2: MEDIA UPLOADER (PHOTOS & VIDEOS) */}
      {activeTab === "media" && (
        <section className="mt-6">
          {/* Upload Form Box */}
          <div className="rounded-3xl border border-brand/15 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-lg font-semibold text-brand-dark sm:text-xl">
              Upload New Photo or Video
            </h2>
            <p className="mt-1 text-xs text-foreground/70">
              Media uploaded here will instantly be displayed in the public gallery.
            </p>

            <form onSubmit={handleUpload} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="media-title" className="block text-xs font-medium text-brand-dark">
                    Media Title <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="media-title"
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="e.g. Free Eye Screening Camp in Katheri"
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-sand/20 px-3.5 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="media-category" className="block text-xs font-medium text-brand-dark">
                    Category
                  </label>
                  <select
                    id="media-category"
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-sand/20 px-3.5 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {uploadCategory === "Other" && (
                <div>
                  <label htmlFor="custom-category" className="block text-xs font-medium text-brand-dark">
                    Custom Category Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="custom-category"
                    type="text"
                    required
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    placeholder="e.g. Tree Plantation, Youth Sports Camp"
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-sand/20 px-3.5 py-2.5 text-sm focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label htmlFor="media-file-input" className="block text-xs font-medium text-brand-dark">
                  Select Image or Video File (Max 100MB) <span aria-hidden="true">*</span>
                </label>
                <input
                  id="media-file-input"
                  type="file"
                  required
                  accept="image/*,video/*"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  className="mt-1.5 w-full rounded-xl border border-dashed border-brand/30 bg-sand/30 p-3 text-xs text-foreground/80 file:mr-3 file:rounded-full file:border-0 file:bg-brand file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-white file:transition hover:file:bg-brand-dark"
                />
                {selectedFile && (
                  <p className="mt-1 text-[11px] text-foreground/60">
                    Selected: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                  </p>
                )}
              </div>

              {uploadMessage && (
                <p
                  className={`text-xs font-medium ${
                    uploadMessage.includes("success") ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {uploadMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={uploading}
                className="rounded-full bg-brand px-7 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:opacity-60"
              >
                {uploading ? "Uploading…" : "Upload to Gallery"}
              </button>
            </form>
          </div>

          {/* Media Grid */}
          <div className="mt-8">
            <div className="flex items-center justify-between pb-3">
              <h2 className="font-display text-lg font-semibold text-brand-dark">
                Uploaded Media ({mediaList.length})
              </h2>
              <button
                onClick={loadMedia}
                className="rounded-xl border border-black/10 bg-white px-3 py-1.5 text-xs text-foreground/70 hover:bg-sand/40"
              >
                Refresh
              </button>
            </div>

            {loadingMedia ? (
              <div className="py-12 text-center text-sm text-foreground/60">Loading media…</div>
            ) : mediaList.length === 0 ? (
              <div className="mt-4 rounded-2xl border border-dashed border-black/15 p-10 text-center text-sm text-foreground/60">
                No photos or videos uploaded yet. Use the uploader above to add your first photo or video!
              </div>
            ) : (
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {mediaList.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
                  >
                    <div className="relative aspect-video w-full bg-black/5">
                      {item.media_type === "video" ? (
                        <video
                          src={`/api/media/${item.r2_key}`}
                          className="h-full w-full object-cover"
                          controls
                        />
                      ) : (
                        <img
                          src={`/api/media/${item.r2_key}`}
                          alt={item.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                        {item.media_type}
                      </span>
                    </div>

                    <div className="p-4">
                      <span className="rounded-full bg-sand px-2 py-0.5 text-[10px] font-medium text-brand-dark">
                        {item.category}
                      </span>
                      <h3 className="mt-1.5 font-display text-sm font-semibold text-brand-dark line-clamp-1">
                        {item.title}
                      </h3>
                      <time className="mt-1 block text-[11px] text-foreground/50">
                        {new Date(item.created_at).toLocaleDateString("en-IN", {
                          dateStyle: "medium",
                        })}
                      </time>

                      <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-3">
                        <a
                          href={`/api/media/${item.r2_key}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-brand hover:underline"
                        >
                          Open file ↗
                        </a>
                        <button
                          onClick={() => handleDeleteMedia(item.id, item.r2_key)}
                          className="text-xs font-medium text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
