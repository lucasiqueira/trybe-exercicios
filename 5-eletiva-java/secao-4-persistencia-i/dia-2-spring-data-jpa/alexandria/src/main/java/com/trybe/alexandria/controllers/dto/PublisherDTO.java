package com.trybe.alexandria.controllers.dto;

import com.trybe.alexandria.models.entities.Author;
import com.trybe.alexandria.models.entities.Publisher;

public record PublisherDTO(Long id, String name, String address) {

  public Publisher toPublisher() {
    return new Publisher(id, name, address);
  }

}
