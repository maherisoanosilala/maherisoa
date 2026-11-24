"use client";

import { useState, useEffect } from "react";

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Ce code ne s'exécute que dans le navigateur, après le rendu initial
    setYear(new Date().getFullYear());
  }, []);

  // On affiche un placeholder vide pendant le rendu serveur
  // pour éviter tout décalage visuel (layout shift)
  if (year === null) return null;

  return <>{year}</>;
}