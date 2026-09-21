"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 w-full rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="mt-10 rounded-2xl border border-black/5 bg-white p-8 text-center">
        <p className="text-2xl">✅</p>
        <p className="mt-3 font-display text-lg font-semibold text-brand-dark">
          Message received!
        </p>
        <p className="mt-2 text-sm text-foreground/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-10 space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-brand-dark"
          >
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-brand-dark"
          >
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-interest"
          className="block text-sm font-medium text-brand-dark"
        >
          I want to…
        </label>
        <select
          id="contact-interest"
          name="interest"
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
        >
          <option value="">Select an option</option>
          <option value="Volunteer">Volunteer with a program</option>
          <option value="Partner">Partner as an organisation</option>
          <option value="Donate">Support / donate</option>
          <option value="Media">Media or press inquiry</option>
          <option value="Other">Something else</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-brand-dark"
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about yourself and what you have in mind…"
          className="mt-1.5 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-brand focus:outline-none"
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
