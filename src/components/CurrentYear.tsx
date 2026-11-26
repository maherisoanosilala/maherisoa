"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => null;

export function CurrentYear() {
  const year = useSyncExternalStore<number | null>(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // On affiche un placeholder vide pendant le rendu serveur
  // pour éviter tout décalage visuel (layout shift)
  if (year === null) return null;

  return <>{year}</>;
}