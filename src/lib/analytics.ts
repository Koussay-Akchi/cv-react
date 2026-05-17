type EventProps = Record<string, string | number | boolean | undefined>;

/** Fire-and-forget PostHog capture without pulling posthog-js into the main bundle. */
export function capture(event: string, properties?: EventProps): void {
  if (typeof window === 'undefined') return;
  void import('posthog-js')
    .then(({default: posthog}) => posthog.capture(event, properties))
    .catch(() => {});
}

export function captureException(error: unknown): void {
  if (typeof window === 'undefined') return;
  void import('posthog-js')
    .then(({default: posthog}) => posthog.captureException(error))
    .catch(() => {});
}
