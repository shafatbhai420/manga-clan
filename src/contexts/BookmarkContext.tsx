'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface Manga {
  id: string;
  title: string;
  imageUrl?: string;
  coverImage?: string;
  anilistPoster?: string | null;
}

interface BookmarkContextType {
  bookmarks: Manga[];
  addBookmark: (manga: Manga) => void;
  removeBookmark: (mangaId: string) => void;
  isBookmarked: (mangaId: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Manga[]>([]);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('mangaBookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('mangaBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (manga: Manga) => {
    setBookmarks(prev => {
      if (!prev.some(item => item.id === manga.id)) {
        return [...prev, manga];
      }
      return prev;
    });
  };

  const removeBookmark = (mangaId: string) => {
    setBookmarks(prev => prev.filter(manga => manga.id !== mangaId));
  };

  const isBookmarked = (mangaId: string) => {
    return bookmarks.some(manga => manga.id === mangaId);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
} 