package com.trybe.alexandria.controllers;

import com.trybe.alexandria.controllers.dto.AuthorDTO;
import com.trybe.alexandria.controllers.dto.BookDTO;
import com.trybe.alexandria.controllers.dto.ResponseDTO;
import com.trybe.alexandria.models.entities.Author;
import com.trybe.alexandria.models.entities.Book;
import com.trybe.alexandria.services.AuthorService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authors")
public class AuthorController {

  private AuthorService authorService;

  @Autowired
  public AuthorController(AuthorService authorService) {
    this.authorService = authorService;
  }

  @PostMapping
  public ResponseEntity<ResponseDTO<Author>> createAuthor(@RequestBody AuthorDTO authorDTO) {
    Author newAuthor = authorService.insertAuthor(authorDTO.toAuthor());
    ResponseDTO<Author> responseDTO = new ResponseDTO<>("Autor criado com sucesso!", newAuthor);
    return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
  }

  @PutMapping("/{authorId}")
  public ResponseEntity<ResponseDTO<Author>> updateAuthor(@PathVariable Long authorId,
    @RequestBody AuthorDTO authorDTO) {
    Optional<Author> authorOptional = authorService.updateAuthor(authorId, authorDTO.toAuthor());

    if (authorOptional.isEmpty()) {
      ResponseDTO<Author> responseDTO = new ResponseDTO<>(
        String.format("Não foi encontrado o autor de ID %d", authorId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Author> responseDTO = new ResponseDTO<>(
      "Autor atualizado com sucesso!", authorOptional.get());
    return ResponseEntity.ok(responseDTO);
  }

  @DeleteMapping("/{authorId}")
  public ResponseEntity<ResponseDTO<Author>> removeAuthorById(@PathVariable Long authorId) {
    Optional<Author> optionalAuthor = authorService.removeAuthorById(authorId);

    if (optionalAuthor.isEmpty()) {
      ResponseDTO<Author> responseDTO = new ResponseDTO<>(
        String.format("Não foi encontrado o autor de ID %d", authorId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Author> responseDTO = new ResponseDTO<>("Autor removido com sucesso!", null);
    return ResponseEntity.ok(responseDTO);
  }

  @GetMapping("/{authorId}")
  public ResponseEntity<ResponseDTO<Author>> getAuthorById(@PathVariable Long authorId) {
    Optional<Author> optionalAuthor = authorService.getAuthorById(authorId);

    if (optionalAuthor.isEmpty()) {
      ResponseDTO<Author> responseDTO = new ResponseDTO<>(
        String.format("Não foi encontrado o autor de ID %d", authorId), null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Author> responseDTO = new ResponseDTO<>("Autor encontrado com sucesso!",
                                                        optionalAuthor.get());
    return ResponseEntity.ok(responseDTO);
  }

  @GetMapping
  public List<AuthorDTO> getAllAuthors() {
    List<Author> allAuthors = authorService.getAllAuthors();
    return allAuthors.stream()
      .map(author -> new AuthorDTO(author.getId(), author.getName(), author.getNationality()))
      .collect(Collectors.toList());
  }
}
