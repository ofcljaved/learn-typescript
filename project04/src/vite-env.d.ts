/// <reference types="vite/client" />

type languageType = {
  name: string;
  code: string;
};

type lang = "ja" | "es" | "hi" | "fr";

type WordType = {
  word: string;
  meaning: string;
  options: string[];
};

interface StateType {
  loading: boolean;
  result: string[];
  words: WordType[];
  error?: string;
}
