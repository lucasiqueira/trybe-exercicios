package com.trybe.alexandria.services;

import com.trybe.alexandria.models.entities.Publisher;
import com.trybe.alexandria.models.repositories.PublisherRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PublisherService {

  private PublisherRepository publisherRepository;

  @Autowired
  public PublisherService(PublisherRepository publisherRepository) {
    this.publisherRepository = publisherRepository;
  }

  public Publisher insertPublisher(Publisher publisher) {
    return publisherRepository.save(publisher);
  }

  public Optional<Publisher> updatePublisher(Long id, Publisher publisher) {
    Optional<Publisher> publisherOptional = publisherRepository.findById(id);

    if (publisherOptional.isPresent()) {
      Publisher publisherFromDB = publisherOptional.get();
      publisherFromDB.setName(publisher.getName());
      publisherFromDB.setAddress(publisher.getAddress());

      Publisher updatedPublisher = publisherRepository.save(publisherFromDB);
      return Optional.of(updatedPublisher);
    }
    return publisherOptional;
  }

  public Optional<Publisher> removePublisherById(Long id) {
    Optional<Publisher> publisherOptional = publisherRepository.findById(id);

    if (publisherOptional.isPresent()) {
      publisherRepository.deleteById(id);
    }

    return publisherOptional;
  }

  public Optional<Publisher> getPublisherById(Long id) {
    return publisherRepository.findById(id);
  }

  public List<Publisher> getAllPublishers() {
    return publisherRepository.findAll();
  }
}
