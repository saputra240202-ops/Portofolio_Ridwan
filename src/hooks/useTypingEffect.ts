"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  delayBetweenWords?: number;
}

export function useTypingEffect({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  delayBetweenWords = 500,
}: UseTypingEffectOptions) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }
  }, [isDeleting, text, wordIndex, words]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(tick, delayBetweenWords);
      return () => clearTimeout(timeout);
    } else {
      timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, tick, typeSpeed, deleteSpeed, pauseTime, delayBetweenWords]);

  return text;
}
