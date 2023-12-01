package com.trybe.alexandria.controllers;

import com.trybe.alexandria.controllers.dto.AuthorDTO;
import com.trybe.alexandria.controllers.dto.PublisherDTO;
import com.trybe.alexandria.controllers.dto.ResponseDTO;
import com.trybe.alexandria.models.entities.Author;
import com.trybe.alexandria.models.entities.Publisher;
import com.trybe.alexandria.services.PublisherService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/publishers")
public class PublisherController {

  private PublisherService publisherService;

  @Autowired
  public PublisherController(PublisherService publisherService) {
    this.publisherService = publisherService;
  }

  @PostMapping
  public ResponseEntity<ResponseDTO<Publisher>> createAuthor(
    @RequestBody PublisherDTO publisherDTO) {
    Publisher newPublisher = publisherService.insertPublisher(publisherDTO.toPublisher());
    ResponseDTO<Publisher> responseDTO = new ResponseDTO<>("Editora criada com sucesso!",
                                                           newPublisher);
    return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
  }

  @PutMapping("/{publisherId}")
  public ResponseEntity<ResponseDTO<Publisher>> updateAuthor(@PathVariable Long publisherId,
    @RequestBody PublisherDTO publisherDTO) {
    Optional<Publisher> publisherOptional = publisherService.updatePublisher(publisherId,
                                                                             publisherDTO.toPublisher());

    if (publisherOptional.isEmpty()) {
      ResponseDTO<Publisher> responseDTO = new ResponseDTO<>(
        String.format("Não foi encontrada a editora de ID %d", publisherId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Publisher> responseDTO = new ResponseDTO<>(
      "Editora atualizada com sucesso!", publisherOptional.get());
    return ResponseEntity.ok(responseDTO);
  }

  @DeleteMapping("/{publisherId}")
  public ResponseEntity<ResponseDTO<Publisher>> removePublisherById(
    @PathVariable Long publisherId) {
    Optional<Publisher> optionalPublisher = publisherService.removePublisherById(publisherId);

    if (optionalPublisher.isEmpty()) {
      ResponseDTO<Publisher> responseDTO = new ResponseDTO<>(
        String.format("Não foi encontrada a editora de ID %d", publisherId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Publisher> responseDTO = new ResponseDTO<>("Editora removida com sucesso!", null);
    return ResponseEntity.ok(responseDTO);
  }

  @GetMapping("/{publisherId}")
  public ResponseEntity<ResponseDTO<Publisher>> getPublisherById(@PathVariable Long publisherId) {
    Optional<Publisher> optionalPublisher = publisherService.getPublisherById(publisherId);

    if (optionalPublisher.isEmpty()) {
      ResponseDTO<Publisher> responseDTO = new ResponseDTO<>(
        String.format("Não foi encontrada a editora de ID %d", publisherId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Publisher> responseDTO = new ResponseDTO<>("Editora encontrada com sucesso!",
                                                           optionalPublisher.get());
    return ResponseEntity.ok(responseDTO);
  }

  @GetMapping
  public List<PublisherDTO> getAllPublishers() {
    List<Publisher> allPublishers = publisherService.getAllPublishers();
    return allPublishers.stream()
      .map(author -> new PublisherDTO(author.getId(), author.getName(), author.getAddress()))
      .collect(Collectors.toList());
  }
}
