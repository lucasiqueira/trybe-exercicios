package com.trybe.alexandria.models.repositories;

import com.trybe.alexandria.models.entities.BookDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookDetailRepository extends JpaRepository<BookDetail, Long> {

}
