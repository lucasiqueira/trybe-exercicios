package com.trybe.alexandria.models.entities;

public class Book {

  private Long id;
  private String title;
  private String genre;

  public Book() {
  }

  public Book(Long id, String title, String genre) {
    this.id = id;
    this.title = title;
    this.genre = genre;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getGenre() {
    return genre;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }
}
