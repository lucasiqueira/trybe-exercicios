package com.trybe.alexandria.controllers.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.trybe.alexandria.models.entities.BookDetail;

public record BookDetailDTO(
  Long id,
  String summary,
  @JsonProperty("page_count")
  Integer pageCount,
  String year,
  String isbn) {

  public BookDetail toBookDetail() {
    return new BookDetail(id, summary, pageCount, year, isbn);
  }

}
