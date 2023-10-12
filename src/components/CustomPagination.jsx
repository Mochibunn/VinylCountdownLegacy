import { usePagination } from 'react-instantsearch';
import { Pagination } from "@nextui-org/react";
import { useState } from 'react';
import { useEffect } from 'react';

/**
 * Algolia instant search custom pagination component for NextUI
 * 2023, github.com/Mochibunn
 * 
 * 
 */
export default function CustomPagination(props) {
  const {
    nbPages,
    refine,
  } = usePagination(props);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    refine(currentPage-1)
  }, [currentPage, refine]);

  return(
    <Pagination
      size="lg"
      total={nbPages}
      page={currentPage}
      className="flex justify-center mt-1 mx-0"
      onChange={setCurrentPage}>
    </Pagination>
  )
}
