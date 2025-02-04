import { useLayoutEffect } from 'react';

function useDocumentTitle(title: string): void {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
